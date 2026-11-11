/**
 * Runs `fn` every `ms` milliseconds, but only while the tab is visible and the
 * visitor has NOT asked for reduced motion. Returns a cleanup function.
 */
export function createTicker(fn: () => void, ms: number): () => void {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let intervalId: number | undefined;

  const stop = () => {
    if (intervalId !== undefined) {
      window.clearInterval(intervalId);
      intervalId = undefined;
    }
  };

  const sync = () => {
    stop();
    if (!document.hidden && !reducedMotion.matches) {
      intervalId = window.setInterval(fn, ms);
    }
  };

  document.addEventListener("visibilitychange", sync);
  reducedMotion.addEventListener("change", sync);
  sync();

  return () => {
    stop();
    document.removeEventListener("visibilitychange", sync);
    reducedMotion.removeEventListener("change", sync);
  };
}
