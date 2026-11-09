export interface Education {
  degree: string;
  school: string;
  period: string;
  honors: string[];
}

export interface Internship {
  role: string;
  org: string;
  period: string;
  type: string;
  bullets: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  topics: string[];
}

export const education: Education[] = [
  {
    degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
    school: 'PAMPANGA STATE UNIVERSITY',
    period: '2022-2026',
    honors: ['MAGNA CUM LAUDE', 'CONSISTENT DEAN\'S LISTER'],
  },
  {
    degree: 'TECHNICAL-VOCATIONAL-LIVELIHOOD (TVL-ICT) STRAND',
    school: 'DON JESUS GONZALES HIGH SCHOOL',
    period: '2020-2022',
    honors: [],
  },
];

export const internship: Internship = {
  role: 'GENERAL SERVICES UNIT INTERN',
  org: 'PHILHEALTH REGIONAL OFFICE-III',
  period: 'JANUARY 2026 - MARCH 2026',
  type: 'ADMINISTRATIVE AND DATA-RELATED INTERNSHIP',
  bullets: [
    'STREAMLINED FACILITY INVENTORY TRACKING ACROSS MULTIPLE CORPORATE BUILDINGS BY DESIGNING A CATEGORIZATION SYSTEM, REDUCING MISCLASSIFIED ASSETS.',
    'IMPROVED DATA ACCURACY FOR TRAVEL AND FLEET LOGISTICS LOGS THROUGH RIGOROUS VERIFICATION.',
    'INCREASED DATA-ENTRY EFFICIENCY BY BUILDING OPTIMIZED EXCEL TEMPLATES FOR DEPARTMENT-WIDE RECORD ENCODING.',
    'CHECKED INFORMATION AGAINST INVENTORY RECORDS, DATABASES, AND EXCEL SHEETS.',
    'HELPED MAKE DATA-ENTRY WORK EASIER FOR EMPLOYEES THROUGH REUSABLE TEMPLATES.',
  ],
};

export const certifications: Certification[] = [
  {
    name: 'PYTHON DEVELOPER CERTIFICATION',
    issuer: 'FREECODECAMP',
    year: '2026',
    topics: ['PYTHON SYNTAX', 'DATA STRUCTURES', 'ALGORITHMIC PROBLEM-SOLVING'],
  },
  {
    name: 'COMPUTER SYSTEM SERVICING (CSS) NC II',
    issuer: 'TESDA',
    year: '2022',
    topics: ['COMPUTER HARDWARE INSTALLATION', 'NETWORKING', 'COMPUTER SYSTEMS MAINTENANCE'],
  },
];