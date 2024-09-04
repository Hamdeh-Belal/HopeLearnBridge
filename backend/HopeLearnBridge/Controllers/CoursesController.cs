using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Handlers;
using Microsoft.AspNetCore.Mvc;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Controllers
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly ICoursesHandler _coursesHandler;

        public CoursesController(ICoursesHandler coursesHandler)
        {
            _coursesHandler = coursesHandler;
        }

        [HttpGet]
        public async Task<ActionResult<List<Course>>> GetCourses()
        {
            return await _coursesHandler.GetCourses();
        }

        [HttpPost]
        public async Task<ActionResult<Course>> CreateCourse(CreateCourseRequest createCourseRequest)
        {
            var course = await _coursesHandler.CreateCourse(createCourseRequest);
            return CreatedAtAction(nameof(GetCourse), new { id = course.id }, course);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(string id)
        {
            return await _coursesHandler.GetCourse(id);
        }
    }
}
