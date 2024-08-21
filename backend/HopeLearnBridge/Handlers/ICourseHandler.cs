using HopeLearnBridge.Models.Request;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public interface ICourseHandler
    {
        Task<List<Course>> GetCourses();
        Task<Course> CreateCourse(CreateCourseRequest createCourseRequest);
        Task<Course> GetCourse(string id);
    }
}
