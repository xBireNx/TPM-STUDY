'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { DOCS } from '@/lib/docs';
import { useCallback } from 'react';

interface MarkdownRendererProps {
  content: string;
  onNavigate?: (slug: string) => void;
}

export default function MarkdownRenderer({ content, onNavigate }: MarkdownRendererProps) {
  /**
   * Transform markdown cross-reference links (.md files) to internal navigation links.
   * This runs on the rendered HTML via rehypeRaw processing.
   */
  const transformLink = useCallback(
    (href: string | undefined) => {
      if (!href) return undefined;
      // Check if this is a cross-reference to another markdown doc
      const mdMatch = href.match(/([^/]+)\.md$/i);
      if (mdMatch) {
        const fileName = mdMatch[1];
        const linkedDoc = DOCS.find((d) => d.file.includes(fileName));
        if (linkedDoc && onNavigate) {
          return `/docs/${linkedDoc.id}`;
        }
      }
      // External links open in new tab
      if (href.startsWith('http')) {
        return href;
      }
      return href;
    },
    [onNavigate]
  );

  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeSlug, rehypeRaw]}
        components={{
          a: ({ href, children, ...props }) => {
            const transformedHref = transformLink(href);
            const isExternal = transformedHref?.startsWith('http');
            return (
              <a
                href={transformedHref || href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener' : undefined}
                {...props}
              >
                {children}
              </a>
            );
          },
          // Optimize table rendering
          table: ({ children }) => (
            <div className="table-wrapper">
              <table>{children}</table>
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
