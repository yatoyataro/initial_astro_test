export interface SkillCategory {
  category: string;
  items: { name: string; proficiency: number }[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming languages",
    items: [
      { name: "PHP", proficiency: 85 },
      { name: "JavaScript", proficiency: 80 },
      { name: "TypeScript", proficiency: 75 },
      { name: "Python", proficiency: 75 },
      { name: "Java", proficiency: 60 },
      { name: "C++", proficiency: 55 },
      { name: "C", proficiency: 55 },
      { name: "Kotlin", proficiency: 50 },
      { name: "C#", proficiency: 50 },
    ],
  },
  {
    category: "Web technologies",
    items: [
      { name: "HTML5", proficiency: 90 },
      { name: "CSS3", proficiency: 85 },
      { name: "Responsive design", proficiency: 85 },
      { name: "REST API development", proficiency: 80 },
      { name: "WebSockets", proficiency: 70 },
    ],
  },
  {
    category: "Frameworks & libraries",
    items: [
      { name: "Laravel", proficiency: 80 },
      { name: "Tailwind CSS", proficiency: 80 },
      { name: "Node.js", proficiency: 75 },
      { name: "React", proficiency: 75 },
      { name: "CustomTkinter", proficiency: 75 },
      { name: "Next.js", proficiency: 70 },
      { name: "shadcn/ui", proficiency: 70 },
      { name: "Angular", proficiency: 55 },
      { name: "OpenCV", proficiency: 55 },
      { name: "React Native", proficiency: 50 },
      { name: "Qt", proficiency: 50 },
      { name: "PyTorch", proficiency: 50 },
      { name: "SciPy", proficiency: 50 },
    ],
  },
  {
    category: "Databases & backend",
    items: [
      { name: "SQL", proficiency: 85 },
      { name: "MySQL", proficiency: 80 },
      { name: "SQLite", proficiency: 75 },
      { name: "PostgreSQL", proficiency: 70 },
      { name: "MariaDB", proficiency: 70 },
      { name: "Caching strategies", proficiency: 70 },
      { name: "Supabase", proficiency: 65 },
      { name: "Firebase", proficiency: 60 },
      { name: "MongoDB", proficiency: 55 },
      { name: "Oracle", proficiency: 50 },
    ],
  },
  {
    category: "Tools, platforms & cloud",
    items: [
      { name: "VS Code", proficiency: 90 },
      { name: "Git", proficiency: 85 },
      { name: "GitHub", proficiency: 85 },
      { name: "Vite", proficiency: 80 },
      { name: "GitHub Pages", proficiency: 80 },
      { name: "Vercel", proficiency: 75 },
      { name: "PyInstaller", proficiency: 75 },
      { name: "Visual Studio", proficiency: 70 },
      { name: "Ollama", proficiency: 70 },
      { name: "Docker", proficiency: 65 },
      { name: "Swagger", proficiency: 65 },
      { name: "Anaconda", proficiency: 60 },
      { name: "AWS", proficiency: 40 },
    ],
  },
];
