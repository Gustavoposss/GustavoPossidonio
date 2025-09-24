import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, MapPin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio-simple';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Conteúdo Principal */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge de Status */}
            <div className="flex justify-center lg:justify-start">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                🚀 Disponível para oportunidades
              </Badge>
            </div>

            {/* Nome e Título */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Olá, eu sou{' '}
                <span className="text-primary">Gustavo</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 font-medium">
                {personalInfo.title}
              </h2>
            </div>

            {/* Bio */}
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Informações de Contato */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{personalInfo.email}</span>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Imagem de Perfil */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Círculo de fundo decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl scale-110"></div>
              
              {/* Container da imagem */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                {/* Placeholder para foto - você pode substituir por uma imagem real */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-4xl font-bold text-primary-foreground">G</span>
                    </div>
                    <p className="text-foreground/60 text-sm">
                      Foto de perfil em breve
                    </p>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
