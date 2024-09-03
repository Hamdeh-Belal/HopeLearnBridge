using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Handlers;
using Microsoft.AspNetCore.Mvc;

namespace HopeLearnBridge.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserHandler _userHandler;

        public UserController(IUserHandler userHandler)
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
    }
}
