"use client";
import { JSX, memo } from "react";
import { AnimatedUnderlineLink } from "../AnimatedUnderlineLink/AnimatedUnderlineLink";

interface DropdownItem {
  label: string;
  href: string;
}

interface Props {
  items: DropdownItem[] | undefined;
}

const DropdownComponent = ({ items }: Props): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-4 px-2 text-lg">
      {items?.map(({ label, href }) => <AnimatedUnderlineLink href={href} key={label} label={label} />)}
    </div>
  );
};

export const Dropdown = memo(DropdownComponent);
Dropdown.displayName = "Dropdown";
