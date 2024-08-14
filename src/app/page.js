import Image from 'next/image';

export default function Home() {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <a className="navbar-brand" href="/">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                    <li><a className="dropdown-item" href="/blog-home">Blog Home</a></li>
                    <li><a className="dropdown-item" href="/blog-post">Blog Post</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                    <li><a className="dropdown-item" href="/portfolio-overview">Portfolio Overview</a></li>
                    <li><a className="dropdown-item" href="/portfolio-item">Portfolio Item</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="bg-dark py-5">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6">
                <div className="my-5 text-center text-xl-start">
                  <h1 className="display-5 fw-bolder text-white mb-2">A Bootstrap 5 template for modern businesses</h1>
                  <p className="lead fw-normal text-white-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                    <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                <Image
                  src="https://dummyimage.com/600x400/343a40/6c757d"
                  alt="..."
                  width={600}
                  height={400}
                  className="img-fluid rounded-3 my-5"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Features section */}
        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A better way to start building.</h2></div>
              <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                  <div className="col mb-5 h-100">
                    <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">collections</span>
                    <h2 className="h5">Featured title</h2>
                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                  </div>
                  <div className="col mb-5 h-100">
                  <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">business</span>
                    <h2 className="h5">Featured title</h2>
                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                  </div>
                  <div className="col mb-5 mb-md-0 h-100">
                    <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">toggle_on</span>
                    <h2 className="h5">Featured title</h2>
                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                  </div>
                  <div className="col h-100">
                    <span className="material-icons bg-primary text-white rounded-3 mb-3 p-2">toggle_on</span>
                    <h2 className="h5">Featured title</h2>
                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial section */}
        <div className="py-5 bg-light">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-10 col-xl-7">
                <div className="text-center">
                  <div className="fs-4 mb-4 fst-italic">Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!</div>
                  <div className="d-flex align-items-center justify-content-center">
                    <Image 
                      src="https://dummyimage.com/80x80/343a40/6c757d"
                      alt="..."
                      width={80}
                      height={80}
                      className="rounded-circle"
                    />
                    <div className="fw-bold">
                      Tom Ato
                      <span className="fw-bold text-primary mx-1">/</span>
                      CEO, Pomodoro
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog preview section */}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="text-center">
                  <h2 className="fw-bolder">From our blog</h2>
                  <p className="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                </div>
              </div>
            </div>
            <div className="row gx-5">
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <Image
                    src="https://dummyimage.com/600x350/ced4da/6c757d"
                    alt="..."
                    width={600}
                    height={350}
                    className="card-img-top"
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Blog post title</h5></a>
                    <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <Image
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                          width={40}
                          height={40}
                          className="rounded-circle me-3"
                        />
                        <div className="small">
                          <div className="fw-bold">Machiavelli</div>
                          <div className="text-muted">March 12, 2024 &middot; 6 min read</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <Image
                    src="https://dummyimage.com/600x350/adb5bd/495057"
                    alt="..."
                    width={600}
                    height={350}
                    className="card-img-top"
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Media</div>
                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Another blog post title</h5></a>
                    <p className="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card in a card group.</p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <Image
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                          width={40}
                          height={40}
                          className="rounded-circle me-3"
                        />
                        <div className="small">
                          <div className="fw-bold">John Doe</div>
                          <div className="text-muted">March 23, 2024 &middot; 4 min read</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <Image
                    src="https://dummyimage.com/600x350/6c757d/343a40"
                    alt="..."
                    width={600}
                    height={350}
                    className="card-img-top"
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                    <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">The last blog post title is a little bit longer than the others</h5></a>
                    <p className="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the cards content.</p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <Image
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                          width={40}
                          height={40}
                          className="rounded-circle me-3"
                        />
                        <div className="small">
                          <div className="fw-bold">Jane Doe</div>
                          <div className="text-muted">April 2, 2024 &middot; 10 min read</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2024</div></div>
            <div className="col-auto">
              <a className="link-light small" href="#!">Privacy</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">Terms</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
