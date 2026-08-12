"use client";

import { motion } from "motion/react";
import { fadeUp } from "./motion-variants";

const AnimatedSection = ({
  children,
  variant = fadeUp,
  className = "",
  as = "div",
  delay = 0,
  amount = 0.2,
  ...rest
}) => {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: variant.hidden,
        visible: {
          ...variant.visible,
          transition: {
            ...variant.visible.transition,
            delay,
          },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default AnimatedSection;
