const pad = (value: number) => String(value).padStart(2, "0");

function render(el: HTMLElement) {
  const now = new Date();
  el.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

export function initClock(): () => void {
  const el = document.getElementById("live-clock");
  if (!el) return () => {};

  render(el);
  const intervalId = window.setInterval(() => render(el), 1000);

  return () => {
    window.clearInterval(intervalId);
  };
}
