'use client';

import { useEffect, useState } from 'react';

/**
 * Reading Progress Bar
 * Shows a thin gradient bar at the top of the page that fills
 * as the user scrolls through the content.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = document.querySelector('.content-wrapper');
      if (!wrapper) return;

      const scrollTop = wrapper.scrollTop;
      const scrollHeight = wrapper.scrollHeight - wrapper.clientHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }
      const pct = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      setProgress(pct);
    };

    const wrapper = document.querySelector('.content-wrapper');
    if (wrapper) {
      wrapper.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      if (wrapper) wrapper.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (progress <= 0) return null;

  return (
    <div className="reading-progress" aria-hidden="true">
      <div className="reading-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
