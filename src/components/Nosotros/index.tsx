import React from 'react';
import { Target, Users, Globe2, Award } from 'lucide-react';

const Nosotros = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="nosotros">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
            NOSOTROS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos ABEXA Cloud, empresa peruana líder en soluciones tecnológicas 
            para el transporte público, comprometidos con la innovación y excelencia.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">50+</h3>
            <p className="text-gray-600 text-sm">Profesionales</p>
          </div>
          <div className="text-center">
            <Globe2 className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">15+</h3>
            <p className="text-gray-600 text-sm">Ciudades</p>
          </div>
          <div className="text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">100+</h3>
            <p className="text-gray-600 text-sm">Empresas</p>
          </div>
          <div className="text-center">
            <Target className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-800">10+</h3>
            <p className="text-gray-600 text-sm">Años</p>
          </div>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Facilitar la movilidad urbana a través de soluciones tecnológicas innovadoras 
              que optimicen la eficiencia del transporte público, mejorando la calidad de vida 
              de las comunidades peruanas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;