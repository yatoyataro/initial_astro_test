export function initClock(): () => void {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return () => {};

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateClock();
  const intervalId = window.setInterval(updateClock, 1000);

  return () => {
    window.clearInterval(intervalId);
  };
}
