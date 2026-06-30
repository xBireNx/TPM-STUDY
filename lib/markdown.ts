/**
 * Markdown Processing Utilities
 *
 * Reads markdown files from the content/ directory and
 * renders them to React components using react-markdown.
 */

import fs from 'fs';
import path from 'path';

/**
 * Read a markdown file from the content directory
 */
export function readMarkdownFile(filePath: string): string {
  const fullPath = path.join(process.cwd(), 'content', filePath);
  try {
    return fs.readFileSync(fullPath, 'utf-8');
  } catch (err) {
    console.error(`Failed to read markdown file: ${fullPath}`, err);
    return `# Document Not Found\n\nSorry, the document at \`${filePath}\` could not be loaded. Please check that the file exists.`;
  }
}

/**
 * Extract the first h1 heading from markdown text
 */
export function extractTitle(markdown: string): string | null {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

/**
 * Count rough lines in markdown
 */
export function countLines(markdown: string): number {
  return markdown.split('\n').length;
}

/**
 * Slugify a heading for anchor linking
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Convert internal markdown cross-reference links (.md files)
 * to URL slugs for navigation
 */
export function resolveMarkdownLinks(html: string): string {
  // This is handled client-side by the MarkdownRenderer component
  return html;
}
