import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSkillsByCategory(skills: any[], category: string) {
  return skills.filter(skill => skill.category === category);
}

export function formatDate(dateString: string) {
  const [month, year] = dateString.split('/');
  const monthNames = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];
  
  const monthIndex = parseInt(month) - 1;
  return `${monthNames[monthIndex]} ${year}`;
}

export function getFeaturedProjects(projects: any[]) {
  return projects.filter(project => project.featured);
}