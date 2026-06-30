'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface TopBarProps {
  title: string;
  onToggleSidebar: () => void;
}

export default function TopBar({ title, onToggleSidebar }: TopBarProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="top-bar">
      <button className="sidebar-toggle" onClick={onToggleSidebar} aria-label="Toggle sidebar">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <div className="top-bar-title">
        <AnimatePresence mode="wait">
          <motion.span
            key={title}
            className="doc-title"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            {isHome ? (
              <>
                <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  📚 TPM Study Library
                </span>
              </>
            ) : (
              title
            )}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="top-bar-spacer" />
    </header>
  );
}
