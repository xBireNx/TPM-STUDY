'use client';

interface TopBarProps {
  title: string;
  onToggleSidebar: () => void;
}

export default function TopBar({ title, onToggleSidebar }: TopBarProps) {
  return (
    <header className="top-bar">
      <button className="sidebar-toggle" onClick={onToggleSidebar} aria-label="Toggle sidebar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <div className="top-bar-title">
        <span className="doc-title">{title}</span>
      </div>
      <div className="top-bar-spacer" />
    </header>
  );
}
