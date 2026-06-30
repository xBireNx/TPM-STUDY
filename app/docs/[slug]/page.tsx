import Link from 'next/link';
import { DOCS, getDocBySlug, getAllSlugs } from '@/lib/docs';
import { readMarkdownFile, extractTitle, countLines } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import DocumentClient from './document-client';
import FloatingToc from '@/components/FloatingToc';
import type { Metadata } from 'next';

/**
 * Generate static paths for all documents.
 * This enables SSG — every document page is pre-built at compile time.
 */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/**
 * Generate dynamic metadata for each document page.
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const doc = getDocBySlug(params.slug);
  if (!doc) return { title: 'Document Not Found' };

  const content = readMarkdownFile(doc.file);
  const title = extractTitle(content) || doc.title;

  return {
    title: `${title} | TPM Study Library`,
    description: `Study ${doc.title} — part of the TPM interview prep library.`,
  };
}

/**
 * Document page — renders a single markdown document.
 * Content is read at build time for SSG.
 */
export default async function DocPage({ params }: { params: { slug: string } }) {
  const doc = getDocBySlug(params.slug);

  if (!doc) {
    notFound();
  }

  const content = readMarkdownFile(doc.file);
  const title = extractTitle(content) || doc.title;
  const lineCount = countLines(content);
  const fileName = doc.file.split('/').pop() || doc.file;

  return (
    <div className="doc-content">
      {/* Floating Table of Contents (renders on the side on wide screens) */}
      <FloatingToc />

      {/* Breadcrumb navigation for context */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-group">{doc.group}</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">{doc.title}</span>
      </nav>

      <div className="doc-header">
        <h1 className="doc-heading">{doc.icon} {title}</h1>
        <div className="doc-meta">
          <span className="doc-meta-tag">📄 {fileName}</span>
          <span className="doc-meta-tag">📏 ~{lineCount} lines</span>
        </div>
      </div>
      <DocumentClient content={content} />
    </div>
  );
}
