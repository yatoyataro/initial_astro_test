export type ProjectStatus = "ONLINE" | "SOURCE_AVAILABLE" | "IN_PROGRESS" | "ARCHIVED";

export interface Project {
  id: string;
  name: string;
  year: string;
  type: string;
  role: string;
  tech: string[];
  description: string;
  features: string[];
  repoUrl?: string;
  liveUrl?: string;
  /**
   * ONLINE = has a live demo (liveUrl), SOURCE_AVAILABLE = public repo only,
   * IN_PROGRESS = still being built, ARCHIVED = no longer maintained.
   */
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: "openxai-hackathon",
    name: "OpenxAI HACK NODE Global Hackathon",
    year: "2025",
    type: "Hackathon",
    role: "Backend engineer",
    tech: ["Next.js", "TypeScript", "Node.js", "Ollama"],
    description:
      "Backend system using Next.js and TypeScript, with local Ollama inference to support offline-first AI image analysis.",
    features: [
      "Backend development using Next.js and TypeScript.",
      "Smart caching strategies.",
      "Local AI inference using Ollama.",
      "Offline-first AI image analysis.",
      "Asynchronous job-processing endpoints.",
    ],
    // TODO: replace with the direct link to this project's repository.
    repoUrl: "https://github.com/yatoyataro",
    status: "SOURCE_AVAILABLE",
  },
  {
    id: "my-honorian-buddy",
    name: "My Honorian Buddy",
    year: "2025",
    type: "Peer tutoring platform",
    role: "Backend engineer",
    tech: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "JavaScript"],
    description:
      "A peer tutoring platform supporting student tutoring, tutor matching, session scheduling, progress tracking, and real-time communication.",
    features: [
      "Peer tutoring platform functionality.",
      "Content-based AI matchmaking.",
      "Tutoring session scheduling.",
      "Progress tracking.",
      "Real-time chat and workspace functionality.",
    ],
    repoUrl: "https://github.com/yatoyataro/My-Honorian-Buddy",
    status: "SOURCE_AVAILABLE",
  },
  {
    id: "larahbigdeck",
    name: "LarahBigDeck",
    year: "2024",
    type: "Flashcard learning application",
    role: "Full stack engineer",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase"],
    description:
      "A flashcard-based learning application with functionality for creating decks and studying flashcards.",
    features: [
      "Flashcard deck functionality.",
      "Study functionality.",
      "Authentication documentation.",
      "Supabase database integration documentation.",
      "Database migrations.",
      "Testing documentation.",
      "Setup and installation documentation.",
    ],
    repoUrl: "https://github.com/yatoyataro/LarahBigDeck",
    status: "SOURCE_AVAILABLE",
  },
  {
    id: "bong-dental-clinic",
    name: "Bong Dental Clinic",
    year: "2023",
    type: "Dental clinic website",
    role: "Frontend engineer",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A dental clinic website with homepage, dental services, provider profiles, clinic information, contact information, and working hours.",
    features: [
      "Homepage with services.",
      "Dental services listing.",
      "Provider profiles.",
      "Clinic information.",
      "Contact information.",
      "Working hours.",
    ],
    repoUrl: "https://github.com/yatoyataro/Bong-Dental-Clinic",
    liveUrl: "https://yatoyataro.github.io/Bong-Dental-Clinic/",
    status: "ONLINE",
  },
  {
    id: "universal-image-converter",
    name: "Universal Image Converter",
    year: "2024",
    type: "Windows desktop application",
    role: "Software engineer",
    tech: ["Python", "CustomTkinter", "Pillow", "PyInstaller"],
    description:
      "A desktop image conversion application designed to convert batches of images between supported image formats.",
    features: [
      "Batch image conversion.",
      "PNG, JPG, JPEG, WEBP, BMP input support.",
      "WEBP, PNG, JPG output support.",
      "Image previews.",
      "Conversion queue with item removal.",
      "Output folder selection.",
      "Background conversion using threading.",
      "Error logging.",
      "Default image quality of 90.",
    ],
    repoUrl: "https://github.com/yatoyataro/universal_image_converter",
    status: "SOURCE_AVAILABLE",
  },
  {
    id: "yatility-studio",
    name: "Yatility Studio 1.0",
    year: "2024",
    type: "Windows desktop software",
    role: "Software engineer",
    tech: ["Python", "CustomTkinter", "Pillow", "PyInstaller"],
    description:
      "A planned transformation of the existing Universal Image Converter into a broader desktop software application named Yatility Studio 1.0. Local-first architecture, excluding AI-dependent features from version 1.0.",
    features: [
      "Windows desktop application.",
      "Local-first architecture.",
      "Exclude AI-dependent features from version 1.0.",
      "Defer AI tools until after version 1.0.",
      "Light and dark appearance modes.",
      "Modular category-based interface.",
      "Security considerations.",
      "Error handling.",
      "Policy and EULA acceptance.",
    ],
    status: "IN_PROGRESS",
  },
  {
    id: "cashback-detective",
    name: "Cashback Detective",
    year: "2024",
    type: "AI-assisted cashback investigation application",
    role: "Backend engineer",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "Vitest", "Ollama"],
    description:
      "A cashback investigation application that uses backend logic and local AI integration to help investigate cashback transaction statuses.",
    features: [
      "Node.js backend.",
      "TypeScript.",
      "PostgreSQL integration.",
      "Vitest automated tests.",
      "Ollama local model integration.",
      "Health endpoint.",
      "Ask endpoint.",
      "Cashback transaction investigation.",
      "Transaction eligibility and status handling.",
    ],
    repoUrl: "https://github.com/yatoyataro/cashback-detective",
    status: "SOURCE_AVAILABLE",
  },
];
