import { Button } from '@components/button/button';
import { Input } from '@components/input/input';
import type { ReactElement } from 'react';
import './contact-form.scss';

export function ContactForm():ReactElement {
  return (
    <div className="contact-form box">
      <h2 className="form-title">پیام بگذارید</h2>
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
          type="text"
          placeholder="شماره تماس"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <Input
          type="textarea"
          placeholder="پیام"
          className="form-control"
        />
      </div>
      <Button
        text="ارسال پیام"
        onClick={() => console.log('login')}
        backgroundColor="main"
      />
    </div>
  );
}
