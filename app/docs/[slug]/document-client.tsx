'use client';

import { useRouter, usePathname } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';

/**
 * Client-side wrapper for document content.
 * Handles internal cross-document navigation links.
 */
export default function DocumentClient({ content }: { content: string }) {
  const router = useRouter();

  const handleNavigate = (slug: string) => {
    router.push(`/docs/${slug}`);
  };

  return (
    <MarkdownRenderer
      content={content}
      onNavigate={handleNavigate}
    />
  );
}
