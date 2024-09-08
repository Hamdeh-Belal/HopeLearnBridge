using HopeLearnBridge.Models.Request;
using Microsoft.AspNetCore.Identity;
using HopeLearnBridge.Models.Enums;
using HopeLearnBridge.DataStorage;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public class UsersHandler : IUsersHandler
    {
        private readonly IDataStorage _dataStorage;
        private readonly PasswordHasher<Users> _passwordHasher;
        private readonly IJwtHandler _jwtHandler;

        public UsersHandler(IDataStorage dataStorage, IJwtHandler jwtHandler)
        {
            _dataStorage = dataStorage;
            _passwordHasher = new PasswordHasher<Users>();
            _jwtHandler = jwtHandler;
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

        public async Task<string> LoginAsync(LoginRequest loginRequest)
        {
            var users = await _dataStorage.GetItemsAsync<Users>(DataStorageConstants.UserContainerName, user => user.Email == loginRequest.Email);
            var user = users.SingleOrDefault() ?? throw new InvalidOperationException("No user found with the provided email.");
            var result = _passwordHasher.VerifyHashedPassword(user, user.Password  ?? string.Empty, loginRequest.Password);
            if (result == PasswordVerificationResult.Success)
            {
                var token = _jwtHandler.GenerateToken(user);
                return token;
            }
            throw new InvalidOperationException("Invalid email or password.");
        }

        public async Task<bool> ResetPasswordAsync(ResetPasswordRequest request, string email)
        {
            var users = await _dataStorage.GetItemsAsync<Users>(DataStorageConstants.UserContainerName, user => user.Email == email);
            var user = users.SingleOrDefault() ?? throw new InvalidOperationException("No user found with the provided email and ID.");
            var verificationResult = _passwordHasher.VerifyHashedPassword(user, user.Password  ?? string.Empty, request.OldPassword);
            if (verificationResult != PasswordVerificationResult.Success)
            {
                throw new InvalidOperationException("Invalid old password.");
            }
            verificationResult = _passwordHasher.VerifyHashedPassword(user, user.Password ?? string.Empty, request.NewPassword);
            if (verificationResult == PasswordVerificationResult.Success)
            {
                throw new InvalidOperationException("New password cannot be the same as the old password.");
            }

            user.Password = _passwordHasher.HashPassword(user, request.NewPassword);
            try
            {
                await _dataStorage.UpsertItemAsync(user, DataStorageConstants.UserContainerName, user.id  ?? string.Empty);
                return true;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Error creating new user: {ex.Message}", ex);
            }
        }
    }
}