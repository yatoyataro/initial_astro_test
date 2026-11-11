import { initClock } from "./clock";
import { initCpuFluctuation } from "./cpuFluctuation";
import { initScrollSpy } from "./scrollSpy";

const cleanups = [initScrollSpy(), initCpuFluctuation(), initClock()];

window.addEventListener(
  "pagehide",
  () => {
    for (const cleanup of cleanups) cleanup();
  },
  { once: true }
);
