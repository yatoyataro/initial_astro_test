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
  status: "ONLINE" | "ARCHIVED" | "IN_PROGRESS";
}

export const projects: Project[] = [
  {
    id: "openxai-hackathon",
    name: "OPENXAI HACK NODE GLOBAL HACKATHON",
    year: "2025",
    type: "HACKATHON",
    role: "BACKEND ENGINEER",
    tech: ["NEXT.JS", "TYPESCRIPT", "NODE.JS", "OLLAMA"],
    description:
      "BACKEND SYSTEM USING NEXT.JS AND TYPESCRIPT, WITH LOCAL OLLAMA INFERENCE TO SUPPORT OFFLINE-FIRST AI IMAGE ANALYSIS.",
    features: [
      "BACKEND DEVELOPMENT USING NEXT.JS AND TYPESCRIPT.",
      "SMART CACHING STRATEGIES.",
      "LOCAL AI INFERENCE USING OLLAMA.",
      "OFFLINE-FIRST AI IMAGE ANALYSIS.",
      "ASYNCHRONOUS JOB-PROCESSING ENDPOINTS.",
    ],
    repoUrl: "https://github.com/yatoyataro",
    status: "ONLINE",
  },
  {
    id: "my-honorian-buddy",
    name: "MY HONORIAN BUDDY",
    year: "2025",
    type: "PEER TUTORING PLATFORM",
    role: "BACKEND ENGINEER",
    tech: ["LARAVEL", "PHP", "MYSQL", "BLADE", "TAILWIND CSS", "JAVASCRIPT"],
    description:
      "A PEER TUTORING PLATFORM SUPPORTING STUDENT TUTORING, TUTOR MATCHING, SESSION SCHEDULING, PROGRESS TRACKING, AND REAL-TIME COMMUNICATION.",
    features: [
      "PEER TUTORING PLATFORM FUNCTIONALITY.",
      "CONTENT-BASED AI MATCHMAKING.",
      "TUTORING SESSION SCHEDULING.",
      "PROGRESS TRACKING.",
      "REAL-TIME CHAT AND WORKSPACE FUNCTIONALITY.",
    ],
    repoUrl: "https://github.com/yatoyataro/My-Honorian-Buddy",
    status: "ONLINE",
  },
  {
    id: "larahbigdeck",
    name: "LARAHBIGDECK",
    year: "2024",
    type: "FLASHCARD LEARNING APPLICATION",
    role: "FULL STACK ENGINEER",
    tech: ["REACT", "TYPESCRIPT", "VITE", "TAILWIND CSS", "SHADCN/UI", "SUPABASE"],
    description:
      "A FLASHCARD-BASED LEARNING APPLICATION WITH FUNCTIONALITY FOR CREATING DECKS AND STUDYING FLASHCARDS.",
    features: [
      "FLASHCARD DECK FUNCTIONALITY.",
      "STUDY FUNCTIONALITY.",
      "AUTHENTICATION DOCUMENTATION.",
      "SUPABASE DATABASE INTEGRATION DOCUMENTATION.",
      "DATABASE MIGRATIONS.",
      "TESTING DOCUMENTATION.",
      "SETUP AND INSTALLATION DOCUMENTATION.",
    ],
    repoUrl: "https://github.com/yatoyataro/LarahBigDeck",
    status: "ONLINE",
  },
  {
    id: "bong-dental-clinic",
    name: "BONG DENTAL CLINIC",
    year: "2023",
    type: "DENTAL CLINIC WEBSITE",
    role: "FRONTEND ENGINEER",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    description:
      "A DENTAL CLINIC WEBSITE WITH HOMEPAGE, DENTAL SERVICES, PROVIDER PROFILES, CLINIC INFORMATION, CONTACT INFORMATION, AND WORKING HOURS.",
    features: [
      "HOMEPAGE WITH SERVICES.",
      "DENTAL SERVICES LISTING.",
      "PROVIDER PROFILES.",
      "CLINIC INFORMATION.",
      "CONTACT INFORMATION.",
      "WORKING HOURS.",
    ],
    repoUrl: "https://github.com/yatoyataro/Bong-Dental-Clinic",
    liveUrl: "https://yatoyataro.github.io/Bong-Dental-Clinic/",
    status: "ONLINE",
  },
  {
    id: "universal-image-converter",
    name: "UNIVERSAL IMAGE CONVERTER",
    year: "2024",
    type: "WINDOWS DESKTOP APPLICATION",
    role: "SOFTWARE ENGINEER",
    tech: ["PYTHON", "CUSTOMTKINTER", "PILLOW", "PYINSTALLER"],
    description:
      "A DESKTOP IMAGE CONVERSION APPLICATION DESIGNED TO CONVERT BATCHES OF IMAGES BETWEEN SUPPORTED IMAGE FORMATS.",
    features: [
      "BATCH IMAGE CONVERSION.",
      "PNG, JPG, JPEG, WEBP, BMP INPUT SUPPORT.",
      "WEBP, PNG, JPG OUTPUT SUPPORT.",
      "IMAGE PREVIEWS.",
      "CONVERSION QUEUE WITH ITEM REMOVAL.",
      "OUTPUT FOLDER SELECTION.",
      "BACKGROUND CONVERSION USING THREADING.",
      "ERROR LOGGING.",
      "DEFAULT IMAGE QUALITY OF 90.",
    ],
    repoUrl: "https://github.com/yatoyataro/universal_image_converter",
    status: "ONLINE",
  },
  {
    id: "yatility-studio",
    name: "YATILITY STUDIO 1.0",
    year: "2024",
    type: "WINDOWS DESKTOP SOFTWARE",
    role: "SOFTWARE ENGINEER",
    tech: ["PYTHON", "CUSTOMTKINTER", "PILLOW", "PYINSTALLER"],
    description:
      "A PLANNED TRANSFORMATION OF THE EXISTING UNIVERSAL IMAGE CONVERTER INTO A BROADER DESKTOP SOFTWARE APPLICATION NAMED YATILITY STUDIO 1.0. LOCAL-FIRST ARCHITECTURE, EXCLUDING AI-DEPENDENT FEATURES FROM VERSION 1.0.",
    features: [
      "WINDOWS DESKTOP APPLICATION.",
      "LOCAL-FIRST ARCHITECTURE.",
      "EXCLUDE AI-DEPENDENT FEATURES FROM VERSION 1.0.",
      "DEFER AI TOOLS UNTIL AFTER VERSION 1.0.",
      "LIGHT AND DARK APPEARANCE MODES.",
      "MODULAR CATEGORY-BASED INTERFACE.",
      "SECURITY CONSIDERATIONS.",
      "ERROR HANDLING.",
      "POLICY AND EULA ACCEPTANCE.",
    ],
    status: "IN_PROGRESS",
  },
  {
    id: "cashback-detective",
    name: "CASHBACK DETECTIVE",
    year: "2024",
    type: "AI-ASSISTED CASHBACK INVESTIGATION APPLICATION",
    role: "BACKEND ENGINEER",
    tech: ["TYPESCRIPT", "NODE.JS", "POSTGRESQL", "VITEST", "OLLAMA"],
    description:
      "A CASHBACK INVESTIGATION APPLICATION THAT USES BACKEND LOGIC AND LOCAL AI INTEGRATION TO HELP INVESTIGATE CASHBACK TRANSACTION STATUSES.",
    features: [
      "NODE.JS BACKEND.",
      "TYPESCRIPT.",
      "POSTGRESQL INTEGRATION.",
      "VITEST AUTOMATED TESTS.",
      "OLLAMA LOCAL MODEL INTEGRATION.",
      "HEALTH ENDPOINT.",
      "ASK ENDPOINT.",
      "CASHBACK TRANSACTION INVESTIGATION.",
      "TRANSACTION ELIGIBILITY AND STATUS HANDLING.",
    ],
    repoUrl: "https://github.com/yatoyataro/cashback-detective",
    status: "ONLINE",
  },
];
