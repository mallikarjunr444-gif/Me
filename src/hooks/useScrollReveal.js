import { useEffect, useRef, useState } from 'react';

/**
 * Intersection Observer hook for scroll-triggered reveal animations.
 * Respects prefers-reduced-motion.
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for early/late trigger
 * @param {boolean} options.triggerOnce - Only trigger once
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px', triggerOnce = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(node);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, prefersReducedMotion]);

  return { ref, isVisible, prefersReducedMotion };
}

/**
 * Hook for staggered children reveal.
 * Returns a function that generates delay for each child index.
 */
export function useStaggerDelay(baseDelay = 80) {
  return (index) => `${index * baseDelay}ms`;
}
