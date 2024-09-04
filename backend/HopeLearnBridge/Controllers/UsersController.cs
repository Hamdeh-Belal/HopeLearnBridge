using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Handlers;
using Microsoft.AspNetCore.Mvc;

namespace HopeLearnBridge.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersHandler _userHandler;

        public UsersController(IUsersHandler userHandler)
        {
            _userHandler = userHandler;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync(CreateUserRequest createUserRequest)
        {
            try
            {
                var user = await _userHandler.RegisterAsync(createUserRequest);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(LoginRequest loginRequest)
        {
            try
            {
                var token = await _userHandler.LoginAsync(loginRequest);
                Response.Headers.Append("Authorization", $"Bearer {token}");
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
