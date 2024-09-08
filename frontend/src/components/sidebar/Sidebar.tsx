import {FC} from 'react';
import { SIDEBAR_DATA_TESTID, SidebarProps } from './Sidebar.const';
import { MenuContainer, SidebarContainer, SidebarHeader } from './Sidebar.style';

const Sidebar: FC<SidebarProps> = ({ items }) => {

  return (
    <SidebarContainer data-testid={SIDEBAR_DATA_TESTID}>
      <SidebarHeader>HopeLearnBridge</SidebarHeader>
      <MenuContainer items={items} defaultSelectedKeys={['Courses']} />
    </SidebarContainer>
  );
};

export default Sidebar;