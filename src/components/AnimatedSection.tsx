'use client';

import { motion, MotionProps } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Define a custom type for the props
type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
} & MotionProps &
  React.HTMLAttributes<HTMLElement>;

export default function AnimatedSection({
  children,
  className,
  ...rest
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Adjust threshold to trigger animation
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
