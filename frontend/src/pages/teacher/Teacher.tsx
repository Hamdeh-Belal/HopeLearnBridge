import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { TeacherContainer } from './Teacher.style';
import { FormOutlined } from '@ant-design/icons';

function Teacher() {
  const items = [
    {
      key: 'create-course',
      label: <Link to="create-course">Create Course</Link>,
      icon: <FormOutlined />,
    },
  ];

  return (
    <TeacherContainer>
      <Sidebar items={items} />
      <Outlet />
    </TeacherContainer>
  );
}

export default Teacher;