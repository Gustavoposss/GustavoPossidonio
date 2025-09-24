import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../../data/portfolio-simple';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o email
    // Por enquanto, vamos apenas simular o envio
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    
    // Reset do formulário após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Localização</h3>
                    <p className="text-foreground/70">{personalInfo.location}</p>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Redes Sociais</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status de Disponibilidade */}
            <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/20">
              <CardContent className="py-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Disponível para Oportunidades</h3>
                    <p className="text-sm text-foreground/70">
                      Aberto a propostas de trabalho e projetos freelance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <div>
            <Card className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-foreground/70">
                      Obrigado pelo contato. Responderei em breve!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nome */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Nome *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>

                    {/* Mensagem */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-me sobre seu projeto ou oportunidade..."
                        rows={6}
                        className="border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    {/* Botão de Envio */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50">
          <div className="text-center">
            <p className="text-foreground/60 mb-4">
              Desenvolvido por Gustavo Possidonio © 2025
            </p>
            <div className="flex justify-center gap-6">
              <Badge variant="outline" className="border-primary/30 text-primary">
                React.js
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">
                TypeScript
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">
                Tailwind CSS
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">
                shadcn/ui
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
