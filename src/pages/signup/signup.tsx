import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { Language } from '@globals/enum';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { Input } from '@components/input/input';
import { Button } from '@components/button/button';
import { Link } from 'react-router-dom';
import './signup.scss';

export function SignUp(): ReactElement {
  return (
    <>
      <SEO
        pageTitle="ثبت نام"
        description="یادگیری آسان با وب سایت آموزشی ..."
        keywords={['وب سایت آموزشی', 'یادگیری آنلاین']}
        language={Language.FA_IR}
      />
      <BreadcrumbComponent />
      <section className="signup-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md7 col-lg-6 col-xl-5">
              <div className="signup-form box">
                <h2 className="signup-form__title"> ایجاد حساب کاربری</h2>
                <div className="form-group">
                  <Input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    placeholder="ایمیل"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="password"
                    placeholder="رمز عبور"
                    className="form-control"
                  />
                </div>
                <Button
                  text="ثبت نام"
                  onClick={() => console.log('login')}
                  backgroundColor="main"
                />
                <p>
                  حساب کاربری دارید؟
                  {' '}
                  <Link to="/login">ورود</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
