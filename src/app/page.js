import Image from 'next/image';
import Carrusel from './components/Carrusel';
import ButtonNav from './components/ButtonNav';

export default function Home() {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        {/* Header */}
        <header className="bg-dark py-5">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6">
                <div className="my-5 text-center text-xl-start">
                  <h1 className="display-5 fw-bolder text-white mb-2">Arquetipos Sistémicos</h1>
                  <p className="lead fw-normal text-white-50 mb-4">Explora los patrones sistémicos más comunes en la dinámica de sistemas y cómo afectan a organizaciones y sociedades.</p>
                  <ButtonNav />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Section for each arquetype */}
        <section className="py-5" id="arquetipos">
          <div className="container px-5 my-5">
            {arquetiposData.map((arquetipo, index) => (
              <div key={index} className="row gx-5 mb-5">
                <div className="col-lg-4">
                  <h2 className="fw-bolder">{arquetipo.title}</h2>
                  <h3 className="mb-0">{arquetipo.subtitle}</h3>
                  <Image
                    src={arquetipo.image}
                    alt={arquetipo.title}
                    width={300}
                    height={300}
                    className="img-fluid rounded-3 my-5"
                  />
                </div>
                <div className="col-lg-8">
                  <div className="row gx-5 row-cols-1 row-cols-md-2">
                    <div className="col mb-5 h-100">
                      <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">insights</span>
                      <h2 className="h5">Estructura</h2>
                      <p>{arquetipo.estructura}</p>
                    </div>
                    <div className="col mb-5 h-100">
                      <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">warning</span>
                      <h2 className="h5">Síntomas</h2>
                      <p>{arquetipo.sintoma}</p>
                    </div>
                    <div className="col mb-5 h-100">
                      <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">lightbulb</span>
                      <h2 className="h5">Ejemplo</h2>
                      <p>{arquetipo.ejemplo}</p>
                    </div>
                    <div className="col h-100">
                      <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">fact_check</span>
                      <h2 className="h5">Principio Administrativo</h2>
                      <p>{arquetipo.principio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Carousel section */}
        <section className="py-5 bg-light" id="carousel-section">
          <div className="container px-5 my-5">
            <Carrusel />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Juan Antonio Herrera de la Rosa 2024</div></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Data for each arquetype
const arquetiposData = [
  {
    title: "Compensación entre Proceso y Demora",
    subtitle: "Arquetipo Sistémico",
    estructura: "Actuar en sistemas con retroalimentación lenta puede crear inestabilidad si no se considera la demora en los efectos.",
    sintoma: "Ejemplo: Un mercado inmobiliario que se satura por exceso de construcción.",
    ejemplo: "Inversión excesiva en bienes raíces sin prever la demanda real.",
    principio: "En un sistema lento, la agresividad produce inestabilidad.",
    image: "/arquetipos/Compensacion-entre-Proceso-y-Demora.jpg",
  },
  {
    title: "Límites del Crecimiento",
    subtitle: "Arquetipo Sistémico",
    estructura: "El crecimiento rápido se enfrenta a un límite que puede causar una desaceleración o colapso.",
    sintoma: "Ejemplo: Una compañía experimenta resistencia al intentar integrar minorías.",
    ejemplo: "Una empresa que enfrenta un límite en el crecimiento debido a factores internos o externos.",
    principio: "No presiones el proceso de crecimiento; enfócate en superar los límites.",
    image: "/arquetipos/Limites-del-Crecimiento.jpg",
  },
  {
    title: "Desplazamiento de la Carga",
    subtitle: "Arquetipo Sistémico",
    estructura: "Soluciones a corto plazo que alivian síntomas crean dependencia y debilitan soluciones fundamentales.",
    sintoma: "Ejemplo: Uso de soluciones temporales como préstamos para aliviar problemas financieros recurrentes.",
    ejemplo: "Dependencia en préstamos para cubrir necesidades financieras en lugar de resolver la raíz del problema.",
    principio: "Concéntrate en la solución fundamental; usa la solución sintomática para ganar tiempo.",
    image: "/arquetipos/Desplazamiento-de-la-Carga.jpg",
  },
  {
    title: "Desplazamiento de la Carga hacia la Intervención",
    subtitle: "Arquetipo Sistémico",
    estructura: "La dependencia en intervenciones externas puede reducir la autosuficiencia del sistema.",
    sintoma: "Ejemplo: Empresas que recurren constantemente a consultores externos en lugar de desarrollar competencias internas.",
    ejemplo: "Un programa de asistencia externa que inhibe la autosuficiencia a largo plazo.",
    principio: "Limita la ayuda externa; fomenta el desarrollo de habilidades internas.",
    image: "/arquetipos/Desplazamiento-de-la-Carga-hacia-la-Intervencion.jpg",
  },
  {
    title: "Erosión de Metas",
    subtitle: "Arquetipo Sistémico",
    estructura: "Soluciones a corto plazo erosionan objetivos importantes a largo plazo, rebajando estándares.",
    sintoma: "Ejemplo: Una empresa de alta tecnología rebaja sus estándares de calidad durante una crisis.",
    ejemplo: "Reducir expectativas para enfrentar problemas temporales puede degradar el desempeño general.",
    principio: "Mantén la visión y evita reducir estándares permanentemente.",
    image: "/arquetipos/Erosion-de-Metas.jpg",
  },
  {
    title: "Escalada",
    subtitle: "Arquetipo Sistémico",
    estructura: "Competencia excesiva entre dos partes que desean obtener una ventaja relativa, causando una espiral de agresividad.",
    sintoma: "Ejemplo: Guerra de precios entre dos empresas rivales que reduce las ganancias de ambas.",
    ejemplo: "Escalada en acciones de competencia que lleva a un deterioro en ambas partes.",
    principio: "Busca estrategias donde ambas partes puedan ganar; considera gestos de paz.",
    image: "/arquetipos/Escalada.jpg",
  },
  {
    title: "Éxito para quien tiene Éxito",
    subtitle: "Arquetipo Sistémico",
    estructura: "Dos actividades compiten por recursos limitados, donde el éxito inicial de una reduce los recursos para la otra.",
    sintoma: "Ejemplo: Preferencia de un manager por un protegido, lo que limita el desarrollo de otros empleados.",
    ejemplo: "Actividades exitosas atraen más recursos, causando una desventaja en otras áreas.",
    principio: "Apunta al logro equilibrado; si es necesario, desvincula recursos para reducir competencia.",
    image: "/Arquetipos/Exito-para-quien-tiene-Exito.jpg",
  },
  {
    title: "Tragedia del Terreno Común",
    subtitle: "Arquetipo Sistémico",
    estructura: "Uso excesivo de un recurso compartido causa su agotamiento y afecta a todos los involucrados.",
    sintoma: "Ejemplo: Sobrecarga de un equipo compartido en una empresa hasta su deterioro.",
    ejemplo: "Sobreutilización de recursos comunes que lleva a su agotamiento.",
    principio: "Establece regulaciones o incentivos para el uso sostenible de los recursos comunes.",
    image: "/arquetipos/Tragedia-del-Terreno-Comun.jpg",
  },
  {
    title: "Soluciones Rápidas que Fallan",
    subtitle: "Arquetipo Sistémico",
    estructura: "Soluciones a corto plazo generan problemas a largo plazo que requieren más soluciones rápidas.",
    sintoma: "Ejemplo: Aumento de deudas al usar préstamos para cubrir pagos recurrentes.",
    ejemplo: "Uso de soluciones temporales repetidamente puede agravar problemas.",
    principio: "Enfócate en soluciones a largo plazo y usa soluciones rápidas solo cuando sea necesario.",
    image: "/arquetipos/Soluciones-Rapidas-que-Fallan.jpg",
  },
  {
    title: "Crecimiento y Subinversión",
    subtitle: "Arquetipo Sistémico",
    estructura: "El crecimiento depende de la inversión en capacidad, pero la subinversión limita el crecimiento.",
    sintoma: "Ejemplo: Una aerolínea que crece rápidamente sin invertir en infraestructura, lo que afecta la calidad.",
    ejemplo: "Subinversión en infraestructura necesaria para sostener el crecimiento puede llevar a un colapso.",
    principio: "Invierte de manera anticipada en capacidad para sostener la demanda potencial.",
    image: "/arquetipos/Crecimiento-y-Subinversion.jpg",
  }
];
