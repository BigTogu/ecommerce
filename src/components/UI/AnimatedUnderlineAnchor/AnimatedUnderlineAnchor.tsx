"use client";

import { motion } from "framer-motion";
import { JSX, useState } from "react";

interface Props {
  href: string;
  label: string;
  ariaLabel?: string;
  target?: "_blank" | "_self";
  rel?: string;
}

export const AnimatedUnderlineAnchor = ({
  href,
  label,
  ariaLabel,
  target = "_blank",
  rel = "noopener noreferrer",
}: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      aria-label={ariaLabel ?? label}
      className="relative w-fit block text-textSecondary focus:outline-none focus-visible:outline-hover focus-visible:rounded-sm"
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      rel={rel}
      target={target}
    >
      {label}
      <motion.span
        animate={{ scaleX: isHovered ? 1 : 0 }}
        className="absolute bottom-0 left-0 h-[2px] bg-hover origin-left"
        initial={{ scaleX: 0 }}
        style={{ width: "50%" }}
        transition={{ duration: 0.3 }}
      />
    </a>
  );
};
