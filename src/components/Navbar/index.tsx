"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { NavItem } from "../UI/NavItem/NavItem";
import { LOGO, NAVITEMS } from "@/utils/constants";

const NavBar: FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <header className="w-full font-display text-lg uppercase tracking-[0.2em]">
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex items-center justify-between px-6 py-8"
        onMouseLeave={() => setActiveItem(null)}
      >
        <Link href={LOGO.link}>{LOGO.name}</Link>

        <ul className="flex items-center gap-6">
          {NAVITEMS.map((item) => {
            return (
              <li key={item.label}>
                <NavItem isActive={activeItem === item.label} item={item} onHover={() => setActiveItem(item.label)} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
