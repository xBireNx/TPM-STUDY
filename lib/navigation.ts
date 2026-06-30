/**
 * Trigger the global navigation progress bar.
 * Call this before calling router.push() to give immediate feedback
 * during client-side route transitions.
 */
export function triggerNavProgress() {
  (window as unknown as { __startNavigation?: () => void }).__startNavigation?.();
}
