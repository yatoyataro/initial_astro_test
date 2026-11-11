import { consoleStore } from "./consoleStore";

/**
 * Highlights the nav link of the section currently in view and mirrors that in
 * the (decorative) console log. Section ids come from the nav links themselves
 * (`data-section="home"` → `<section id="home">`), so there is no second list to keep in sync.
 */
export function initScrollSpy(): () => void {
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-section]"));
  const sections = navLinks
    .map((link) => (link.dataset.section ? document.getElementById(link.dataset.section) : null))
    .filter((el): el is HTMLElement => el !== null);

  if (sections.length === 0) return () => {};

  let currentId = "";

  function setActive(sectionId: string) {
    for (const link of navLinks) {
      const isActive = link.dataset.section === sectionId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  }

  setActive("home");
  currentId = "home";

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        if (id && id !== currentId) {
          currentId = id;
          setActive(id);
          consoleStore.append(`> MOUNTING DIRECTORY: ~/${id.toUpperCase()}...`, "info");
        }
      }
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.5, 1] }
  );

  for (const section of sections) observer.observe(section);

  return () => {
    observer.disconnect();
    for (const link of navLinks) {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    }
  };
}
