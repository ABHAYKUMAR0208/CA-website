import { useEffect, useRef, useState } from 'react';

/**
 * Parses a display string like "25+", "1000+", "100%", "9" into a numeric
 * target plus a prefix/suffix, then animates counting from 0 up to that
 * number once the element scrolls into view.
 */
function parseValue(raw) {
  const match = String(raw).match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  if (!match) return { prefix: '', number: 0, suffix: '', decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { prefix, number: parseFloat(numStr), suffix, decimals };
}

export default function AnimatedNumber({ value, duration = 1600, className = '' }) {
  const { prefix, number, suffix, decimals } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplay(number);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const start = performance.now();
            const animate = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(number * eased);
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplay(number);
              }
            };
            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [number, duration]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
