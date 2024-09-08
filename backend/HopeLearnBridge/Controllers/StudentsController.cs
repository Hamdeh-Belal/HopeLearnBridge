using HopeLearnBridge.Handlers;
using Microsoft.AspNetCore.Mvc;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentsHandler _studentsHandler;

        public StudentsController(IStudentsHandler studentsHandler)
        {
            _studentsHandler = studentsHandler;
        }

        [HttpPost]
        public async Task<ActionResult<Course>> EnrollInCourse(string studentId, string courseId)
        {
            return await _studentsHandler.EnrollInCourse(studentId, courseId);
        }
    }
}
