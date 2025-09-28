// components/MotionButton.jsx
import { motion } from "framer-motion";

const SubmitButton = ({
  label = "Submit",
  onClick,
  className = "",
  initial = { opacity: 0, scale: 0.95 },
  whileInView = { opacity: 1, scale: 1 },
  transition = { duration: 0.5, delay: 0.8 },
  viewport = { once: true },
}) => {
  return (
    <motion.button
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      onClick={onClick}
      className={`flex group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-3 rounded-[6px] transition-colors duration-300 ${className}`}
    >
      {label}
    </motion.button>
  );
};

export default SubmitButton;
