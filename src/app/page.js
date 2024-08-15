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
                  <h1 className="display-5 fw-bolder text-white mb-2">Conferencias Inspiradoras</h1>
                  <p className="lead fw-normal text-white-50 mb-4">Aprende de las experiencias y enseñanzas compartidas por Carlos Kasuga y Yokoi Kenji sobre la importancia de la calidad, la disciplina y los valores.</p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#carlos">Carlos Kasuga</a>
                    <a className="btn btn-warning btn-lg px-4 me-sm-3" href="#yokoi">Yokoi Kenji</a>
                    <ButtonNav />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                <Image
                  src='/hero.png'
                  alt="Conferencia"
                  width={600}
                  height={400}
                  className="img-fluid rounded-3 my-5"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Features section */}
        <section className="py-5" id="carlos">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h2 className="fw-bolder">Conferencia de Calidad</h2>
                <h3 className='mb-0'>Carlos Kasuga</h3>
                <Image
                  src="https://sanluispotosi.quadratin.com.mx/www/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-17-at-8.29.01-PM.jpeg"
                  alt="Carlos Kasuga"
                  width={300}
                  height={300}
                  className="img-fluid rounded-3 my-5"
                />
              </div>
              <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                  <div className="col mb-5 h-100">
                    <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">star</span>
                    <h2 className="h5">Calidad y Éxito</h2>
                    <p className="mb-0">Carlos Kasuga enfatiza la importancia de la calidad en todos los aspectos de la vida, tanto personal como profesional. La clave del éxito, según él, reside en la dedicación, la responsabilidad, y la mejora continua.</p>
                  </div>
                  <div className="col mb-5 h-100">
                    <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">group</span>
                    <h2 className="h5">Valores y Disciplina</h2>
                    <p className="mb-0">La conferencia destaca cómo los valores y la disciplina son fundamentales para construir una sociedad justa y próspera, basándose en el ejemplo de la cultura japonesa.</p>
                  </div>
                  <div className="col mb-5 mb-md-0 h-100">
                    <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">history_edu</span>
                    <h2 className="h5">Educación y Familia</h2>
                    <p className="mb-0">Kasuga comparte cómo la educación en valores desde la infancia, promovida en el hogar y la escuela, es esencial para formar individuos responsables y comprometidos.</p>
                  </div>
                  <div className="col h-100">
                    <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">business_center</span>
                    <h2 className="h5">Gestión Empresarial</h2>
                    <p className="mb-0">Desde su experiencia como empresario, Kasuga subraya que una gestión basada en principios éticos no solo es posible, sino también rentable a largo plazo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Yokoi Kenji section */}
        <section className="py-5 bg-light" id="yokoi">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="text-center">
                  <h2 className="fw-bolder">Disciplina y Mitos sobre Japón</h2>
                  <h3 className="mb-4">Yokoi Kenji</h3>
                  <p className="lead fw-normal text-muted mb-5">
                    Yokoi Kenji, a través de su conferencia, nos invita a reflexionar
                    sobre la verdadera esencia de la disciplina y desmonta varios mitos
                    sobre Japón y su cultura.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gx-5">
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <Image
                    src="https://i.blogs.es/ce63ca/tegan-mierle-ioyeitud2g8-unsplash/1366_2000.webp"
                    alt="Disciplina"
                    width={250}
                    height={250}
                    className="card-img-top"
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Disciplina</div>
                    <h5 className="card-title mb-3">La Clave del Éxito</h5>
                    <p className="card-text mb-0">
                      Kenji enfatiza que la verdadera disciplina va más allá de seguir reglas; 
                      es un compromiso constante con la mejora personal y profesional. La disciplina 
                      es el pilar que sostiene el crecimiento y el éxito a largo plazo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <Image
                    src="https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/s301geeq35icovn5a939tg2rsg.jpg"
                    alt="Mitos"
                    width={350}
                    height={350}
                    className="card-img-top"
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Cultura</div>
                    <h5 className="card-title mb-3">Desmontando Mitos</h5>
                    <p className="card-text mb-0">
                      En su charla, Kenji aborda y desmiente varios mitos comunes sobre Japón, 
                      como la idea de que los japoneses son naturalmente disciplinados. Explica 
                      que esta disciplina es una construcción social, no una característica innata.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <Image
                    src="https://www.caritas.org.mx/wp-content/uploads/2021/11/valores-universales-1024x768.jpg"
                    alt="Éxito"
                    width={300}
                    height={300}
                    className="card-img-top"
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Valores</div>
                    <h5 className="card-title mb-3">Valores Universales</h5>
                    <p className="card-text mb-0">
                      Kenji subraya que valores como el respeto, la honestidad y la disciplina 
                      son universales y esenciales para el progreso en cualquier cultura. Estos 
                      valores son la base de una sociedad próspera.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel section */}
        <section className="py-5" id="carousel-section">
          <div className="container px-5 my-5">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    src="https://i0.wp.com/www.periodismo.com/wp-content/subid/trabajo-duro.jpeg"
                    alt="Trabajo Duro"
                    width={1000}
                    height={600}
                    className="d-block w-100"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Trabajo Duro</h5>
                    <p>El éxito no es casualidad. Kenji resalta que detrás de cada logro existe un esfuerzo arduo y constante.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    src="https://mapsicologos.com/wp-content/uploads/2020/05/cambio.jpg"
                    alt="Adaptación"
                    width={1200}
                    height={600}
                    className="d-block w-100"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Adaptación y Resiliencia</h5>
                    <p>Kenji nos enseña que la adaptabilidad es clave en un mundo cambiante. Saber adaptarse es una forma de inteligencia.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    src="https://media.semprefamilia.com.br/semprefamilia/2015/11/bigstock-family-and-friends-sitting-at-95387342-80fb83e4.jpg"
                    alt="Unidad Familiar"
                    width={1200}
                    height={600}
                    className="d-block w-100"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Unidad Familiar</h5>
                    <p>La familia es el núcleo de la sociedad. Kenji destaca la importancia de mantener la unidad y el apoyo mutuo.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        <Carrusel />
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
