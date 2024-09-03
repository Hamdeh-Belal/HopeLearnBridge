using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Handlers;
using Microsoft.AspNetCore.Mvc;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ICourseHandler _courseHandler;

        public CourseController(ICourseHandler courseHandler)
        {
            _courseHandler = courseHandler;
        }

        [HttpGet]
        [Route("courses")]
        public async Task<ActionResult<List<Course>>> GetCourses()
        {
            return await _courseHandler.GetCourses();
        }

        [HttpPost]
        [Route("courses")]
        public async Task<ActionResult<Course>> CreateCourse(CreateCourseRequest createCourseRequest)
        {
            var course = await _courseHandler.CreateCourse(createCourseRequest);
            return CreatedAtAction(nameof(GetCourse), new { id = course.id }, course);
        }

        [HttpGet]
        [Route("courses/{id}")]
        public async Task<ActionResult<Course>> GetCourse(string id)
        {
            return await _courseHandler.GetCourse(id);
        }
    }
}
