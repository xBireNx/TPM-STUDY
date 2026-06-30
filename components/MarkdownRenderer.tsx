'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { DOCS } from '@/lib/docs';
import { useCallback, useState } from 'react';

interface MarkdownRendererProps {
  content: string;
  onNavigate?: (slug: string) => void;
}

/**
 * Renders markdown content with syntax highlighting, heading anchors,
 * cross-document link resolution, and code block copy buttons.
 */
export default function MarkdownRenderer({ content, onNavigate }: MarkdownRendererProps) {
  const [copiedCodeBlock, setCopiedCodeBlock] = useState<string | null>(null);

  const transformLink = useCallback(
    (href: string | undefined) => {
      if (!href) return undefined;
      const mdMatch = href.match(/([^/]+)\.md$/i);
      if (mdMatch) {
        const fileName = mdMatch[1];
        const linkedDoc = DOCS.find((d) => d.file.includes(fileName));
        if (linkedDoc && onNavigate) {
          return `/docs/${linkedDoc.id}`;
        }
      }
      if (href.startsWith('http')) {
        return href;
      }
      return href;
    },
    [onNavigate]
  );

  const handleCopyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCodeBlock(id);
      setTimeout(() => setCopiedCodeBlock(null), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedCodeBlock(id);
      setTimeout(() => setCopiedCodeBlock(null), 2000);
    }
  };

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
          code: ({ className, children, ...props }) => {
            // Block code has language-* class from fenced code blocks.
            // Inline code has no className or no language-* class.
            const isBlock = typeof className === 'string' && className.startsWith('language-');

            if (!isBlock) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }

            // Block-level code: add a copy button
            const codeStr = String(children).replace(/\n$/, '');
            const codeId = `code-${Math.random().toString(36).slice(2, 8)}`;

            return (
              <div style={{ position: 'relative' }}>
                <button
                  className={`code-copy-btn ${copiedCodeBlock === codeId ? 'copied' : ''}`}
                  onClick={() => handleCopyCode(codeStr, codeId)}
                  aria-label="Copy code to clipboard"
                >
                  {copiedCodeBlock === codeId ? '✓ Copied' : 'Copy'}
                </button>
                <code className={className} {...props}>
                  {children}
                </code>
              </div>
            );
          },
          pre: ({ children }) => <pre>{children}</pre>,
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
