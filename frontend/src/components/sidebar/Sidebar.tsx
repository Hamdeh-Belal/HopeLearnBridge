import {FC} from 'react';
import { SIDEBAR_DATA_TESTID, SidebarItem, SidebarProps } from './Sidebar.const';
import { MenuContainer, SidebarContainer, SidebarHeader } from './Sidebar.style';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const Sidebar: FC<SidebarProps> = ({ items }) => {
  const commonItems:SidebarItem[] = [
    {
      key: 'profile',
      label: <Link to="profile">Profile</Link>,
      icon: <UserOutlined />,
    }];

  const sidebarItems =[...items, ...commonItems];

  return (
    <SidebarContainer data-testid={SIDEBAR_DATA_TESTID}>
      <SidebarHeader>HopeLearnBridge</SidebarHeader>
      <MenuContainer items={sidebarItems} defaultSelectedKeys={['Courses']} />
    </SidebarContainer>
  );
};

export default Sidebar;