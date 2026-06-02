import { type Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const staggerMedium: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};
