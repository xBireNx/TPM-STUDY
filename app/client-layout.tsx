'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import ReadingProgress from '@/components/ReadingProgress';
import NavigationProgress from '@/components/NavigationProgress';
import ScrollToTop from '@/components/ScrollToTop';
import { DOCS } from '@/lib/docs';
import { triggerNavProgress } from '@/lib/navigation';

/**
 * ClientLayout provides the sidebar, top bar, ambient background,
 * reading progress bar, scroll-to-top button, and navigation state.
 */
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Keyboard shortcut to open sidebar
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setSidebarOpen(true);
      }
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [sidebarOpen]);

  const handleNavigate = useCallback(
    (slug: string) => {
      triggerNavProgress();
      router.push(`/docs/${slug}`);
    },
    [router]
  );

  // Determine current slug from pathname
  const currentSlug = pathname?.startsWith('/docs/') ? pathname.replace('/docs/', '').replace(/\/$/, '') : null;

  // Determine title for TopBar
  const currentDoc = currentSlug ? DOCS.find((d) => d.id === currentSlug) : null;
  const topBarTitle = currentDoc ? currentDoc.title : 'TPM Study Library';

  const isDocPage = pathname?.startsWith('/docs/');

  return (
    <div className="app-shell">
      {/* Ambient background orbs */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Navigation progress bar — shows on all route transitions */}
      <NavigationProgress />

      {/* Reading progress bar (only on doc pages) */}
      {isDocPage && <ReadingProgress />}

      <Sidebar
        currentSlug={currentSlug}
        onNavigate={handleNavigate}
        onClose={() => setSidebarOpen(false)}
        isOpen={sidebarOpen}
      />
      <main className="main">
        <TopBar title={topBarTitle} onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <div className="content-wrapper">
          <div className="content">{children}</div>
        </div>
      </main>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}
