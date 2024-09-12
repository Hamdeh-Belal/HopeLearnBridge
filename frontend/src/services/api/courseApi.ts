import { CourseFormData} from '../../components/createcourse/CreateCourse.const';
import { Course } from '../../interfaces/course/ICourse';
import axiosInstance from './AxiosInstance';

export const coursesControllersUrls = {
  createCourse: () => 'Courses/createCourse',
  viewCourses: () => 'Courses/getCourses'
};

export const createCourse = async(courseData: CourseFormData):Promise<Course> => {
  const {data} =  await axiosInstance.post<Course>(coursesControllersUrls.createCourse(), courseData);
  return data;
};

export const viewCourses = async():Promise<Course[]> => {
  const {data} =  await axiosInstance.get<Course[]>(coursesControllersUrls.viewCourses());
  return data;
};