import { useId } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { breadcrumbHelper } from './breadcrumb-helper';
import type { IBredcrumbInterface } from './breadcrumb-interface';
import './breadcrumb.scss';

export function BreadcrumbComponent({ title }: IBredcrumbInterface) {
  const { pathname } = useLocation();
  const helper = breadcrumbHelper();
  const pathnames = pathname.split('/').filter(Boolean);

  return (
    <div className="breadcrumb-nav">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">
              صفحه اصلی
            </Link>
          </BreadcrumbItem>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <BreadcrumbItem active key={useId()}>
                { (title != null) ? title : helper.translate(name)}
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={useId()}>
                <Link to={routeTo}>
                  {helper.translate(name)}
                </Link>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </div>
    </div>
  );
}
