/* eslint-disable max-len */
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlayCircle, faCertificate } from '@fortawesome/free-solid-svg-icons';
import instructorAvatar from '@assets/img/instructor/1.png';
import './course-instructor.scss';

export function CourseInstructor():ReactElement {
  return (
    <div className="course-instructor box">
      <h3 className="mb-3">مدرس</h3>
      <div className="instructor-details">
        <div className="details-wrap">
          <div className="right-box">
            <div className="img-box">
              <img src={instructorAvatar} alt="مدرس دوره" />
            </div>
          </div>
          <div className="left-box">
            <h4>
              مهدی حسن زاده
              <span> (Front-end Developer)</span>
            </h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faStar} />
                4.5
              </li>
              <li>
                <FontAwesomeIcon icon={faPlayCircle} />
                10 دوره
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} />
                1000
              </li>
            </ul>
          </div>
        </div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
    </div>
  );
}
