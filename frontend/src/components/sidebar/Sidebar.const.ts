import { ReactNode } from 'react';

export interface SidebarItem {
    key: string;
    label: ReactNode;
    icon: ReactNode;
}

export interface SidebarProps {
    items: SidebarItem[];
}