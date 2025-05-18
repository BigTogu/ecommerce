import { ReactNode } from "react";

export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavItemType {
  label: string;
  link: string;
  icon?: ReactNode;
  itemsDropdown?: DropdownItem[];
}
