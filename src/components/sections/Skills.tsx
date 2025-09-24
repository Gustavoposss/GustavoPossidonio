import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '../../data/portfolio-simple';

const Skills = () => {
  // Função para agrupar habilidades por categoria
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  // Função para obter o ícone da categoria
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return '💻';
      case 'frontend':
        return '🎨';
      case 'backend':
        return '⚙️';
      case 'database':
        return '🗄️';
      case 'tools':
        return '🛠️';
      default:
        return '📚';
    }
  };

  // Função para obter o nome da categoria em português
  const getCategoryName = (category: string) => {
    switch (category) {
      case 'languages':
        return 'Linguagens';
      case 'frontend':
        return 'Frontend';
      case 'backend':
        return 'Backend';
      case 'database':
        return 'Banco de Dados';
      case 'tools':
        return 'Ferramentas';
      default:
        return category;
    }
  };

  const categories = ['languages', 'frontend', 'backend', 'database', 'tools'];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Minhas competências em desenvolvimento, organizadas por categoria e nível de proficiência.
          </p>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categorySkills = getSkillsByCategory(category);
            
            return (
              <Card key={category} className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getCategoryIcon(category)}</span>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {getCategoryName(category)}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <Badge 
                          variant="secondary" 
                          className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20"
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Resumo das Habilidades */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Resumo das Competências
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {skills.filter(s => s.level >= 85).length}
                  </div>
                  <p className="text-sm text-foreground/70">Avançado (85%+)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {skills.filter(s => s.level >= 75 && s.level < 85).length}
                  </div>
                  <p className="text-sm text-foreground/70">Intermediário (75-84%)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {skills.filter(s => s.level >= 60 && s.level < 75).length}
                  </div>
                  <p className="text-sm text-foreground/70">Básico (60-74%)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {skills.length}
                  </div>
                  <p className="text-sm text-foreground/70">Total de Skills</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
