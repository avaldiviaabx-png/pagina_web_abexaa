import React, { useEffect, useRef } from 'react';
import { 
  Target, 
  Award, 
  Users, 
  Globe2, 
  Rocket,
  CheckCircle2,
  Building2,
  TreePine,
  Heart,
  Sparkles
} from 'lucide-react';

const Nosotros = () => {
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },  
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div 
        ref={el => observerRefs.current[0] = el}
        className="container mx-auto px-6 mb-16 opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
            NOSOTROS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos ABEXA Cloud, una empresa peruana dedicada a revolucionar el transporte público 
            a través de soluciones tecnológicas innovadoras y confiables.
          </p>
        </div>

        {/* Company Image */}
        <div className="relative h-[400px] mb-16 overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/00ae1d73-1863-dae2-5f4c-0c6f2156544f.png"
            alt="ABEXA Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/30" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Nuestro Equipo</h3>
            <p className="text-white/90">Profesionales comprometidos con la excelencia</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div 
        ref={el => observerRefs.current[1] = el}
        className="container mx-auto px-6 mb-24 opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
            <p className="text-gray-600">Profesionales Especializados</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <Globe2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">15+</h3>
            <p className="text-gray-600">Ciudades Atendidas</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">100+</h3>
            <p className="text-gray-600">Empresas Satisfechas</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
            <Rocket className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">10+</h3>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div 
          ref={el => observerRefs.current[2] = el}
          className="container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Misión</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Facilitar la movilidad urbana a través de soluciones tecnológicas innovadoras
              que optimicen la eficiencia, accesibilidad y sostenibilidad del transporte público,
              mejorando la calidad de vida de las comunidades y contribuyendo al desarrollo de
              ciudades inteligentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle2 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excelencia</h3>
              <p className="text-gray-600">
                Nuestro compromiso con la calidad, la innovación y la mejora continua nos impulsa a superar
                las expectativas y a ofrecer productos y servicios que marquen la diferencia.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Building2 className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovación</h3>
              <p className="text-gray-600">
                La innovación nos impulsa a desarrollar herramientas que no solo
                resuelven los desafíos actuales, sino que también anticipan las necesidades del futuro.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Compromiso</h3>
              <p className="text-gray-600">
                Nos comprometemos a entender y anticipar las necesidades de nuestros clientes,
                ofreciendo soluciones personalizadas que superen sus expectativas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16">
        <div 
          ref={el => observerRefs.current[3] = el}
          className="container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-600 mb-12">
                Ser la empresa líder en soluciones tecnológicas para el transporte público en América Latina,
                reconocida por nuestra innovación, calidad y compromiso con el desarrollo sostenible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Transformando el Futuro del Transporte
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Tecnología de Vanguardia</h4>
                      <p className="text-gray-600">Implementamos las últimas tecnologías para crear soluciones eficientes y escalables.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Sostenibilidad</h4>
                      <p className="text-gray-600">Promovemos un transporte más limpio y eficiente para un futuro sostenible.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Impacto Social</h4>
                      <p className="text-gray-600">Mejoramos la calidad de vida de millones de personas a través de nuestras soluciones.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/a46e9c23-9258-2614-5478-cd2d0414a3f6.png"
                  alt="Future of Transport"
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div 
          ref={el => observerRefs.current[4] = el}
          className="container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestros Valores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y nuestras relaciones con clientes, colaboradores y la comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Integridad</h3>
              <p className="text-gray-600 text-sm">Actuamos con honestidad y transparencia en todas nuestras relaciones.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Colaboración</h3>
              <p className="text-gray-600 text-sm">Trabajamos en equipo para alcanzar objetivos comunes y crear valor.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Innovación</h3>
              <p className="text-gray-600 text-sm">Buscamos constantemente nuevas formas de mejorar y evolucionar.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Excelencia</h3>
              <p className="text-gray-600 text-sm">Nos esforzamos por superar las expectativas en todo lo que hacemos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;