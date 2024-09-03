using HopeLearnBridge.Models.Request;
using Microsoft.AspNetCore.Identity;
using HopeLearnBridge.Models.Enums;
using HopeLearnBridge.DataStorage;
using HopeLearnBridge.Models;


namespace HopeLearnBridge.Handlers
{
    public class UserHandler : IUserHandler
    {
        private readonly IDataStorage _dataStorage;
        private readonly PasswordHasher<Users> _passwordHasher;

        public UserHandler(IDataStorage dataStorage)
        {
            _dataStorage = dataStorage;
            _passwordHasher = new PasswordHasher<Users>();
        }

        public async Task<Users> RegisterAsync(CreateUserRequest createUserRequest)
        {

            var usersWithSameEmail = await _dataStorage.GetItemsAsync<Users>(DataStorageConstants.UserContainerName, user => user.Email == createUserRequest.Email);
            if (usersWithSameEmail.Any())
            {
                throw new InvalidOperationException("User with the same email already exists.");
            }
            if (!Enum.TryParse(createUserRequest.Role, true, out UserRole role))
            {
                throw new ArgumentException("Invalid role specified.");
            }
            var user = new Users
            {
                id = Guid.NewGuid().ToString(),
                FirstName = createUserRequest.FirstName,
                LastName = createUserRequest.LastName,
                Email = createUserRequest.Email,
                Role = role
            };
            user.Password = _passwordHasher.HashPassword(user, createUserRequest.Password);

            try
            {
                await _dataStorage.UpsertItemAsync(user, DataStorageConstants.UserContainerName, user.id);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Error creating new user: {ex.Message}", ex);
            }

            return user;
        }
    }
}
