import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function PaintProtection() {
  return (
    <main className='content'>
      <Head>
        <title>Paint Protection Film</title>
        <link rel='icon' href='/img/logo.svg' />
      </Head>
      <Header />
      <div className='paintWrapper'>
        <section className='paintBanner'>
          <div className='container'>
            <div className='row justify-content-center align-items-center'>
              <div className='col-xl-7 col-lg-6 col-md-6 col-sm-12'>
                <h2 className='heading mb-md-4'>PAINT PROTECTION FILM</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </p>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                <img src='img/paintImg.png' className='img-fluid' />
              </div>
            </div>
          </div>
        </section>
        <section className='secCategory'>
          <nav className='category-nav'>
            <div
              className='nav nav-tabs category-tabs justify-content-center'
              id='nav-tab'
              role='tablist'
            >
              <a
                className='nav-item nav-link active'
                id='nav-series2-tab'
                data-toggle='tab'
                href='#nav-series2'
                role='tab'
                aria-controls='nav-series2'
                aria-selected='true'
              >
                2.0 series
              </a>
              <a
                className='nav-item nav-link'
                id='nav-series3-tab'
                data-toggle='tab'
                href='#nav-series3'
                role='tab'
                aria-controls='nav-series3'
                aria-selected='false'
              >
                3.0 Series
              </a>
              <a
                className='nav-item nav-link'
                id='nav-series5-tab'
                data-toggle='tab'
                href='#nav-series5'
                role='tab'
                aria-controls='nav-series5'
                aria-selected='false'
              >
                5.0 Series
              </a>
              <a
                className='nav-item nav-link'
                id='nav-seriesm-tab'
                data-toggle='tab'
                href='#nav-seriesm'
                role='tab'
                aria-controls='nav-seriesm'
                aria-selected='false'
              >
                M series
              </a>
            </div>
          </nav>
          <div className='tab-content' id='nav-tabContent'>
            <div
              className='tab-pane fade show active'
              id='nav-series2'
              role='tabpanel'
              aria-labelledby='nav-series2-tab'
            >
              <div className='container'>
                <img src='img/2.0seriesText.svg' className='img-fluid m-md-5' />
                <div className='row justify-content-center'>
                  <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
                    <img
                      src='img/2.0series.png'
                      className='img-fluid productImg'
                    />
                  </div>
                  <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12 text-left'>
                    <h2 className='heading mb-md-4'>2.0 series</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry’s standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an{' '}
                    </p>
                    <button className='btn mt-4'>Get A Quote</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='nav-series3'
              role='tabpanel'
              aria-labelledby='nav-series3-tab'
            >
              <div className='container'>
                <img src='img/2.0seriesText.svg' className='img-fluid m-md-5' />
                <div className='row justify-content-center'>
                  <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
                    <img
                      src='img/2.0series.png'
                      className='img-fluid productImg'
                    />
                  </div>
                  <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12 text-left'>
                    <h2 className='heading mb-md-4'>3.0 series</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry’s standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an{' '}
                    </p>
                    <button className='btn mt-4'>Get A Quote</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='nav-series5'
              role='tabpanel'
              aria-labelledby='nav-series5-tab'
            >
              <div className='container'>
                <img src='img/2.0seriesText.svg' className='img-fluid m-md-5' />
                <div className='row justify-content-center'>
                  <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
                    <img
                      src='img/2.0series.png'
                      className='img-fluid productImg'
                    />
                  </div>
                  <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12 text-left'>
                    <h2 className='heading mb-md-4'>5.0 series</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry’s standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an{' '}
                    </p>
                    <button className='btn mt-4'>Get A Quote</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='nav-seriesm'
              role='tabpanel'
              aria-labelledby='nav-seriesm-tab'
            >
              <div className='container'>
                <img src='img/2.0seriesText.svg' className='img-fluid m-md-5' />
                <div className='row justify-content-center'>
                  <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
                    <img
                      src='img/2.0series.png'
                      className='img-fluid productImg'
                    />
                  </div>
                  <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12 text-left'>
                    <h2 className='heading mb-md-4'>M series</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry’s standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an{' '}
                    </p>
                    <button className='btn mt-4'>Get A Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='secproductVideo'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-4 productVideoLeft'>
                  <h2 className='heading'>Video</h2>
                </div>
                <div className='col-xl-9 col-lg-9 col-md-8 productVideoRight'></div>
              </div>
              <div className='row justify-content-center productVideoWrapper'>
                <div className='col-xl-7 col-lg-6 col-md-6'>
                  <div className='productVideo'>
                    <img src='img/galleryBanner.png' className='img-fluid' />
                    <button className='playBtn'>
                      <img src='img/play-button.svg' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='secBenefit'>
          <div className='container-fluid'>
            <img src='img/benifitText.svg' className='img-fluid benefitText' />
            <div className='row justify-content-center align-items-center'>
              <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
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
                      <h4 className='heading'>
                        Lorem Ipsum is simply dummy text
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining
                        essentially unchanged.
                      </p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='testimonialContent'>
                      <h4 className='heading'>
                        Lorem Ipsum is simply dummy text
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='testimonialContent'>
                      <h4 className='heading'>
                        Lorem Ipsum is simply dummy text
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
              <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'></div>
            </div>
          </div>
        </section>
        <section className='secProductGallery'>
          <div className='container'>
            <div className='row'>
              <h1 className='heading'>Gallery</h1>
            </div>
          </div>
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
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <p className='username text-yellow'>- Rushabh Parekh</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='testimonialContent'>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <p className='username text-yellow'>- Rushabh Parekh</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='testimonialContent'>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <p className='username text-yellow'>- Rushabh Parekh</p>
                    </div>
                  </div>
                </OwlCarousel>
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
      </div>
      <Footer />
    </main>
  );
}
