/**
 * Loading skeleton for document pages.
 * Shows during client-side navigation and initial page load
 * while Next.js fetches/renders the page content.
 */
export default function DocLoading() {
  return (
    <div className="doc-loading" aria-label="Loading document">
      {/* Breadcrumb skeleton */}
      <div className="doc-loading-breadcrumb">
        <div className="skeleton-line skeleton-line--short" />
        <div className="skeleton-line skeleton-line--icon" />
        <div className="skeleton-line skeleton-line--xshort" />
        <div className="skeleton-line skeleton-line--icon" />
        <div className="skeleton-line skeleton-line--medium" />
      </div>

      {/* Header skeleton */}
      <div className="doc-loading-header">
        <div className="skeleton-line skeleton-line--title" />
        <div className="doc-loading-meta">
          <div className="skeleton-tag" />
          <div className="skeleton-tag" />
        </div>
      </div>

      {/* Content lines skeleton */}
      <div className="doc-loading-content">
        <div className="skeleton-line skeleton-line--full" />
        <div className="skeleton-line skeleton-line--full" />
        <div className="skeleton-line skeleton-line--long" />
        <div className="skeleton-line skeleton-line--full" />
        <div className="skeleton-line skeleton-line--medium" />
        <div className="skeleton-line skeleton-line--full" />
        <div className="skeleton-line skeleton-line--long" />
        <div className="skeleton-line skeleton-line--full" />
        <div className="skeleton-line skeleton-line--xlong" />
        <div className="skeleton-line skeleton-line--full" />
        <div className="skeleton-line skeleton-line--medium" />
      </div>
    </div>
  );
}
