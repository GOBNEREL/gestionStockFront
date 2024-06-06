import {SidebarModel} from "./sidebar.model";

export const ROUTES: SidebarModel[] = [

  {
    menu: 'sidebar.tableauDeBord',
    path: 'dashboard',
    icon: 'bi bi-grid',
    roles: ['ROLE_USER','ROLE_ADMIN','ROLE_ENCADREUR'],
    submenu: []
  },
  {
    menu: 'sidebar.category',
    path: 'category',
    icon: 'bi bi-briefcase',
    roles: ['ROLE_USER','ROLE_ADMIN','ROLE_ENCADREUR'],
    submenu: []
  },
  {
    menu: 'sidebar.articles',
    path: 'article',
    icon: 'bi bi-briefcase',
    roles: ['ROLE_USER','ROLE_ADMIN','ROLE_ENCADREUR'],
    submenu: []
  },
  {
    menu: 'sidebar.customer',
    icon: 'bi bi-briefcase',
    data_target: 'customer',
    roles: ['ROLE_ADMIN'],
    title_submenu: 'sidebar.administration_title_sub_menu',
    submenu: [
      {
        menu: 'sidebar.customers',
        path: 'customer',
        icon: 'bi bi-briefcase',
        service: [''],
        roles: ['ROLE_USER','ROLE_ADMIN'],
        submenu: []
      },
      {
        menu: 'sidebar.customerOrder',
        path: 'customerOrder',
        icon: 'bi bi-person',
        service: [''],
        roles: ['ROLE_ADMIN'],
        submenu: []
      }
    ],
  },
  {
    menu: 'sidebar.supplier',
    data_target: 'supplier',
    icon: 'bi bi-briefcase',
    roles: ['ROLE_ADMIN'],
    title_submenu: 'sidebar.administration_title_sub_menu',
    submenu: [
      {
        menu: 'sidebar.suppliers',
        path: 'supplier',
        icon: 'bi bi-briefcase',
        roles: ['ROLE_USER','ROLE_ADMIN','ROLE_ENCADREUR'],
        submenu: []
      },
      {
        menu: 'sidebar.supplierOrder',
        path: 'supplierOrder',
        icon: 'bi bi-person',
        service: [''],
        roles: ['ROLE_ADMIN'],
        submenu: []
      }
    ],
  },

  {
    menu: 'sidebar.Parametre',
    data_target: 'user',
    icon: 'bi bi-gear',
    roles: ['ROLE_ADMIN'],
    title_submenu: 'sidebar.administration_title_sub_menu',
    submenu: [
      {
        menu: 'sidebar.User',
        path: 'user',
        icon: 'bi bi-person',
        service: [''],
        roles: ['ROLE_ADMIN'],
        submenu: []
      }
    ],
  },

  ];




