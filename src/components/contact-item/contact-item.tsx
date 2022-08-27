import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IContactItemProperties } from './contact-item-interface';
import './contact-item.scss';

export function ContactItem({ icon, title, description }: IContactItemProperties):ReactElement {
  return (
    <div className="contact-item">
      <div className="icon-box">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
