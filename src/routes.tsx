import { Icon } from '@iconify/react';
import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    show: true,
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width={24} height={24} />,
  },
  {
    show: true,
    title: "DashBoard",
    path: "/dashboard",
    icon: <Icon icon="lucide:folder" width={24} height={24} />,
    subMenu: true,
    subMenuItems: [
      {show: true, title: "All", path: "/dashboard"},
      {show: true, title: "Teste", path: "/dashboard/teste"}
    ]
  }
]