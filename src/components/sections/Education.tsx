import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { education } from '../../data/portfolio-simple';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Minha jornada educacional e desenvolvimento acadêmico em tecnologia.
          </p>
        </div>

        {/* Grid de Formações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu) => (
            <Card key={edu.id} className="hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 group">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  {/* Ícone da universidade */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                      <BookOpen className="h-4 w-4" />
                      {edu.institution}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Período */}
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-foreground/60" />
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {edu.startDate} - {edu.endDate}
                  </Badge>
                </div>

                {/* Localização */}
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-foreground/60" />
                  <span className="text-sm text-foreground/70">Fortaleza, CE</span>
                </div>

                {/* Descrição */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground/80">
                    Sobre o Curso:
                  </h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Status */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground/80">Status:</span>
                    <Badge variant="outline" className="border-green-500/30 text-green-600 bg-green-500/10">
                      Em Andamento
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informações Adicionais */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="py-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Foco Acadêmico
                </h3>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Durante minha formação, tenho me dedicado ao estudo de tecnologias modernas e 
                  práticas de desenvolvimento que me preparam para o mercado de trabalho.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Programação</h4>
                  <p className="text-sm text-foreground/70">
                    Algoritmos, estruturas de dados e paradigmas de programação
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Desenvolvimento Web</h4>
                  <p className="text-sm text-foreground/70">
                    Frontend, backend e arquiteturas de sistemas web
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Banco de Dados</h4>
                  <p className="text-sm text-foreground/70">
                    Modelagem, SQL e sistemas de gerenciamento de dados
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
