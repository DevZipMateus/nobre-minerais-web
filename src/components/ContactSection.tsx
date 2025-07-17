
import { Phone, Mail, MapPin } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">
              Entre em Contato
            </h2>
            <p className="font-sans text-lg mb-8 leading-relaxed">
              Estamos prontos para atender suas demandas. Fale com um de nossos especialistas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-secondary" />
                <span className="font-sans">(XX) XXXX-XXXX</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-secondary" />
                <span className="font-sans">contato@nobreminerais.com.br</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-secondary" />
                <span className="font-sans">Endereço da empresa, Brasil</span>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Nome Completo"
                value={formData.name}
                onChange={handleChange}
                className="bg-white text-black"
                required
              />
              
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white text-black"
                required
              />
              
              <Input
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white text-black"
                required
              />
              
              <Textarea
                name="message"
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                className="bg-white text-black min-h-32"
                required
              />
              
              <Button
                type="submit"
                className="w-full bg-secondary text-black hover:bg-secondary/90 font-sans text-lg py-6"
              >
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
