using HopeLearnBridge.DataStorage;
using HopeLearnBridge.Models;

namespace HopeLearnBridge.Handlers
{
    public class StudentsHandler : IStudentsHandler
    {
        private readonly IDataStorage _dataStorage;

        public StudentsHandler(IDataStorage dataStorage)
        {
            _dataStorage = dataStorage;
        }

        public async Task<Course> EnrollInCourse(string studentId, string courseId)
        {
            if (string.IsNullOrWhiteSpace(studentId))
            {
                throw new ArgumentException("Student ID cannot be null or White Space !");
            }
            if (string.IsNullOrWhiteSpace(courseId))
            {
                throw new ArgumentException("Course ID cannot be null or White Space !");

            }
            try
            {
                var student = await _dataStorage.ReadItemAsync<Student>(DataStorageConstants.StudentContainerName, studentId, studentId) ?? throw new InvalidOperationException($"Student with id " + studentId + " not found");
                var course = await _dataStorage.ReadItemAsync<Course>(DataStorageConstants.CourseContainerName, courseId, courseId) ?? throw new InvalidOperationException($"Course with id " + courseId + " not found");

                if (!student.CoursesIds.Contains(courseId))
                {
                    throw new InvalidOperationException($"Course with ID " + courseId + " is already enrolled");
                }

                student.CoursesIds.Add(courseId);
                await _dataStorage.UpsertItemAsync(student, DataStorageConstants.StudentContainerName, studentId);

                return course;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Can't Enroll this student " + studentId + " with course " + courseId + " ==>> " + ex.Message);
            }
        }
    }
}