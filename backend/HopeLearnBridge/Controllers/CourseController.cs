using HopeLearnBridge.DataStorage;
using Microsoft.AspNetCore.Mvc;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly IDataStorage _dataStorage;
        public CourseController(IDataStorage dataStorage)
        {
            _dataStorage = dataStorage;
        }
        [HttpGet]
        public async Task<List<Course>> GetCourses()
        {
            return await _dataStorage.GetItemsAsync<Course>(DataStorageConstants.CourseContainerName);
        }
    }
}