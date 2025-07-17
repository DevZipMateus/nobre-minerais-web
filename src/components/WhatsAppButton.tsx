
import { MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappNumbers = [
    {
      number: '5521965691913',
      display: '21 96569-1913',
      url: 'https://api.whatsapp.com/send/?phone=5521965691913&text&type=phone_number&app_absent=0'
    },
    {
      number: '5521995385789',
      display: '21 99538-5789',
      url: 'https://api.whatsapp.com/send/?phone=5521995385789&text&type=phone_number&app_absent=0'
    }
  ];

  const openWhatsApp = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded menu */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border overflow-hidden animate-fade-in">
          <div className="bg-green-500 text-white px-4 py-2">
            <p className="font-medium text-sm">Entre em contato via WhatsApp:</p>
          </div>
          <div className="p-2">
            {whatsappNumbers.map((contact, index) => (
              <button
                key={index}
                onClick={() => openWhatsApp(contact.url)}
                className="flex items-center w-full px-3 py-2 text-left hover:bg-gray-50 rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">{contact.display}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
        title="Falar no WhatsApp"
      >
        <img 
          src="/lovable-uploads/be852ebc-a3b2-4d56-92ba-cdbd6eecbd5b.png" 
          alt="WhatsApp" 
          className="w-8 h-8"
        />
      </button>

      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </div>
  );
};

export default WhatsAppButton;
