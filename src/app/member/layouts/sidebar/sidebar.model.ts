export interface SidebarModel {
  path?: string;
  menu?: string;
  icon?: string;
  title_submenu?: string;
  roles?: string[];
  service?: string[];
  block?: SidebarModel[];
  submenu?: SidebarModel[];
  data_target?: string;
  aria_labelledby?: string;
  undersubmenu?: SidebarModel[];
}
