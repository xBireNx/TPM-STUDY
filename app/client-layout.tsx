'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { DOCS } from '@/lib/docs';

/**
 * ClientLayout provides the sidebar, top bar, and navigation state
 * that wraps around all pages in the app.
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
      router.push(`/docs/${slug}`);
    },
    [router]
  );

  // Determine current slug from pathname
  const currentSlug = pathname?.startsWith('/docs/') ? pathname.replace('/docs/', '').replace(/\/$/, '') : null;

  // Determine title for TopBar
  const currentDoc = currentSlug ? DOCS.find((d) => d.id === currentSlug) : null;
  const topBarTitle = currentDoc ? currentDoc.title : 'TPM Study Library';

  return (
    <div className="app-shell">
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
    </div>
  );
}
