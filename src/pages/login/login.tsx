import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { Language } from '@globals/enum';
import './login.scss';
import { Input } from '@components/input/input';
import { Link } from 'react-router-dom';
import { Button } from '@components/button/button';

export function LogIn(): ReactElement {
  return (
    <>
      <SEO
        pageTitle="ورود"
        description="یادگیری آسان با وب سایت آموزشی ..."
        keywords={['وب سایت آموزشی', 'یادگیری آنلاین']}
        language={Language.FA_IR}
      />
      <BreadcrumbComponent />
      <section className="login-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md7 col-lg-6 col-xl-5">
              <div className="login-form box">
                <h2 className="login-form__title">ورود به حساب کاربری</h2>
                <div className="form-group">
                  <Input
                    type="text"
                    placeholder="ایمیل"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex mb-2 justify-content-end">
                    <Link to="/">رمز عبور خود را فراموش کرده اید؟</Link>
                  </div>
                  <Input
                    type="password"
                    placeholder="رمز عبور"
                    className="form-control"
                  />
                </div>
                <Button
                  text="ورود"
                  onClick={() => console.log('login')}
                  backgroundColor="main"
                />
                <p>
                  حساب کاربری ندارید؟
                  {' '}
                  <Link to="/signup">عضویت</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
