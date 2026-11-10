import { consoleLog } from "@components/widgets/ConsoleLog";

const SECTION_IDS = ["home", "archive", "intel", "uplink"];
const NAV_SELECTORS = SECTION_IDS.map((id) => `[data-section="${id}"]`).join(", ");

export function initScrollSpy(): () => void {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(NAV_SELECTORS);
  const sectionElements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
    (el): el is HTMLElement => el !== null
  );

  let currentActiveId = "home";

  function setActive(sectionId: string) {
    for (const link of navLinks) {
      if (link.dataset.section === sectionId) {
        link.classList.add("is-active");
      } else {
        link.classList.remove("is-active");
      }
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && id !== currentActiveId) {
            currentActiveId = id;
            setActive(id);
            consoleLog.append(`> MOUNTING DIRECTORY: ~/${id.toUpperCase()}...`, "info");
          }
        }
      }
    },
    {
      rootMargin: "-30% 0px -60% 0px",
      threshold: [0, 0.5, 1],
    }
  );

  for (const el of sectionElements) {
    observer.observe(el);
  }

  setActive(currentActiveId);

  return () => {
    observer.disconnect();
    for (const link of navLinks) {
      link.classList.remove("is-active");
    }
  };
}
