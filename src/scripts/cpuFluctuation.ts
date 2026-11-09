export function initCpuFluctuation(): () => void {
  const cpuEl = document.getElementById('cpu-value');
  if (!cpuEl) return () => {};

  let intervalId: number;

  function updateCpu() {
    const value = (Math.random() * 1.6 + 0.2).toFixed(1);
    cpuEl.textContent = `${value}%`;
  }

  updateCpu();
  intervalId = window.setInterval(updateCpu, 3000);

  return () => {
    window.clearInterval(intervalId);
  };
}