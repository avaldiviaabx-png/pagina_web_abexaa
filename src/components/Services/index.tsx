import React, { useState, useRef, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

const services = [
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/cbf8abb3-73ca-cc51-1f90-a75caa868c98.png',
    title: 'APP INSTRA',
    description: 'APP Inspectoria de Transporte.',
    details: ' INSTRA es una solución móvil diseñada para inspectores de transporte, permitiendo un registro ágil y preciso de irregularidades durante las revisiones en campo. Boletos no cobrados. Pasajeros sin ticket. Documentación vehicular vencida.',
    gradient: 'bg-gradient-to-br from-emerald-900/10 via-transparent to-blue-500/10'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/8e507499-7360-8544-7aac-bd3a8eed13cb.png',
    title: 'APP CONIN',
    description: 'APP de Gestion Personal.',
    details: 'Es un aplicativo para ayudar al equipo que el equipo de soporte tecnico en campo. pueda registrar y atender las incidencias relacionadas a los equipos GPS,VALIDADORES.',
    gradient: 'bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10'
  },

  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/319f59de-4c1d-8358-5556-42d875cd1793.png',
    title: 'T-PRO',
    description: 'Software Programacion de Flota y Personal.',
    details: 'Plafatorma de gestiòn de programaciòn de flota vehicular. Realiza programaciones de horarios de Ruta. Reprogramaciones en tiempo real.',
    gradient: 'bg-gray'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/c923527a-cb20-f1ff-0add-1d21b1b82b91.png',
    title: 'T-GOA',
    description: 'Gestion de Operacion Asistido por GPS.',
    details: 'Plataforma de monitoreo de unidades en tiempo real con atenciòn de unidades. Visualiza tus unidades vehiculares en tiempo real. Gestion de insicendias enviadas en tiempo real  .',
    gradient: 'bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/d47ef3a9-2e39-12ef-dd49-78992c5ae067.png',
    title: 'T-SIR',
    description: 'Sistema integrado de Recaudo Vehicular.',
    details: 'Gestion de ingresos. Permite manejar alto volumen de transacciones sin caídas. ajuste automático de precios por horario, congestión o tipo de vehículo. Planificación de rutas y tarifas dinámicas .',
    gradient: 'bg-gradient-to-br from-emerald-500/10 via-transparent to-orange-500/10'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/e6a97568-1ff2-150b-53da-d75dcf21815f.png',
    title: 'CCM',
    description: 'Centro de control y Monitoreo de Flota.',
    details: 'Visualización GPS de todos los vehículos en un solo dashboard, con límites geográficos (rutas permitidas). Notificaciones si un bus se sale de la ruta programada o entra en zonas restringidas. Detección de exceso de velocidad, frenados bruscos o aceleraciones peligrosas. Comunicación directa con conductores . Alerta inmediata al centro de control en caso de accidente o robo',
    gradient: 'bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/ab5bdde5-b898-5496-b922-0d785c0e7f91.png',
    title: 'T-MAN',
    description: 'Software se Mantenimiento Vehicular.',
    details: 'Programación automática de mantenimientos: Basado en kilometraje, horas de uso o tiempo.  Listas de verificación para servicios específicos (cambio de aceite, frenos, etc.). Historial de mantenimiento: Registro detallado por vehículo (fechas, repuestos usados, costo, proveedor). Gestión de stock de repuestos: Niveles mínimos/máximos y alertas de reorden. Asignación de repuestos a órdenes de trabajo: Vincula los materiales usados en cada servicio. Creación y asignación de OT: Desde la detección de fallas hasta su resolución.',
    gradient: 'bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/0f4c0c30-c242-8598-79a5-5618f23132b9.png',
    title: 'XBEST',
    description: 'Compras,Almacen,Facturacion Electronica.',
    details: 'Gestión de stock  , Control de entradas, salidas y saldos en tiempo real. Órdenes de compra , Generación y aprobación electrónica de OC con firma digital. Alertas y notificaciones , recordatorios de fechas de pago, recepción de mercancía o contratos por vencer.',
    gradient: 'bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/d271db72-7789-bb1c-9e11-d5a7500792c1.png',
    title: 'IAMetrix',
    description: 'Sistema Control Biometrico.',
    details: ' Registro de asistencia de trabajadores . Validacion de datos. Gestion de cuentas vinculadas a sistemas.',
    gradient: 'bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10'
  },
  {
    image: 'https://mcusercontent.com/c379e3356454ef2a14873d293/images/a0fee12b-0fda-c227-1daf-95cba5cc8fe3.png ',
    title: 'APP BiiX',
    description: 'APP Pago digital QR.',
    details: 'Billetera digital Pago QR. Visualizacion de Rutas Autorizadas . Visualizacion de buses y paraderos disponibles. Encuentra Buses a tu destino.',
    gradient: 'bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/10'
  },

];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      if (!isDragging.current && sliderRef.current) {
        const delta = currentTime - lastTime;
        const scrollAmount = (delta * 0.08); // Reduced speed for smoother animation
        
        sliderRef.current.scrollLeft += scrollAmount;

        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
          sliderRef.current.scrollLeft = 0;
        }
        
        lastTime = currentTime;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    
    isDragging.current = true;
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    startX.current = pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    
    sliderRef.current.style.cursor = 'grabbing';
    sliderRef.current.style.userSelect = 'none';
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();

    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleDragEnd = () => {
    if (!sliderRef.current) return;
    
    isDragging.current = false;
    sliderRef.current.style.cursor = 'grab';
    sliderRef.current.style.removeProperty('user-select');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600">Todas las Soluciones Cloud que tu empresa necesita</p>
        </div>
        <div 
          ref={sliderRef}
          className="overflow-x-hidden cursor-grab touch-pan-x"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="flex gap-8 min-w-max pb-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="w-[300px] h-[350px] flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.02]"
                style={{ willChange: 'transform' }}
              >
                <ServiceCard
                  {...service}
                  onClick={() => setSelectedService(service)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        {...(selectedService || services[0])}
      />
    </section>
  );
};

export default Services;