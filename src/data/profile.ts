export interface IdReadoutLine {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  /** Optional: put a PDF in /public and set e.g. "cv.pdf" to show a CV button in the hero. */
  resumeFile?: string;
  summary: string;
  philosophy: string[];
  /** Describes the portrait for screen readers. Describe what is visible, not who is looking. */
  portraitAlt: string;
  /** Short lines shown under the portrait in the SUBJECT_ID card. */
  idReadout: IdReadoutLine[];
}

export const profile: Profile = {
  name: "Dwight Jairo C. Pingul",
  title: "Backend & Systems Software Engineer",
  location: "Pandacaqui, Mexico, Pampanga, Philippines",
  email: "dwightjairo.pingul23@gmail.com",
  github: "https://github.com/yatoyataro",
  linkedin: "https://www.linkedin.com/in/dwightjairopingul/",
  summary:
    "Backend developer with hands-on experience in PHP, JavaScript, Laravel, Node.js, and MySQL, comfortable building REST APIs, real-time features, and database-driven systems. Detail-oriented, with experience in records accuracy and data verification gained through a government office internship. Strong analytical and communication skills, with a proven ability to minimize errors and streamline workflows in fast-paced environments.",
  philosophy: [
    "Maintain analog integrity.",
    "Reduce latency in human interface.",
    "Observe. Record. Deploy.",
  ],
  portraitAlt:
    "Portrait of Dwight Jairo C. Pingul wearing a cream embroidered barong against a slate-blue studio backdrop.",
  idReadout: [
    { label: "DEGREE", value: "BS Computer Science" },
    { label: "HONORS", value: "Magna cum laude" },
    { label: "FOCUS", value: "Backend & systems" },
    { label: "BASE", value: "Pampanga, Philippines" },
  ],
};
