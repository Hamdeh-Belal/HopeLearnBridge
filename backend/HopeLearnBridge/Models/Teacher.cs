namespace HopeLearnBridge.Models
{
    public class Teacher : User
    {
        public HashSet<String> CoursesIds {get;} = new HashSet<string>();
    }
}