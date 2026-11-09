export interface SkillCategory {
  category: string;
  items: { name: string; proficiency: number }[];
}

export const skills: SkillCategory[] = [
  {
    category: 'PROGRAMMING LANGUAGES',
    items: [
      { name: 'PHP', proficiency: 85 },
      { name: 'JAVASCRIPT', proficiency: 80 },
      { name: 'TYPESCRIPT', proficiency: 75 },
      { name: 'PYTHON', proficiency: 75 },
      { name: 'JAVA', proficiency: 60 },
      { name: 'C++', proficiency: 55 },
      { name: 'KOTLIN', proficiency: 50 },
      { name: 'C', proficiency: 55 },
      { name: 'C#', proficiency: 50 },
    ],
  },
  {
    category: 'WEB TECHNOLOGIES',
    items: [
      { name: 'HTML5', proficiency: 90 },
      { name: 'CSS3', proficiency: 85 },
      { name: 'REST API DEVELOPMENT', proficiency: 80 },
      { name: 'RESPONSIVE DESIGN', proficiency: 85 },
      { name: 'WEBSOCKETS', proficiency: 70 },
    ],
  },
  {
    category: 'FRAMEWORKS & LIBRARIES',
    items: [
      { name: 'LARAVEL', proficiency: 80 },
      { name: 'NODE.JS', proficiency: 75 },
      { name: 'NEXT.JS', proficiency: 70 },
      { name: 'REACT', proficiency: 75 },
      { name: 'ANGULAR', proficiency: 55 },
      { name: 'REACT NATIVE', proficiency: 50 },
      { name: 'CUSTOMTKINTER', proficiency: 75 },
      { name: 'TAILWIND CSS', proficiency: 80 },
      { name: 'SHADCN/UI', proficiency: 70 },
      { name: 'QT', proficiency: 50 },
      { name: 'OPENCV', proficiency: 55 },
      { name: 'PYTORCH', proficiency: 50 },
      { name: 'SCIPY', proficiency: 50 },
    ],
  },
  {
    category: 'DATABASES & BACKEND',
    items: [
      { name: 'MYSQL', proficiency: 80 },
      { name: 'SQL', proficiency: 85 },
      { name: 'SUPABASE', proficiency: 65 },
      { name: 'POSTGRESQL', proficiency: 70 },
      { name: 'SQLITE', proficiency: 75 },
      { name: 'MONGODB', proficiency: 55 },
      { name: 'MARIADB', proficiency: 70 },
      { name: 'ORACLE', proficiency: 50 },
      { name: 'FIREBASE', proficiency: 60 },
      { name: 'CACHING STRATEGIES', proficiency: 70 },
    ],
  },
  {
    category: 'DEVELOPMENT TOOLS & PLATFORMS',
    items: [
      { name: 'GIT', proficiency: 85 },
      { name: 'GITHUB', proficiency: 85 },
      { name: 'VS CODE', proficiency: 90 },
      { name: 'VISUAL STUDIO', proficiency: 70 },
      { name: 'DOCKER', proficiency: 65 },
      { name: 'OLLAMA', proficiency: 70 },
      { name: 'VITE', proficiency: 80 },
      { name: 'VERCEL', proficiency: 75 },
      { name: 'GITHUB PAGES', proficiency: 80 },
      { name: 'PYINSTALLER', proficiency: 75 },
      { name: 'SWAGGER', proficiency: 65 },
      { name: 'ANACONDA', proficiency: 60 },
    ],
  },
  {
    category: 'CLOUD & INFRASTRUCTURE',
    items: [
      { name: 'AWS', proficiency: 40 },
      { name: 'SUPABASE', proficiency: 65 },
      { name: 'DOCKER', proficiency: 65 },
      { name: 'LOCAL OLLAMA INFERENCE', proficiency: 70 },
    ],
  },
];