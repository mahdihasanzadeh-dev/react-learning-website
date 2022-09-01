/* eslint-disable max-len */
import { Suspense } from 'react';
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { Language } from '@globals/enum';
import { Spinner } from '@components/spinner/spinner';
import { Button } from '@components/button/button';
import { useNavigate } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';
import './not-found.scss';

export function NotFound(): ReactElement {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Suspense fallback={<Spinner />}>
      <SEO
        pageTitle="صفحه مورد نظر یافت نشد"
        description="یادگیری آسان با وب سایت آموزشی ..."
        keywords={['وب سایت آموزشی', 'یادگیری آنلاین']}
        language={Language.FA_IR}
      />
      <section className="not-found-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md7 col-lg-6 col-xl-5">
              <div className="not-found-box box">
                <h2 className="not-found-box__title">خطای 404</h2>
                <p>به نظر می‌رسد که شما در بین صفحات گم شده اید، ما به شما کمک می کنیم تا از اینجا به بیرون بروید.</p>
                <div className="not-found-box__button">
                  <Button
                    text="به صفحه اصلی برگردید"
                    onClick={() => navigate('/')}
                    backgroundColor="main"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
