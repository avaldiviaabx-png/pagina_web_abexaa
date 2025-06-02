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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white ">
    
      <div className="relative h-[800px] mb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/00ae1d73-1863-dae2-5f4c-0c6f2156544f.png"
            alt="Company Hero"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 " />
        </div>
       
      </div>

      {/* Stats Section */}
      <div 
        ref={el => observerRefs.current[0] = el}
        className="container mx-auto px-6 mb-24 opacity-0 translate-y-8 transition-all duration-700"
      >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

           <div className="bg-[url('https://mcusercontent.com/c379e3356454ef2a14873d293/images/a46e9c23-9258-2614-5478-cd2d0414a3f6.png')] bg-cover bg-center rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl text-white font-bold mb-4">Equipo</h3>
              <p className="text-white text-2xl bg-black/20">Ciudades Colaboradoras</p>
           </div>
           
           <div className="bg-[url('https://mcusercontent.com/c379e3356454ef2a14873d293/images/00ae1d73-1863-dae2-5f4c-0c6f2156544f.png')] bg-cover bg-center rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl text-white font-bold mb-4">10+</h3>
              <p className="text-gray-600">Ciudades Colaboradoras</p>
           </div>

           
           <div className="bg-[url('https://mcusercontent.com/c379e3356454ef2a14873d293/images/00ae1d73-1863-dae2-5f4c-0c6f2156544f.png')] bg-cover bg-center rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl text-white font-bold mb-4">10+</h3>
              <p className="text-gray-600">Ciudades Colaboradoras</p>
           </div>


           <div className="bg-[url('https://mcusercontent.com/c379e3356454ef2a14873d293/images/00ae1d73-1863-dae2-5f4c-0c6f2156544f.png')] bg-cover bg-center rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl text-white font-bold mb-4">10+</h3>
              <p className="text-gray-600">Ciudades Colaboradoras</p>
           </div>



         
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission" className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div 
          ref={el => observerRefs.current[1] = el}
          className="container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Mision ABEXA</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
            "Facilitar la movilidad urbana a través de soluciones tecnológicas innovadoras
             que optimicen la eficiencia, accesibilidad y sostenibilidad del transporte público,
              mejorando la calidad de vida de las comunidades y contribuyendo al desarrollo de
               ciudades inteligentes."
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle2 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excelencia</h3>
              <p className="text-gray-600">
              Nuestro compromiso con la calidad, la innovación y la mejora continua nos impulsa a superar
               las expectativas y a ofrecer productos y servicios que marquen la diferencia en el sector del transporte público."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Building2 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovacion</h3>
              <p className="text-gray-600">
              "la innovación nos impulsa a desarrollar herramientas que no solo
                resuelven los desafíos actuales, sino que también anticipan las necesidades del futuro,
                 liderando la transformación hacia un sistema más eficiente y conectado."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Clientes</h3>
              <p className="text-gray-600">
              "Nos comprometemos a entender y anticipar sus necesidades, ofreciendo soluciones
                personalizadas que superen sus expectativas y fortalezcan su confianza en nosotros 
                como socios estratégicos en el sector del transporte público."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div id="values" className="py-24">
        <div 
          ref={el => observerRefs.current[2] = el}
          className="container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestros Valores</h2>
              <p className="text-xl text-gray-600">
                
Los principios que guían nuestro trabajo y nuestras relaciones.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                    alt="Team Collaboration"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Innovación colaborativa
                  </h3>
                  <p className="text-gray-600 mb-6">
                  Creemos en el poder del trabajo en equipo y la creatividad colectiva. Por
                    Al reunir diversas perspectivas y conocimientos, creamos
                    soluciones que son mayores que la suma de sus partes.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Colaboración multifuncional
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      comunicación abierta
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Éxito compartido
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                    alt="Sustainability"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Crecimiento Sostenible
                  </h3>
                  <p className="text-gray-600 mb-6">
                  Estamos comprometidos a crear soluciones que no solo resuelvan los problemas actuales
                    sino que también contribuirán a un mañana mejor. Nuestro enfoque
                    equilibra la innovación con la responsabilidad.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      Conciencia ambiental
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      Asociaciones a largo plazo
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      Innovación responsable
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div 
          ref={el => observerRefs.current[3] = el}
          className="container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="max-w-4xl mx-auto text-center mb-16">
            <TreePine className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Nuestro compromiso con la sostenibilidad
            </h2>
            <p className="text-xl text-gray-600">
            Construyendo un futuro mejor a través de tecnología responsable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Green Technology
              </h3>
              <p className="text-gray-600">
              Implementar soluciones ecológicas y reducir la huella de carbono
              a través de prácticas tecnológicas eficientes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
              Responsabilidad Social
              </h3>
              <p className="text-gray-600">
              Apoyar a las comunidades locales y promover la alfabetización digital a través de
              iniciativas educativas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
              Práctica ética
              </h3>
              <p className="text-gray-600">
              Mantener altos estándares de ética empresarial y promover
              transparencia en todas las operaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;