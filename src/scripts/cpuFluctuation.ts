import { createTicker } from "./ticker";

export function initCpuFluctuation(): () => void {
  const el = document.getElementById("cpu-value");
  if (!el) return () => {};

  const update = () => {
    el.textContent = `${(Math.random() * 1.6 + 0.2).toFixed(1)}%`;
  };

  update();
  return createTicker(update, 3000);
}
