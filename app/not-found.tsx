import Link from 'next/link';

/**
 * Custom 404 page that matches the app's theme.
 * Shown when a user navigates to a non-existent route.
 */
export default function NotFound() {
  return (
    <div className="error-state">
      <div className="error-state-icon">🔍</div>
      <h2>Page Not Found</h2>
      <p>The document or page you&apos;re looking for doesn&apos;t exist in this library.</p>
      <Link href="/" className="btn">
        ← Back to Home
      </Link>
    </div>
  );
}
