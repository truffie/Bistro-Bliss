import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';

interface props {
  moving?: boolean;
  delay?: number;
  duration?: number;
  position?: 'x' | 'y';
  children: ReactNode;
}

const Appearance: FC<props> = ({
  children,
  moving = false,
  delay = 0,
  position = 'x',
  duration = 0.5,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: delay * 1000,
    rootMargin: '0px 0px -10% 0px',
  } as IntersectionOptions);

  const baseInit = {
    opacity: 0,
    x: 0,
    y: 0,
  };

  const movingInit = {
    opacity: 0,
    x: position === 'x' ? -50 : 0,
    y: position === 'y' ? -50 : 0,
  };

  const animationX = {
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 50,
  };

  const animationY = {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 50,
  };

  return (
    <motion.div
      ref={ref}
      initial={moving ? movingInit : baseInit}
      animate={inView ? (position === 'x' ? animationX : animationY) : 'hidden'}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default Appearance;
