import { Container } from "./styles";

import { motion } from "framer-motion";

const Button = ({ children, onClick, className, ...rest }) => (
  <motion.button
    className={className}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    {...rest}
  >
    {children}
  </motion.button>
);

export default Button;
