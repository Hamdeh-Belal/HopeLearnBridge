import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { MainContent, TeacherContainer } from './Teacher.style';
import { FormOutlined, ReadOutlined } from '@ant-design/icons';

function Teacher() {
  const items = [
    {
      key: 'Courses',
      label: <Link to="/teacher">Courses</Link>,
      icon: <ReadOutlined />,
    },
    {
      key: 'create-course',
      label: <Link to="create-course">Create Course</Link>,
      icon: <FormOutlined />,
    },
  ];

  return (
    <TeacherContainer>
      <Sidebar items={items} />
      <MainContent>
        <Outlet/>
      </MainContent>
    </TeacherContainer>
  );
}

export default Teacher;