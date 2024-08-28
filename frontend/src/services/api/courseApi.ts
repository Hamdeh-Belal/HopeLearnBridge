import { CourseFormData} from '../../components/createcourse/CreateCourse.const';
import { Course } from '../interfaces/cources/Icourse';
import axiosInstance from './AxiosInstance';


export const coursesControllersUrls = {
  createCourse: () => 'Course/courses',
};

export const createCourse = async(courseData: CourseFormData):Promise<Course> => {
  const {data} =  await axiosInstance.post<Course>(coursesControllersUrls.createCourse(), courseData);
  return data;
};