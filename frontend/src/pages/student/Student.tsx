import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { MainContent, StudentContainer } from './Student.style';
import { ReadOutlined } from '@ant-design/icons';
import { STUDENT_PAGE_TEST_ID } from './Student.const';

const Student = () => {
  const items = [
    {
      key: 'Courses',
      label: <Link to="/student">Courses</Link>,
      icon: <ReadOutlined />,
    },
  ];
  return (
    <StudentContainer data-testid={STUDENT_PAGE_TEST_ID}>
      <Sidebar items={items} />
      <MainContent>
        <Outlet />
      </MainContent>
    </StudentContainer>
  );
};

export default Student;