import { Button } from '@components/button/button';
import { useNavigate } from 'react-router-dom';
import BannerImage from '@assets/img/banner-img.png';
import type { ReactElement } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import { BubbleAnimation } from '@components/bubble-animation/bubble-animation';
import './hero-section.scss';

export function HeroSection():ReactElement {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="hero-section">
      <BubbleAnimation />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero__text">
              <h2 className="mb-3">سرمایه گذاری در دانش بهترین سود را دارد</h2>
              <h1 className="mb-3">بهترین پلتفرم آنلاین برای یادگیری</h1>
              <p className="mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              <Button
                text="ثبت نام"
                onClick={() => navigate('/signup')}
                backgroundColor="main"
              />
            </div>
          </div>
          <div className="col-md-6 order-first order-md-last mb-5 mb-md-0">
            <div className="hero__img">
              <div className="circular-img">
                <div className="circular-img__inner">
                  <div className="circular-img__circle" />
                  <img src={BannerImage} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
