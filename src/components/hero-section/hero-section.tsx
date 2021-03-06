/* eslint-disable max-len */
import type { ReactElement } from 'react';
import { Button } from '@components/button/button';
import BannerImage from '@assets/img/banner-img.png';
import './hero-section.scss';

export function HeroSection():ReactElement {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero__text">
              <h2 className="mb-3">سرمایه گذاری در دانش بهترین سود را دارد</h2>
              <h1 className="mb-3">بهترین پلتفرم آنلاین برای یادگیری</h1>
              <p className="mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
              <Button
                text="ثبت نام"
                onClick={() => console.log('sdf')}
                backgroundColor="main"
              />
            </div>
          </div>
          <div className="col-md-6">
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
