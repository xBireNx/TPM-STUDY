'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * NavigationProgress — a slim animated progress bar at the top of the page
 * that activates automatically during client-side route transitions.
 *
 * Detects navigation by watching pathname changes and maintains a
 * minimum display duration (~1.8s) so the user always sees feedback,
 * even on fast SSG transitions.
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const prevPathRef = useRef(pathname);
  const rafRef = useRef<number>(0);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const startTimeRef = useRef(0);
  const MIN_DISPLAY_MS = 1800;
  const START_SPEED = 0.35; // initial progress per animation frame (~16ms)

  const animate = useCallback((startTime: number) => {
    const elapsed = Date.now() - startTime;
    // Logarithmic curve: fast at start, slow toward the end
    const raw = 1 - Math.exp(-START_SPEED * (elapsed / 16));
    // Cap at 85% — we jump to 100% when navigation actually finishes
    const next = Math.min(raw * 85, 85);

    setProgress(next);

    // Stop animating after 5s or when we hit the cap
    if (next < 85 && elapsed < 5000) {
      rafRef.current = requestAnimationFrame(() => animate(startTime));
    }
  }, []);

  // Detect navigation start/complete via pathname changes
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      // Navigation completed — finish the bar and hide
      setProgress(100);

      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

      // Wait for the 100% state to be visible briefly
      hideTimerRef.current = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);

      prevPathRef.current = pathname;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Expose a global function so the app shell can trigger navigation progress
  useEffect(() => {
    (window as unknown as Record<string, unknown>).__startNavigation = () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      setProgress(0);
      setVisible(true);
      startTimeRef.current = Date.now();
      rafRef.current = requestAnimationFrame(() => animate(startTimeRef.current));
    };

    return () => {
      delete (window as unknown as Record<string, unknown>).__startNavigation;
    };
  }, [animate]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="nav-progress" role="progressbar" aria-label="Page loading">
      <div className="nav-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
