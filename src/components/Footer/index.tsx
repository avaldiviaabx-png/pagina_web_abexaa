import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Clock, Building2,  ShoppingBag, Wrench, User, Youtube } from 'lucide-react';

const departments = [
  {
    name: 'Administración',
    icon: Building2,
    contacts: [
      { type: 'phone', value: '989-293-198' },
      { type: 'email', value: 'Abexacloud@gmail.com' },
      
    ]
  },
  {
    name: 'Atención al Cliente',
    icon: User,
    contacts: [
      { type: 'phone', value: '999-864-105' },
      { type: 'phone', value: '989-657-764' },
      { type: 'email', value: 'Schavez.abx@gmail.com' },
      { type: 'email', value: 'Acliente.abx@gmail.com' },
     
    ]
  },
  {
    name: 'Implementación',
    icon: Wrench,
    contacts: [
      { type: 'phone', value: '940-311-527' },
      { type: 'phone', value: '905-472-050' },
      { type: 'email', value: 'Wflores.abx@gmail.com' },
     
    ]
  },
  {
    name: 'Ventas',
    icon: ShoppingBag,
    contacts: [
      { type: 'phone', value: '977-704-777' },
     
    
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-black/90 to-blue-950 text-white">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
        
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
           ABEXA CLOUD
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-900" />
                <span className="text-gray-300">Daniel Fernandez 3839, Lima 15301</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-900" />
                <span className="text-gray-300">999-888-777</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-900" />
                <span className="text-gray-300">Abexacloud@gmail.com</span>
              </div>
              <div className="flex items-center">
               
              
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-900 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-900 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                  Nuestros Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-900 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-blue-900 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                  BiiX
                </a>
              </li>
            </ul>
          </div>

  
          <div>
            <h3 className="text-xl font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                T-GOA
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                T-PRO
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                T-SIR
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                T-REG  
              </li>
            </ul>
          </div>

    
          <div>
            <h3 className="text-xl font-semibold mb-6">Nuestras Redes</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
                <span>Youtube</span>
              </a>
             
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

       
        <div className="border-t border-blue-800 py-12">
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-900 to-blue-200 bg-clip-text text-transparent">
            Contactos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept) => (
              <div key={dept.name} className="bg-black backdrop-blur-sm rounded-lg p-6 hover:bg-blue-800/50 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <dept.icon className="w-6 h-6 text-blue-900 mr-2" />
                  <h4 className="text-lg font-semibold">{dept.name}</h4>
                </div>
                <ul className="space-y-3">
                  {dept.contacts.map((contact, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      {contact.type === 'phone' && <Phone className="w-4 h-4 mr-2 text-blue-900" />}
                      {contact.type === 'email' && <Mail className="w-4 h-4 mr-2 text-blue-900" />}
                      {contact.type === 'hours' && <Clock className="w-4 h-4 mr-2 text-blue-900" />}
                      <span>{contact.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-blue-800 py-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ABEXA Cloud Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;