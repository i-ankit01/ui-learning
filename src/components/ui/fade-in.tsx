'use client';

import { motion, MotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface FadeInOnScrollProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInOnScroll({
  children,
  className,
  delay = 0,
  ...motionProps
}: FadeInOnScrollProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
