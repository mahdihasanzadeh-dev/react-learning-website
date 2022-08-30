import { Button } from '@components/button/button';
import instrucorImg from '@assets/img/bai-img.png';
import './become-instructor.scss';

export function BecomeInstructor() {
  return (
    <section className="bai-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="box">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="circular-img">
                    <div className="circular-img__inner">
                      <div className="circular-img__circle" />
                      <img src={instrucorImg} alt="become instructor" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section-title">
                    <p className="sub-title">مدرس شوید</p>
                    <h2 className="title">اگر علاقه مند به تولید محتوا هستید، با ما در ارتباط باشید</h2>
                  </div>
                  <div className="col-12 mt-3 d-flex justify-content-center">
                    <Button
                      text="ثبت درخواست"
                      onClick={() => console.log('all course')}
                      backgroundColor="main"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
