
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-sans text-lg leading-relaxed max-w-2xl mx-auto text-gray-200">
            Estamos prontos para atender suas demandas. Fale com um de nossos especialistas 
            e descubra como podemos ajudar seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-8 uppercase tracking-wide">
              Informações de Contato
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="bg-secondary p-3 rounded-full">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold mb-2">Telefone</h4>
                  <p className="font-sans text-gray-200">(XX) XXXX-XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="bg-secondary p-3 rounded-full">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold mb-2">Email</h4>
                  <p className="font-sans text-gray-200">contato@nobreminerais.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="bg-secondary p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold mb-2">Localização</h4>
                  <p className="font-sans text-gray-200">Brasil</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="font-serif text-2xl font-bold mb-8 uppercase tracking-wide">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Nome Completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-secondary"
                  required
                />
                
                <Input
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-secondary"
                  required
                />
              </div>
              
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-secondary"
                required
              />
              
              <Textarea
                name="message"
                placeholder="Sua mensagem..."
                value={formData.message}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-secondary min-h-32"
                required
              />
              
              <Button
                type="submit"
                className="w-full bg-secondary text-black hover:bg-secondary/90 font-sans text-lg py-6 font-semibold uppercase tracking-wide flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
