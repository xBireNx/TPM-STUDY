'use client';

import { useEffect, useState, useCallback } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Floating Table of Contents
 * Parses headings from the rendered markdown and shows them
 * as a clickable sidebar navigation. Highlights the current
 * heading based on scroll position.
 */
export default function FloatingToc() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const content = document.querySelector('.markdown-body');
    if (!content) return;

    // Gather all headings
    const headings = content.querySelectorAll('h2, h3, h4');
    const tocItems: TocItem[] = [];

    headings.forEach((h) => {
      const id = h.getAttribute('id');
      if (!id) return;
      const level = parseInt(h.tagName[1], 10);
      const text = h.textContent || '';

      // Skip the first h1 (document title) if present
      if (level === 1) return;

      tocItems.push({ id, text, level });
    });

    setItems(tocItems);
  }, []);

  // Track active heading on scroll
  useEffect(() => {
    const wrapper = document.querySelector('.content-wrapper');
    if (!wrapper || items.length === 0) return;

    const handleScroll = () => {
      const offsets = items.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: rect.top };
      });

      // Find the last heading above the viewport center
      const center = window.innerHeight * 0.35;
      let active = items[0]?.id || '';

      for (const item of offsets) {
        if (item.top <= center) {
          active = item.id;
        }
      }

      setActiveId(active);
    };

    wrapper.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => wrapper.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const wrapper = document.querySelector('.content-wrapper');
    if (wrapper) {
      const top = el.getBoundingClientRect().top + wrapper.scrollTop - 80;
      wrapper.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  if (items.length < 3) return null;

  return (
    <nav className="toc-wrapper" aria-label="Table of Contents">
      <div className="toc-container">
        <div className="toc-title">On this page</div>
        <ul className="toc-list">
          {items.map((item) => (
            <li key={item.id}>
              <button
                className={`toc-item toc-item-h${item.level} ${activeId === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
