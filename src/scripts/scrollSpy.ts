import { consoleLog } from '../components/widgets/ConsoleLog';

const SECTION_IDS = ['home', 'archive', 'intel', 'uplink'];
const NAV_SELECTORS = SECTION_IDS.map((id) => `[data-section="${id}"]`).join(', ');

export function initScrollSpy(): () => void {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(NAV_SELECTORS);
  const sectionElements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

  function setActive(sectionId: string) {
    navLinks.forEach((link) => {
      if (link.dataset.section === sectionId) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActive(id);
          const displayName = id.toUpperCase().replace('HOME', 'HOME').replace('ARCHIVE', 'ARCHIVE').replace('INTEL', 'INTEL').replace('UPLINK', 'UPLINK');
          consoleLog.append(`> MOUNTING DIRECTORY: ~/${displayName}...`, 'info');
        }
      });
    },
    {
      rootMargin: '-30% 0px -60% 0px',
      threshold: [0, 0.5, 1],
    }
  );

  sectionElements.forEach((el) => observer.observe(el));

  // Set initial active state
  setActive('home');

  return () => {
    observer.disconnect();
    navLinks.forEach((link) => link.classList.remove('is-active'));
  };
}