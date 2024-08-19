import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import { Appcontainer } from './App.styles';
import { FormOutlined } from '@ant-design/icons';

function App() {
  const items = [
    {
      key: 'create-course',
      label: <Link to="/create-course">Create Course</Link>,
      icon: <FormOutlined />,
    },
  ];
  return (
    <Appcontainer>
      <Sidebar items={items}/>
      <Outlet/>
    </Appcontainer>
  );
}

export default App;