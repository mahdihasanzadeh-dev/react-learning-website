import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer__item">
                <h3 className="footer__logo">
                  <span>mahdi</span>
                  hasanzadeh
                </h3>
                <ul>
                  <li><Link to="#about">درباره ما</Link></li>
                  <li><Link to="#careeares">فرصت های شغلی</Link></li>
                  <li><Link to="#certificate">گواهینامه</Link></li>
                  <li><Link to="#blog">بلاگ</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer__item">
                <h3>یادگیری</h3>
                <ul>
                  <li><Link to="#about">ارتباط با ما</Link></li>
                  <li><Link to="#service">نظرات دانشجویان</Link></li>
                  <li><Link to="#careeares">قیمت گزاری</Link></li>
                  <li><Link to="#certificate">سوالات متداول</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer__item">
                <h3>بیشتر</h3>
                <ul>
                  <li><Link to="#about">مدرس شوید</Link></li>
                  <li><Link to="#service">وبینارها</Link></li>
                  <li><Link to="#careeares">رزومه ساز</Link></li>
                  <li><Link to="#certificate">پشتیبانی</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer__item">
                <h3>شبکه های اجتماعی</h3>
                <ul>
                  <li>
                    <a href="https://twitter.com/mahdihasanzade1" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                      توئیتر
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mahdihasanzadeh8/" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                      اینستاگرام
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/reactappir" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon className="social-icon" icon={faYoutube} />
                      یوتیوب
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mahdi-hasanzadeh/" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                      لینکدین
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p className="m-0 py-4 text-center">
            Copyright &copy; 2022
            <a href="https://github.com/mahdihasanzadeh-dev/react-learning-website" target="_blank" rel="noreferrer"> Mahdi Hasanzadeh</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
