/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { Language } from '@globals/enum';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { ContactItems } from '@components/contact-items/contact-itesm';
import { ContactForm } from '@components/contact-form/contact-form';
import './contact.scss';

export function Contact(): ReactElement {
  return (
    <>
      <SEO
        pageTitle="تماس با ما"
        description="یادگیری آسان با وب سایت آموزشی ..."
        keywords={['وب سایت آموزشی', 'یادگیری آنلاین']}
        language={Language.FA_IR}
      />
      <BreadcrumbComponent />
      <section className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-title">
                <p className="sub-title">با ما در تماس باشید</p>
              </div>
              <ContactItems />
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
