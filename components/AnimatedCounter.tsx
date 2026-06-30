'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

/**
 * Animated Counter
 * Counts up from 0 to the target value when it enters the viewport.
 * Used for statistics on the welcome page.
 */
export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 1.5,
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: [0.34, 1.56, 0.64, 1], // spring-like ease
      onUpdate(value) {
        setCount(Math.round(value * 10 ** decimals) / 10 ** decimals);
      },
    });

    return () => controls.stop();
  }, [isInView, target, duration, decimals]);

  return (
    <motion.span
      ref={ref}
      className="stat-number"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
}
