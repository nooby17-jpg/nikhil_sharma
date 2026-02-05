"use client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
    transition: {
      type: "spring" as const, 
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function FairyTypewriter({ text, delay = 0 }: { text: string, delay?: number }) {
  const letters = Array.from(text);

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ marginRight: letter === " " ? "0.25em" : "0" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}