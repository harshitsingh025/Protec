import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import ProductGallery from './components/product-gallery'
import ProductFaq from './components/product-faq'
import ProductTestimonial from './components/product-testimonial'
import Link from 'next/link'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import ContactUS from '../components/ContactUsCommon'

const OwlCarousel = dynamic(
  () => import('react-owl-carousel'),
  {
    ssr: false,
  }
);

export default function PlasticCeramic() {
  return (
    <main className="content">
      <Head>
        <title>Ceramic</title>
        <link rel="icon" href="/img/logo.svg" />
      </Head>
      <Header />
        <div className="productWrapper">
          <section className="productBanner ceramicBanner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <h2 className="heading mb-md-4">Ceramic</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer</p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 px-lg-5">
                  <img src="img/homeProduct3.png" className="img-fluid mt-md-5" />
                  <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
                  <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>                  
                </div>
              </div>
            </div>
          </section>
          <section className="secCategory">
            <div className="lax galleryRightImg categoryRightImg"><img src="img/categoryRight.svg" className="img-fluid" /></div>
            <nav className="category-nav">
              <div className="nav nav-tabs category-tabs justify-content-center" id="nav-tab" role="tablist">
                <a href="ceramic.html" className="nav-item nav-link">Ceramic shield</a>
                <a href="leather-ceramic.html" className="nav-item nav-link">leather ceramic</a>
                <a href="plastic-ceramic.html" className="nav-item nav-link active">Plastic ceramic</a>
                <a href="glass-ceramic.html" className="nav-item nav-link">glass ceramic</a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-series5" role="tabpanel" aria-labelledby="nav-series5-tab">
                <div className="container">
                  <img src="img/plastic-ceramic-text.svg" className="img-fluid" />      
                  <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                      <img src="img/Plastic-ceramic.png" className="img-fluid productImg" />     
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 text-left">
                        <h2 className="heading mb-md-4">Plastic ceramic</h2>  
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an </p>  
                        <button className="btn hvr-fade mt-4">Get A Quote</button>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            <div className="secproductVideo">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-4 productVideoLeft">
                    <h2 className="heading">Video</h2>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-8 productVideoRight">
                    <div className="lax productVideoRightImg"><img src="img/productVideo-bg.svg" className="img-fluid" /></div>
                  </div>
                </div>
                <div className="row justify-content-center productVideoWrapper">
                  <div className="col-xl-7 col-lg-7 col-md-6">
                    <div className="productVideo">
                      <img src="img/galleryBanner.png" className="img-fluid" />
                      <button className="playBtn" data-toggle="modal" data-target="#videoModal"><img src="img/play-button.svg" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="secBenefit">
            <div className="secBenefitInner">
              <div className="container-fluid">
                <img src="img/benifitText.svg" className="img-fluid benefitText" />
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                    <OwlCarousel className='owl-theme' loop margin={10} nav items={1} dots={false} autoplay={true}>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Lorem Ipsum is simply dummy text</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Lorem Ipsum is simply dummy text</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      </div>
                      </div>
                      <div className='item'>
                        <div className="testimonialContent">
                          <h4 className="heading">Lorem Ipsum is simply dummy text</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  </div>
                </div>
                <div className="benefitProduct d-md-none">
                  <img src="img/CS.png" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="benefitProduct">
              <div className="container-fluid">              
                <div className="row justify-content-end align-items-center">
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 text-center">
                    <img src="img/PC.png" className="img-fluid" />                    
                    <div className="lax ball-big"><img src="img/aboutIcon5.png" /></div> 
                    <div className="lax ball-small"><img src="img/aboutIcon4.png" /></div>  
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ProductGallery />          
          <ProductFaq />        
          <section className="secRelatedProducts">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-10 col-lg-10 col-md-12">
                  <h1 className="heading text-center mb-5">Related Products</h1>
                  <OwlCarousel className='owl-theme' loop margin={40} nav items={3} dots={false}>
                    <div className='item'>
                      <a href="ceramic.html" className="relatedPBox">
                        <div className="relatedPImg">
                          <img src="img/homeProduct3.png" />
                        </div>
                        <h5 className="heading">ceramic Shield</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </a>
                    </div>  
                    <div className='item'>
                      <a href="leather-ceramic.html" className="relatedPBox">
                        <div className="relatedPImg">
                          <img src="img/leather-ceramic.png" />
                        </div>
                        <h5 className="heading">leather ceramic</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </a>
                    </div>
                    <div className='item'>
                      <a href="glass-ceramic.html" className="relatedPBox">
                        <div className="relatedPImg">
                          <img src="img/glass-ceramic.png" />
                        </div>
                        <h5 className="heading">glass ceramic</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </a>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </section>
          <ProductTestimonial />
          <section className="secHomeContact">
            <div className="homeContactLeft">
              <img src="img/contact-leftImg.png" className="img-fluid" />
              <div className="lax homeCeramic5"><img src="img/aboutIcon4.png" className="img-fluid" /></div>
              <div className="lax homeCeramic4"><img src="img/aboutIcon5.png" className="img-fluid" /></div>
              <div className="lax homeCeramic3"><img src="img/aboutIcon2.png" className="img-fluid" /></div>
            </div>
            <div className="container">
              <div className="row justify-content-end align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-7">
                  
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <div className="homeForm">
                      <h1 className="heading">Contact Us</h1>
                      <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                      <ContactUS/>
                    </div>
                  </div>
              </div>
            </div>
            <img src="img/contact-bottomImg.svg" className="img-fluid contactBottomImg" />
          </section>
      </div>
      <Footer />      
      <div className="modal fade fullModal" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">              
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yAoLSRbwxL8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
