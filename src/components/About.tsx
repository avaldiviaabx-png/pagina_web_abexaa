
const About = () => {
  return (
    <section className="relative py-20" id="about">
      <div className="absolute inset-0">
        <img
          src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/9e3b54e8-bc17-905d-6867-8ee08bf3ec46.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/90" />
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/d46350c2-57ef-66b5-a70a-a13e36a92f24.jpg" 
              alt="Team"
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="  rounded-lg overflow-hidden shadow-xl">
            <h2 className="text-5xl font-bold mb-6 text-cyan-400">Nuestro Servicio</h2>
            <p className="text-lg mb-4 text-white ">
            "Nuestro servicio de instalación de GPS está diseñado para garantizar una implementación eficiente y segura de nuestras soluciones avanzadas de localización. Contamos con un equipo de técnicos altamente capacitados que se encargan de cada paso del proceso, desde la instalación física de los dispositivos hasta su configuración y puesta en marcha.
            </p>
            <p className="text-lg text-white">
            Confíe en nosotros para la instalación de su sistema de GPS y experimente una mejora significativa en la gestión, seguridad y eficiencia de su flota."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;