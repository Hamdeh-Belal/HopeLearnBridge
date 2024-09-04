using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public interface IUserHandler
    {
        Task<Users> RegisterAsync(CreateUserRequest createUserRequest);
    }
}