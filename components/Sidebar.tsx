'use client';

import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { DOCS, GROUP_ORDER, GROUP_ICONS, type GroupName } from '@/lib/docs';

/** Search index cache shared across component mounts (avoids repeated fetches) */
let cachedIndex: SearchIndexEntry[] | null = null;

interface SidebarProps {
  currentSlug: string | null;
  onNavigate: (slug: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

/** Loaded search index entry */
interface SearchIndexEntry {
  docId: string;
  text: string;
}

export default function Sidebar({ currentSlug, onNavigate, onClose, isOpen }: SidebarProps) {
  const [query, setQuery] = useState('');
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});
  const [searchResults, setSearchResults] = useState<
    { docId: string; docTitle: string; docIcon: string; preview: string; lineNum: number }[]
  >([]);
  const [searchIndex, setSearchIndex] = useState<SearchIndexEntry[] | null>(null);
  const [selectedResult, setSelectedResult] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Module-level cache to avoid refetching on every mount

  // Load pre-built search index on mount (cached globally)
  useEffect(() => {
    if (searchIndex) return;

    if (cachedIndex) {
      setSearchIndex(cachedIndex);
      return;
    }

    fetch('/search-index.json')
      .then((res) => res.json())
      .then((data: SearchIndexEntry[]) => {
        cachedIndex = data;
        setSearchIndex(data);
      })
      .catch(() => {
        console.warn('Failed to load search index');
        setSearchIndex([]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Restore collapsed groups from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tpm-nav-groups');
      if (saved) setCollapsedGroups(JSON.parse(saved));
    } catch { /* ignore */ }
  }, []);

  const toggleGroup = (group: string) => {
    const next = { ...collapsedGroups, [group]: !collapsedGroups[group] };
    setCollapsedGroups(next);
    localStorage.setItem('tpm-nav-groups', JSON.stringify(next));
  };

  const performSearch = useCallback(
    (q: string) => {
      const lower = q.toLowerCase().trim();
      if (lower.length < 2 || !searchIndex) {
        setSearchResults([]);
        return;
      }

      const results: { docId: string; docTitle: string; docIcon: string; preview: string; lineNum: number }[] = [];

      for (const entry of searchIndex) {
        const lowerText = entry.text.toLowerCase();
        let idx = lowerText.indexOf(lower);
        let count = 0;

        while (idx !== -1 && count < 3) {
          count++;
          const start = Math.max(0, idx - 60);
          const end = Math.min(entry.text.length, idx + lower.length + 60);
          let preview = entry.text.slice(start, end);
          if (start > 0) preview = '...' + preview;
          if (end < entry.text.length) preview += '...';

          const previewLower = preview.toLowerCase();
          const matchIdx = previewLower.indexOf(lower);
          if (matchIdx !== -1) {
            preview =
              preview.slice(0, matchIdx) +
              '<mark>' +
              preview.slice(matchIdx, matchIdx + lower.length) +
              '</mark>' +
              preview.slice(matchIdx + lower.length);
          }

          const beforeText = entry.text.slice(0, idx);
          const lineNum = (beforeText.match(/\n/g) || []).length + 1;

          const doc = DOCS.find((d) => d.id === entry.docId);
          results.push({
            docId: entry.docId,
            docTitle: doc?.title || entry.docId,
            docIcon: doc?.icon || '📄',
            preview,
            lineNum,
          });

          idx = lowerText.indexOf(lower, idx + 1);
        }
      }

      results.sort((a, b) => {
        const docA = DOCS.find((d) => d.id === a.docId);
        const docB = DOCS.find((d) => d.id === b.docId);
        return (
          GROUP_ORDER.indexOf((docA?.group ?? '') as GroupName) -
          GROUP_ORDER.indexOf((docB?.group ?? '') as GroupName)
        );
      });

      setSearchResults(results);
      setSelectedResult(0);
    },
    [searchIndex]
  );

  const handleSearchInput = (value: string) => {
    setQuery(value);
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => performSearch(value), 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setQuery('');
      setSearchResults([]);
      searchRef.current?.blur();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedResult((prev) => Math.min(searchResults.length - 1, prev + 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedResult((prev) => Math.max(0, prev - 1));
    }
    if (e.key === 'Enter' && searchResults.length > 0) {
      const r = searchResults[selectedResult] || searchResults[0];
      if (r) {
        onNavigate(r.docId);
        setQuery('');
        setSearchResults([]);
      }
    }
  };

  const groups = useMemo(() => {
    const g: Record<string, typeof DOCS> = {};
    for (const doc of DOCS) {
      if (!g[doc.group]) g[doc.group] = [];
      g[doc.group].push(doc);
    }
    return g;
  }, []);

  const showSearchResults = query.trim().length >= 2;

  return (
    <>
      {isOpen && <div className="sidebar-overlay active" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon-wrapper">
              <span>📚</span>
            </div>
            <div className="logo-text">
              <span className="logo-title">TPM Study</span>
              <span className="logo-subtitle">Interview Prep Library</span>
            </div>
          </div>
          <button className="sidebar-close" onClick={onClose} aria-label="Close sidebar">
            &times;
          </button>
        </div>

        <div className="sidebar-search">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={searchRef}
            type="text"
            className="search-input"
            placeholder={!searchIndex ? 'Loading search index...' : 'Search across all docs...'}
            value={query}
            onChange={(e) => handleSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
          <kbd className="search-kbd">/</kbd>
        </div>

        <nav className="sidebar-nav">
          {showSearchResults ? (
            searchResults.length > 0 ? (
              <>
                <div className="search-result-count">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &ldquo;<strong>{query}</strong>&rdquo;
                </div>
                {searchResults.map((r, i) => (
                  <div
                    key={`${r.docId}-${i}`}
                    className="search-result-item"
                    style={{
                      background: i === selectedResult ? 'var(--bg-hover)' : '',
                      borderLeftColor: i === selectedResult ? 'var(--accent)' : 'transparent',
                    }}
                    onClick={() => {
                      onNavigate(r.docId);
                      setQuery('');
                      setSearchResults([]);
                    }}
                  >
                    <div className="search-result-title">
                      {r.docIcon} {r.docTitle}{' '}
                      <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>line {r.lineNum}</span>
                    </div>
                    <div className="search-result-preview" dangerouslySetInnerHTML={{ __html: r.preview }} />
                  </div>
                ))}
              </>
            ) : (
              <div className="search-empty">
                {!searchIndex
                  ? '⏳ Loading search index...'
                  : `No results found for "${query}"`}
              </div>
            )
          ) : (
            GROUP_ORDER.map((groupName) => {
              const items = groups[groupName];
              if (!items || !items.length) return null;
              const groupIcon = GROUP_ICONS[groupName] || '📄';
              const isCollapsed = collapsedGroups[groupName] || false;

              return (
                <div className="nav-group" key={groupName}>
                  <div className="nav-group-header" onClick={() => toggleGroup(groupName)}>
                    <span className={`nav-group-arrow ${isCollapsed ? 'collapsed' : ''}`}>▼</span>
                    {groupIcon} {groupName}
                  </div>
                  <div className={`nav-group-items ${isCollapsed ? 'collapsed' : ''}`}>
                    {items.map((doc) => (
                      <div
                        key={doc.id}
                        className={`nav-item ${doc.id === currentSlug ? 'active' : ''}`}
                        onClick={() => {
                          onNavigate(doc.id);
                          setQuery('');
                          setSearchResults([]);
                        }}
                      >
                        <span className="nav-item-icon">{doc.icon || '📄'}</span>
                        <span className="nav-item-text">{doc.title}</span>
                        {doc.badge && <span className="nav-item-badge">{doc.badge}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </nav>

        <div className="sidebar-footer">
          <ThemeToggle />
          <span className="footer-version">v1.0 &middot; {DOCS.length} docs</span>
        </div>
      </aside>
    </>
  );
}

/** Inline theme toggle button */
function ThemeToggle() {
  const [theme, setThemeState] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('tpm-theme');
    const preferred = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setThemeState(preferred as 'dark' | 'light');
    document.documentElement.setAttribute('data-theme', preferred);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setThemeState(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('tpm-theme', next);
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <svg className="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <svg className="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
