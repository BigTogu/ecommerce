"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { JSX, useState } from "react";

interface Props {
  href: string;
  label: string;
  ariaLabel?: string;
}

export const AnimatedUnderlineLink = ({ href, label, ariaLabel }: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      aria-label={ariaLabel ?? label}
      className="relative w-fit block text-textSecondary focus:outline-none focus-visible:outline-hover focus-visible:rounded-sm"
      href={href}
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
