import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <nav className='navbar navbar-expand-lg'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <Link href='/'>
          <a className='navbar-brand'>
            <img src='img/logo.svg' className='img-fluid' />
          </a>
        </Link>
        <div className='headerRight'>
          <div className='topbar'>
            <ul className='list-unstyled'>
              <li className='socialLinks'>
                <a target='_blank' href='https://www.facebook.com/'>
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>
                <a target='_blank' href='https://www.instagram.com/'>
                  <i className='fa fa-instagram' aria-hidden='true'></i>
                </a>
                <a target='_blank' href='https://twitter.com/'>
                  <i className='fa fa-twitter' aria-hidden='true'></i>
                </a>
                <a target='_blank' href='https://www.youtube.com/'>
                  <i className='fa fa-youtube-play' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <Link href='tel:8422898422'>+91-8422 89 8422</Link>
              </li>
              <li>
                <Link href='tel:8422898422'>+91-8422 98 8422</Link>
              </li>
            </ul>
          </div>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
            <ul className='navbar-nav ml-auto'>
              <li
                className={
                  router.pathname == '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href='/'>
                  <a className='nav-link'>Home</a>
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Products
                </a>
                <div
                  className='dropdown-menu container'
                  aria-labelledby='navbarDropdown'
                >
                  <div className='row'>
                    <div className='col-lg-4'>
                      <div className='headProductImg'>
                        <img src='img/logo.svg' />
                      </div>
                    </div>
                    <div className='col-lg-8'>
                      <ul className='list-unstyled megaList'>
                        <li>
                          <h4>Ceramic</h4>
                          <Link href='/'>
                            <a>Ceramic Sheild</a>
                          </Link>
                          <Link href='/'>
                            <a>Leather Ceramic</a>
                          </Link>
                          <Link href='/'>
                            <a>Plastic Ceramic</a>
                          </Link>
                          <Link href='/'>
                            <a>Glass Ceramic</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/paint-protection'>
                            <h4>Paint Protection Film</h4>
                          </Link>
                          <Link href='/'>
                            <a>2.0 Series</a>
                          </Link>
                          <Link href='/'>
                            <a>3.0 Series</a>
                          </Link>
                          <Link href='/'>
                            <a>5.0 Series</a>
                          </Link>
                          <Link href='/'>
                            <a>M Series</a>
                          </Link>
                        </li>
                        <li>
                          <h4>Microfiber Cloth</h4>
                          <Link href='/'>
                            <a>2.0 Series</a>
                          </Link>
                          <Link href='/'>
                            <a>3.0 Series</a>
                          </Link>
                          <Link href='/'>
                            <a>5.0 Series</a>
                          </Link>
                          <Link href='/'>
                            <a>M Series</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={
                  router.pathname == '/about' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href='/about'>
                  <a className='nav-link'>About Us</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == '/gallery' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href='/gallery'>
                  <a className='nav-link'>Gallery</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == '/testimonials'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link href='/testimonials'>
                  <a className='nav-link'>Testimonials</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == '/contact' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href='/contact'>
                  <a className='nav-link'>Contact</a>
                </Link>
              </li>
              <li className='nav-item btnGetQuote'>
                <Link href='/'>
                  <a className='nav-link'>Get A Quote</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
