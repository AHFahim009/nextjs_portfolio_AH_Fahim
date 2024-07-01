"use client";
import { motion } from "framer-motion";
import AnimText from "./AnimText";
import RedoAnimText from "./RedoAnimText";
import CursorBlinker from "./CursorBlinker";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function TypingAnim() {
  return (
    <motion.span
      variants={containerVariants}
      animate="visible"
      initial="hidden"
    >
      <motion.span variants={itemVariants}>
        <RedoAnimText delay={4} />
        <CursorBlinker />
      </motion.span>
    </motion.span>
  );
}
