'use client';

import { useRouter } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { triggerNavProgress } from '@/lib/navigation';

/**
 * Client-side wrapper for document content.
 * Handles internal cross-document navigation links.
 */
export default function DocumentClient({ content }: { content: string }) {
  const router = useRouter();

  const handleNavigate = (slug: string) => {
    triggerNavProgress();
    router.push(`/docs/${slug}`);
  };

  return (
    <MarkdownRenderer
      content={content}
      onNavigate={handleNavigate}
    />
  );
}
