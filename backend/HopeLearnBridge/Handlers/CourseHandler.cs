using HopeLearnBridge.Models.Request;
using HopeLearnBridge.DataStorage;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public class CourseHandler : ICourseHandler
    {
        private readonly IDataStorage _dataStorage;

        public CourseHandler(IDataStorage dataStorage)
        {
            _dataStorage = dataStorage;
        }

        public async Task<List<Course>> GetCourses()
        {
            return await _dataStorage.GetItemsAsync<Course>(DataStorageConstants.CourseContainerName);
        }

        public async Task<Course> CreateCourse(CreateCourseRequest createCourseRequest)
        {
            var course = new Course
            {
                id = Guid.NewGuid().ToString(),
                Title = createCourseRequest.Title,
                Description = createCourseRequest.Description
            };

            try
            {
                return await _dataStorage.UpsertItemAsync(course, DataStorageConstants.CourseContainerName,course.id);
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Error creating new Course record: {ex.Message}", ex);
            }
        }

        public async Task<Course> GetCourse(string id)
        {
            var courses = await _dataStorage.GetItemsAsync<Course>(DataStorageConstants.CourseContainerName);
            var course = courses.FirstOrDefault(c => c.id == id);
            if (course == null)
            {
                throw new InvalidOperationException($"Course with id {id} not found");
            }
            return course;
        }

    }
}