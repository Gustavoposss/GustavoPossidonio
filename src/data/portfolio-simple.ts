export const personalInfo = {
  name: "Gustavo Possidonio",
  title: "Desenvolvedor Fullstack em Formação",
  bio: "Desenvolvedor Fullstack em formação com experiência prática em aplicações web e mobile. Expertise em React.js, Node.js, TypeScript e bancos relacionais. Busco aplicar minhas habilidades técnicas em projetos desafiadores.",
  email: "gustavooposs@gmail.com",
  location: "Fortaleza, CE",
  linkedinUrl: "https://www.linkedin.com/in/gustavo-possidonio-42026a35b/",
  githubUrl: "https://github.com/Gustavoposss"
};

export const projects = [
  {
    id: "api-monitoring",
    title: "API Monitoramento de Alagamentos",
    description: "Sistema completo para Defesa Civil com 15+ endpoints REST. Arquitetura escalável para monitoramento em tempo real.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma"],
    featured: true,
    githubUrl: "https://github.com/Gustavoposss/Monitoramento-de-Alagamentos-API"
  },
  {
    id: "dogmatch",
    title: "DogMatch - Plataforma para Pets",
    description: "Aplicação fullstack com sistema de matches e filtros avançados. Autenticação JWT e interface responsiva.",
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
    githubUrl: "https://github.com/Gustavoposss/DogMatch"
  },
  {
    id: "amigos-lar",
    title: "Amigos do Lar - Site Institucional",
    description: "Plataforma moderna para construtora com catálogo de empreendimentos.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/Gustavoposss/Imobiliarias"
  }
];

export const skills = [
  // Linguagens
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "TypeScript", level: 85, category: "languages" },
  { name: "HTML5", level: 80, category: "languages" },
  { name: "CSS3", level: 80, category: "languages" },
  
  // Frontend
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "API REST", level: 85, category: "backend" },
  
  // Banco de Dados
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "Supabase", level: 80, category: "database" },
  { name: "Prisma", level: 75, category: "database" },
  
  // Ferramentas
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Jest", level: 70, category: "tools" },
  { name: "Scrum", level: 75, category: "tools" }
];

export const workExperience = [
  {
    id: "lamp-tech",
    position: "Estagiário em Desenvolvimento Fullstack",
    company: "Lamp Tecnologia",
    startDate: "Jan/2024",
    endDate: "Jan/2025",
    description: [
      "Desenvolvimento de APIs RESTful com Node.js para sistemas web e mobile",
      "Criação de interfaces responsivas com React.js e React Native",
      "Implementação de CRUD completo e integração com PostgreSQL/Supabase"
    ],
    technologies: ["Node.js", "React.js", "React Native", "PostgreSQL", "Supabase"]
  }
];

export const education = [
  {
    id: "unifor",
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade de Fortaleza (UNIFOR)",
    startDate: "Fev/2023",
    endDate: "Dez/2025",
    description: "Formação em desenvolvimento de sistemas com foco em tecnologias modernas e boas práticas de programação."
  }
];
