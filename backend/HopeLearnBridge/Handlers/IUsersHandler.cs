using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public interface IUsersHandler
    {
        Task<Users> RegisterAsync(CreateUserRequest createUserRequest);
        Task<string> LoginAsync(LoginRequest loginRequest);
        Task<bool> ResetPasswordAsync(ResetPasswordRequest request, string email);
    }
}
