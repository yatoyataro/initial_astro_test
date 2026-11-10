export function initCpuFluctuation(): () => void {
  const cpuEl = document.getElementById('cpu-value');
  if (!cpuEl) return () => {};

  function updateCpu() {
    const value = (Math.random() * 1.6 + 0.2).toFixed(1);
    if (cpuEl) {
      cpuEl.textContent = `${value}%`;
    }
  }

  updateCpu();
  const intervalId = window.setInterval(updateCpu, 3000);

  return () => {
    window.clearInterval(intervalId);
  };
}