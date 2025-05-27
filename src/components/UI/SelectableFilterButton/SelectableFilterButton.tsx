"use client";
import { motion } from "framer-motion";
import { JSX } from "react";
import { colors } from "@/utils/constants";

interface Props {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SelectableFilterButton = ({ label, isSelected, onClick }: Props): JSX.Element => {
  return (
    <motion.button
      animate={{
        backgroundColor: isSelected ? colors.hover : colors.background,
        color: isSelected ? colors.textSecondary : colors.textPrimary,
      }}
      aria-pressed={isSelected}
      className="font-display tracking-[0.20em] text-lg  focus:outline-none focus-visible:outline-hover  uppercase px-2.5 py-0.5 rounded-full transition-all"
      onClick={onClick}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      type="button"
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};
