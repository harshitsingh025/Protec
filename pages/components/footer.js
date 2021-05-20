import Link from 'next/link'
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <footer>
      <div className="car-top default">
				<span>
          <img src="img/car.png" />
        </span>
			</div>
      <div className="footerTop">        
        <div className="container">
          <div className="footerLinks">
              <a href="about.html">About Proteq</a>
              <a href="gallery.html">Gallery</a>
              <a href="testimonials.html">Testimonials</a>
              <a href="contact.html">Contact</a>
          </div>          
          <div className="footerInfo">
            <p><span>Address:</span> L-102, Prime Mall Irla, Vile Parle (W), Mumbai - 400 056</p>
            <p><span>Phone No:</span> <Link href="tel:8422898422">+91-8422 89 8422</Link> <Link href="tel:8422898422"><a className="ml-3"> +91-8422 89 8422</a></Link></p>
            <p><span>Email:</span> <Link href="mailto:info@proteq.co.in">info@proteq.co.in</Link></p>
          </div>
          <div className="footerSocial">
            <a target="_blank" href="https://www.facebook.com/Proteq-109661883846191/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a target="_blank" href="https://www.instagram.com/proteq_ppf.car/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a target="_blank" href="https://twitter.com/proteq_ppf_car"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCZ6eCrxtUPjNONo-z64Y5vQ?view_as=subscriber"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
          </div>
          <div className="newletter">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-8">
                <form>
                  <div className="form-group">
                    <h4>Subscribe Us:</h4>
                    <input type="email" className="form-control" placeholder="Your email here" />
                    <button type="button" className="btn hvr-fade">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>            
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-md-left text-center">
              <p>Copyright©2021 www.proteq.co.in All Rights Reserved.</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-md-right text-center">
              <div className="copyrightLinks">
                <a href="terms.html">Terms & Conditions</a>
                <a href="privacy-policy.html">Privacy Policy</a>
                <Link href="/"><img src="img/whatsapp.svg" className="img-fluid" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade quoteModal" id="quoteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">  
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="img/cancel.svg" /></button>            
            <div className="modal-body">
              <h4>Request A Quote</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
              <form>
                <div className="form-group">
                  <select className="form-control">
                    <option disabled defaultValue>Select Product</option>
                    <option>Ceramic</option>
                    <option>Paint Protection Film</option>
                    <option>Microfiber Cloth</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>                  
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                </div>
                <div className="text-right">
                  <button type="button" className="btn hvr-fade">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
