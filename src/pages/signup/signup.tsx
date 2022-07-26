import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { Language } from '@globals/enum';

export function SignUp(): ReactElement {
  return (
    <>
      <SEO
        pageTitle="ثبت نام"
        description="یادگیری آسان با وب سایت آموزشی ..."
        keywords={['وب سایت آموزشی', 'یادگیری آنلاین']}
        language={Language.FA_IR}
      />
      <div className="container">
        <h1>SignUp</h1>
      </div>
    </>

  );
}
