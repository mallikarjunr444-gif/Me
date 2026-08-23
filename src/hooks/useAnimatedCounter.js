import { useState, useEffect, useRef } from 'react';

/**
 * Animated counter hook for "New Counter: Bold Poster" style number reveals.
 * Counts from 0 to target value when triggered.
 */
export function useAnimatedCounter(target, duration = 2000, shouldAnimate = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(0);
      return;
    }

    const startTime = performance.now();
    const numericTarget = typeof target === 'string' ? parseInt(target.replace(/[^0-9]/g, ''), 10) : target;

    if (isNaN(numericTarget) || numericTarget === 0) {
      setCount(target);
      return;
    }

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericTarget));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, shouldAnimate]);

  return count;
}
