"use client";

import { ReactNode, memo } from "react";
import { AnimatedUnderlineLink } from "../AnimatedUnderlineLink/AnimatedUnderlineLink";
import { Dropdown } from "../Dropdown/Dropdown";
import { DropdownWrapper } from "../DropdownWrapper/DropdownWrapper";
import { NavItemType } from "@/types/navbar";

interface Props {
  item: NavItemType;
  isActive: boolean;
  onHover: () => void;
  dropdownContent?: ReactNode;
}

export const NavItem = memo(({ item, isActive, onHover }: Props) => {
  const hasDropdown = Boolean(item.icon);
  return (
    <div className="relative" onMouseEnter={onHover}>
      <AnimatedUnderlineLink href={item.link} icon={item.icon} label={item.label} />

      {isActive && hasDropdown && (
        <DropdownWrapper>
          <Dropdown items={item.itemsDropdown} />
        </DropdownWrapper>
      )}
    </div>
  );
});

NavItem.displayName = "NavItem";
