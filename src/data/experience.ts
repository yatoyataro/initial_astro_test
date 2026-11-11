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
    degree: "Bachelor of Science in Computer Science",
    school: "Pampanga State University",
    period: "2022-2026",
    honors: ["Magna cum laude", "Consistent Dean's Lister"],
  },
  {
    degree: "Technical-Vocational-Livelihood (TVL-ICT) strand",
    school: "Don Jesus Gonzales High School",
    period: "2020-2022",
    honors: [],
  },
];

export const internship: Internship = {
  role: "General Services Unit Intern",
  org: "PhilHealth Regional Office-III",
  period: "January 2026 - March 2026",
  type: "Administrative and data-related internship",
  bullets: [
    "Streamlined facility inventory tracking across multiple corporate buildings by designing a categorization system, reducing misclassified assets.",
    "Improved data accuracy for travel and fleet logistics logs through rigorous verification.",
    "Increased data-entry efficiency by building optimized Excel templates for department-wide record encoding.",
    "Checked information against inventory records, databases, and Excel sheets.",
    "Helped make data-entry work easier for employees through reusable templates.",
  ],
};

export const certifications: Certification[] = [
  {
    name: "Python Developer Certification",
    issuer: "freeCodeCamp",
    year: "2026",
    topics: ["Python syntax", "Data structures", "Algorithmic problem-solving"],
  },
  {
    name: "Computer System Servicing (CSS) NC II",
    issuer: "TESDA",
    year: "2022",
    topics: ["Computer hardware installation", "Networking", "Computer systems maintenance"],
  },
];
