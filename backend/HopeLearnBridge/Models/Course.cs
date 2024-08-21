namespace HopeLearnBridge.Models
{
    public class Course
    {

        public string? id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }

        // Future enhancements:
        // public ObjectId TeacherId { get; set; } // Will be added when the Teacher class is built
        // public int CurrentLesson { get; set; } // Will be added when Lesson class and student progress features are implemented
    }
}
