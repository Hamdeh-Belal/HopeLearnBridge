import { Link } from 'react-router-dom';
import { ReadOutlined } from '@ant-design/icons';
import {FC} from 'react';
import { SIDEBAR_DATA_TESTID, SidebarItem, SidebarProps } from './Sidebar.const';
import { MenuContainer, SidebarContainer, SidebarHeader } from './Sidebar.style';

const Sidebar: FC<SidebarProps> = ({ items }) => {
  const commonItems: SidebarItem[] = [
    {
      key: 'Courses',
      label: <Link to="/teacher">Courses</Link>,
      icon: <ReadOutlined />,
    },
  ];
  const menuItems = [...commonItems, ...items];

  return (
    <SidebarContainer data-testid={SIDEBAR_DATA_TESTID}>
      <SidebarHeader>HopeLearnBridge</SidebarHeader>
      <MenuContainer items={menuItems} defaultSelectedKeys={['Courses']} />
    </SidebarContainer>
  );
};

export default Sidebar;