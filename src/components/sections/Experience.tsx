import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Building2, Code } from 'lucide-react';
import { workExperience } from '../../data/portfolio-simple';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Minha jornada profissional em desenvolvimento de software e tecnologia.
          </p>
        </div>

        {/* Timeline de Experiências */}
        <div className="relative">
          {/* Linha vertical da timeline */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>

          <div className="space-y-12">
            {workExperience.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Ponto da timeline */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center z-10">
                  <Building2 className="h-4 w-4 text-primary-foreground" />
                </div>

                {/* Card da experiência */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                            {experience.position}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                            <Building2 className="h-4 w-4" />
                            {experience.company}
                          </div>
                        </div>
                        
                        {/* Badge de período */}
                        <Badge variant="secondary" className="ml-4 bg-primary/10 text-primary border-primary/20">
                          <Calendar className="h-3 w-3 mr-1" />
                          {experience.startDate} - {experience.endDate}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Descrição das responsabilidades */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          Principais Responsabilidades:
                        </h4>
                        <ul className="space-y-2">
                          {experience.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-foreground/70">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator className="bg-border/50" />

                      {/* Tecnologias utilizadas */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground/80">
                          Tecnologias Utilizadas:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs px-2 py-1 border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Interessado em trabalhar comigo?
              </h3>
              <p className="text-foreground/70 mb-6">
                Estou sempre aberto a novas oportunidades e desafios interessantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/gustavo-possidonio-42026a35b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  Conectar no LinkedIn
                </a>
                <a 
                  href="mailto:gustavooposs@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-200 font-medium"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Enviar Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
