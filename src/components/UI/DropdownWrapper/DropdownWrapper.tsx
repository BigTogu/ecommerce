import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

export const DropdownWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="absolute left-1/2 top-[calc(100%+1.2rem)] transform -translate-x-1/2 pt-4">
    <motion.div
      className="border border-black/[0.2] bg-background shadow-xl backdrop-blur-sm h-full w-max p-4"
      layoutId="active"
    >
      {children}
    </motion.div>
  </div>
);
