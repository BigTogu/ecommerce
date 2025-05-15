"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { JSX, useState } from "react";

interface Props {
  href: string;
  label: string;
  ariaLabel?: string;
  key?: string;
}

export const AnimatedUnderlineLink = ({ href, label, ariaLabel, key }: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      aria-label={ariaLabel || label}
      className="relative w-fit block text-textSecondary focus:outline-none focus-visible:outline-hover focus-visible:rounded-sm"
      href={href}
      key={key ? key : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      <motion.span
        animate={{ scaleX: isHovered ? 1 : 0 }}
        className="absolute bottom-0 left-0 h-[2px] bg-hover origin-left"
        initial={{ scaleX: 0 }}
        style={{ width: "50%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};
