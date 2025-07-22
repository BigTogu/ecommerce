"use client";

import { memo } from "react";
import { AnimatedUnderlineLink } from "@/components/UI/AnimatedUnderlineLink/AnimatedUnderlineLink";
import { Dropdown } from "@/components/UI/Dropdown/Dropdown";
import { DropdownWrapper } from "@/components/UI/DropdownWrapper/DropdownWrapper";
import { NavItemType } from "@/types/navbar";

interface Props {
  item: NavItemType;
  isActive: boolean;
}

export const NavItem = memo(({ item, isActive }: Props) => {
  const hasDropdown = Boolean(item.icon);
  return (
    <div className="relative outline-none focus:outline-none">
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
