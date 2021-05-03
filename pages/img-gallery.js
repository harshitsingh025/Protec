import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function ImgGallery() {
  return (
    <main className='content'>
      <Head>
        <title>Img Gallery</title>
        <link rel='icon' href='/img/logo.svg' />
      </Head>
      <Header />
      <section className=''>
        <div className='container py-5'>
          <div className='demo-gallery mt-5'>
            <div id='lightgallery' className='list-unstyled row'>
              <div className='col-md-8'>
                <div className='row'>
                  <div
                    className='col-xs-6 col-sm-4 col-md-3 item'
                    data-responsive='img/1-375.jpg 375, img/1-480.jpg 480, img/1.jpg 800'
                    data-src='img/gallery1.png'
                    data-sub-html='<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
                    data-pinterest-text='Pin it1'
                    data-tweet-text='share on twitter 1'
                  >
                    <a href=''>
                      <img
                        className='img-fluid'
                        src='img/gallery1.png'
                        alt='Thumb-1'
                      />
                    </a>
                  </div>
                  <div
                    className='col-xs-6 col-sm-4 col-md-3 item'
                    data-responsive='img/2-375.jpg 375, img/2-480.jpg 480, img/2.jpg 800'
                    data-src='img/gallery1.png'
                    data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
                    data-pinterest-text='Pin it1'
                    data-tweet-text='share on twitter 1'
                  >
                    <a href=''>
                      <img
                        className='img-fluid'
                        src='img/gallery1.png'
                        alt='Thumb-2'
                      />
                    </a>
                  </div>
                  <div
                    className='col-xs-6 col-sm-4 col-md-3 item'
                    data-responsive='img/13-375.jpg 375, img/13-480.jpg 480, img/13.jpg 800'
                    data-src='img/gallery1.png'
                    data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
                    data-pinterest-text='Pin it1'
                    data-tweet-text='share on twitter 1'
                  >
                    <a href=''>
                      <img
                        className='img-fluid'
                        src='img/gallery1.png'
                        alt='Thumb-3'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='col-xs-6 col-sm-4 col-md-3 item'
                data-responsive='img/4-375.jpg 375, img/4-480.jpg 480, img/4.jpg 800'
                data-src='img/4-1600.jpg'
                data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
                data-pinterest-text='Pin it1'
                data-tweet-text='share on twitter 1'
              >
                <a href=''>
                  <img
                    className='img-fluid'
                    src='img/gallery1.png'
                    alt='Thumb-4'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
