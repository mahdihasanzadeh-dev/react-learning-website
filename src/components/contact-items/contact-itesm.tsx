import type { ReactElement } from 'react';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ContactItem } from '@components/contact-item/contact-item';

export function ContactItems(): ReactElement {
  return (
    <div className="contact-items">
      <ContactItem
        icon={faMapMarkerAlt}
        title="آدرس"
        description="ایران، خراسان جنوبی، فردوس"
      />
      <ContactItem
        icon={faPhone}
        title="تلفن"
        description="09123456789"
      />
      <ContactItem
        icon={faEnvelope}
        title="ایمیل"
        description="info@gmail.com"
      />
    </div>
  );
}
