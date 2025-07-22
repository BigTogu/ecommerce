"use client";

import { memo } from "react";
import { AnimatedUnderlineLink } from "@/components/UI/AnimatedUnderlineLink/AnimatedUnderlineLink";
import { Dropdown } from "@/components/UI/Dropdown/Dropdown";
import { DropdownWrapper } from "@/components/UI/DropdownWrapper/DropdownWrapper";
import { NavItemType } from "@/types/navbar";

interface Props {
  item: NavItemType;
  isActive: boolean;
  onHover: () => void;
}

export const NavItem = memo(({ item, isActive, onHover }: Props) => {
  const hasDropdown = Boolean(item.icon);
  return (
    <div
      className="relative"
      onFocus={onHover}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onHover();
        }
      }}
      onMouseEnter={onHover}
      role="button"
      tabIndex={0}
    >
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
