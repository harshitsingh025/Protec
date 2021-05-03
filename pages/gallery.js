import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Gallery() {
  return (
    <main className='content'>
      <Head>
        <title>Gallery</title>
        <link rel='icon' href='/img/logo.svg' />
      </Head>
      <Header />
      <div className='galleryWrapper'>
        <section className='galleryBanner'>
          <h1>Gallery</h1>
          <button className='playBtn'>
            <img src='img/play-button.svg' />
          </button>
        </section>
        <section className='secGallery'>
          <div className='container-fluid'>
            <nav>
              <div
                className='nav nav-tabs gallery-tabs justify-content-center'
                id='nav-tab'
                role='tablist'
              >
                <a
                  className='nav-item nav-link active'
                  id='nav-images-tab'
                  data-toggle='tab'
                  href='#nav-images'
                  role='tab'
                  aria-controls='nav-images'
                  aria-selected='true'
                >
                  Images
                </a>
                <a
                  className='nav-item nav-link'
                  id='nav-videos-tab'
                  data-toggle='tab'
                  href='#nav-videos'
                  role='tab'
                  aria-controls='nav-videos'
                  aria-selected='false'
                >
                  Videos
                </a>
              </div>
            </nav>
            <div className='tab-content' id='nav-tabContent'>
              <div
                className='tab-pane fade show active'
                id='nav-images'
                role='tabpanel'
                aria-labelledby='nav-images-tab'
              >
                <div className='row justify-content-center text-center'>
                  <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12'>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-videos'
                role='tabpanel'
                aria-labelledby='nav-videos-tab'
              >
                <div className='row justify-content-center text-center'>
                  <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12'>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='container'></div>
      </div>
      <Footer />
    </main>
  );
}
