import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { projects } from '../../data/portfolio-simple';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projetos de Destaque
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais importantes, demonstrando minhas habilidades em desenvolvimento fullstack.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                {/* Ícone do projeto baseado no ID */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.id === 'api-monitoring' && (
                    <span className="text-2xl">🌊</span>
                  )}
                  {project.id === 'dogmatch' && (
                    <span className="text-2xl">🐕</span>
                  )}
                  {project.id === 'amigos-lar' && (
                    <span className="text-2xl">🏠</span>
                  )}
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-foreground/70 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Tecnologias */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground/80">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors duration-200"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  
                  {/* Botão Demo - desabilitado por enquanto */}
                  {/* {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )} */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-foreground/70 mb-6">
            Quer ver mais projetos? Confira meu GitHub!
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Gustavoposss" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              Ver Todos os Projetos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
