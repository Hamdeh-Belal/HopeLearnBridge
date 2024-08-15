import { Link } from 'react-router-dom';
import { ReadOutlined } from '@ant-design/icons';
import React from 'react';
import { SidebarItem, SidebarProps } from './Sidebar.const';
import { MenuContainer, SidebarContainer, SidebarHeader } from './Sidebar.style';

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const commonItems: SidebarItem[] = [
    {
      key: 'Courses',
      label: <Link to="/courses">Courses</Link>,
      icon: <ReadOutlined />,
    },
  ];
  const menuItems = [...commonItems, ...items];

  return (
    <SidebarContainer>
      <SidebarHeader>HopeLearnBridge</SidebarHeader>
      <MenuContainer items={menuItems} defaultSelectedKeys={['Courses']} />
    </SidebarContainer>
  );
};

export default Sidebar;