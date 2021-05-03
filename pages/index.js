import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='content'>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/img/logo.svg' />
      </Head>
      <Header />
      <section className='secBanner'>
        <div
          id='carouselExampleFade'
          className='carousel slide carousel-fade'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src='img/banner.png' alt='First slide' />
              <div className='bannerContent'>
                <div className='container'>
                  <div className='row align-items-end'>
                    <div className='col-lg-5 contentLeft'>
                      <h2>Proteq</h2>
                      <div className='opacity0'>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's
                        </p>
                        <Link href='/about'>
                          <a className='readLink text-purple'>Read More</a>
                        </Link>
                      </div>
                    </div>
                    <img src='img/bannerImg.png' className='img-fluid' />
                    <div className='col-lg-5 contentRight'>
                      <h2>Auto Care</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p>
                      <Link href='/about'>
                        <a className='readLink text-purple'>Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <img src='img/banner.png' alt='First slide' />
              <div className='bannerContent'>
                <div className='container'>
                  <div className='row align-items-end'>
                    <div className='col-lg-5 contentLeft'>
                      <h2>Proteq</h2>
                      <div className='opacity0'>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's
                        </p>
                        <Link href='/about'>
                          <a className='readLink text-purple'>Read More</a>
                        </Link>
                      </div>
                    </div>
                    <img src='img/bannerImg.png' className='img-fluid' />
                    <div className='col-lg-5 contentRight'>
                      <h2>Auto Care</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </p>
                      <Link href='/about'>
                        <a className='readLink text-purple'>Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                className='d-block w-100'
                src='img/banner.png'
                alt='Third slide'
              />
            </div>
          </div>
          <div className='carousel-controls'>
            <a
              className='carousel-control-prev'
              href='#carouselExampleFade'
              role='button'
              data-slide='prev'
            >
              <div className='carousel-control-prev-icon' aria-hidden='true'>
                <img src='img/banner-arrow.svg' />
                &nbsp;Previous
              </div>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleFade'
              role='button'
              data-slide='next'
            >
              <div className='carousel-control-next-icon' aria-hidden='true'>
                Next&nbsp;
                <img src='img/banner-arrow.svg' />
              </div>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
        <div className='gotoSection'>
          <button type='button' className='btn goSection'>
            <i className='fa fa-angle-down' aria-hidden='true'></i>
          </button>
        </div>
        <ul className='list-unstyled stickyLinks'>
          <li>
            <a href='#'>
              <div className='stickyLinkIcon'>
                <img src='img/sticky-info-circle.svg' />
              </div>
              <span>Info</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <div className='stickyLinkIcon'>
                <img src='img/sticky-facebook.svg' />
              </div>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <div className='stickyLinkIcon'>
                <img src='img/sticky-instagram.svg' />
              </div>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <div className='stickyLinkIcon'>
                <img src='img/sticky-twitter.svg' />
              </div>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <div className='stickyLinkIcon'>
                <img src='img/sticky-youtube.svg' />
              </div>
              <span>Youtube</span>
            </a>
          </li>
        </ul>
      </section>
      <section className='secHomeAbout'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='co-xl-5 col-lg-5 col-md-6 col-sm-12'>
              <img src='img/about-car.png' className='img-fluid aboutImg' />
            </div>
            <div className='co-xl-7 col-lg-6 col-md-6 col-sm-12 pl-sm-5'>
              <h1 className='heading text-white'>About Proteq Autocare</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Link href='/about'>
                <a className='readLink text-yellow'>Read More</a>
              </Link>
            </div>
          </div>
        </div>
        <img className='img-fluid aboutLeaf' src='img/leafs.png' />
      </section>
      <section className='secHomeProduct'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='co-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='headShadow'>
                <h1 className='headingShadow'>Ceramic</h1>
                <h1 className='heading'>Ceramic</h1>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <Link href='/about'>
                <a className='readLink text-pink'>Read More</a>
              </Link>
            </div>
            <div className='co-xl-5 col-lg-5 col-md-6 col-sm-12'>
              <img src='img/homeProduct1.png' className='img-fluid' />
            </div>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='co-xl-5 col-lg-5 col-md-6 col-sm-12'>
              <img src='img/homeProduct1.png' className='img-fluid' />
            </div>
            <div className='co-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='headShadow'>
                <h1 className='headingShadow'>Paint</h1>
                <h1 className='heading'>Paint Protection Film</h1>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <Link href='/about'>
                <a className='readLink text-pink'>Read More</a>
              </Link>
            </div>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='co-xl-6 col-lg-6 col-md-6 col-sm-12'>
              <div className='headShadow'>
                <h1 className='headingShadow'>Microfiber</h1>
                <h1 className='heading'>Microfiber Cloth</h1>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <Link href='/about'>
                <a className='readLink text-pink'>Read More</a>
              </Link>
            </div>
            <div className='co-xl-5 col-lg-5 col-md-6 col-sm-12'>
              <img src='img/homeProduct3.png' className='img-fluid' />
            </div>
          </div>
        </div>
        <img src='img/productBottomImg.svg' className='productBottomImg' />
      </section>
      <section className='secHomeTestimonial'>
        <img
          src='img/testimonial-bottom.png'
          className='testimonialBottomImg'
        />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-7 col-lg-7 col-md-7'>
              <div className='testimonialLeft'>
                <img
                  src='img/testimonial-3D-Shield.png'
                  className='img-fluid'
                />
              </div>
              <h1 className='heading'>Testimonials</h1>
            </div>
            <div className='col-xl-5 col-lg-5 col-md-5'>
              <img
                src='img/metro-quote.svg'
                className='img-fluid testimonialQuoteIcon'
              />
              <OwlCarousel
                className='owl-theme'
                loop
                margin={10}
                nav
                items={1}
                dots={false}
              >
                <div className='item'>
                  <div className='testimonialContent'>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <p className='username text-yellow'>- Rushabh Parekh</p>
                  </div>
                </div>
                <div className='item'>
                  <div className='testimonialContent'>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <p className='username text-yellow'>- Rushabh Parekh</p>
                  </div>
                </div>
                <div className='item'>
                  <div className='testimonialContent'>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <p className='username text-yellow'>- Rushabh Parekh</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section className='secHomeCount'>
        <img src='img/count-bg.svg' />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
              <div className='countBox'>
                <h3>
                  <span className='counting' data-count='900'>
                    0
                  </span>{' '}
                  +
                </h3>
                <h4>Lorem Ipsum simply</h4>
              </div>
            </div>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
              <div className='countBox'>
                <h3>
                  <span className='counting' data-count='150'>
                    0
                  </span>{' '}
                  +
                </h3>
                <h4>Lorem Ipsum simply</h4>
              </div>
            </div>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
              <div className='countBox'>
                <h3>
                  <span className='counting' data-count='200'>
                    0
                  </span>{' '}
                  +
                </h3>
                <h4>Lorem Ipsum simply</h4>
              </div>
            </div>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
              <div className='countBox'>
                <h3>
                  <span className='counting' data-count='320'>
                    0
                  </span>{' '}
                  +
                </h3>
                <h4>Lorem Ipsum simply</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='secHomeContact'>
        <div className='homeContactLeft'>
          <img src='img/contact-leftImg.png' className='img-fluid' />
        </div>
        <div className='container'>
          <div className='row justify-content-end align-items-center'>
            <div className='col-xl-7 col-lg-7 col-md-7'></div>
            <div className='col-xl-5 col-lg-5 col-md-5'>
              <div className='homeForm'>
                <h1 className='heading'>Contact Us</h1>
                <p className='mb-4'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
                <form>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Full Name'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Phone Number'
                    />
                  </div>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      rows='4'
                      placeholder='Message'
                    ></textarea>
                  </div>
                  <div className='text-right mt-4'>
                    <button type='button' className='btn'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <img
          src='img/contact-bottomImg.svg'
          className='img-fluid contactBottomImg'
        />
      </section>
      <Footer />
    </main>
  );
}
