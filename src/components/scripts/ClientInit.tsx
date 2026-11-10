import { initScrollSpy } from "@scripts/scrollSpy";
import { initCpuFluctuation } from "@scripts/cpuFluctuation";
import { initClock } from "@scripts/clock";
import { useEffect } from "react";

export function ClientInit() {
  useEffect(() => {
    const cleanupScrollSpy = initScrollSpy();
    const cleanupCpu = initCpuFluctuation();
    const cleanupClock = initClock();

    return () => {
      cleanupScrollSpy();
      cleanupCpu();
      cleanupClock();
    };
  }, []);

  return null;
}
