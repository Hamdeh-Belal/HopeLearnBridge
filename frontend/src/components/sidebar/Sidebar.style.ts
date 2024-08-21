import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import styled from 'styled-components';

export const MenuContainer: typeof Menu = styled(Menu)`
    background-color: ${({ theme }) => theme.colors.darkslategray};
    .ant-menu-item {
        color: ${({ theme }) => theme.colors.white};
        margin: 10px;
    }
    .ant-menu-item-selected {
        color: ${({ theme }) => theme.colors.darkslategray};
    }
    .ant-menu-item:hover {
        background-color: ${({ theme }) => theme.colors.darkGrey} !important;
        color: ${({ theme }) => theme.colors.white} !important;
    }
`;


export const SidebarContainer = styled(Sider) `
    background-color:${({ theme }) => theme.colors.darkslategray};
    color:${({ theme }) => theme.colors.white};
    padding: 10px;
    height: 100vh;
`;

export const SidebarHeader = styled.div`
    font-size: 18px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    padding:20px;
`;