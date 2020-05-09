import React from 'react';
import Title from '../components/Title';
import News from '../components/News';
import aboutBcg from '../images/aboutBcg.jpg';

const AboutPage = () => {
  return (
    <div className="page-margin mb-5">
      <section className="intro pb-5 my-5">
        <Title title="about thread & needle" />
        <div className="container pt-5">
          <div className="row">
            <div className="img-container col-11 col-lg-6 mx-auto mb-5">
              <img src={aboutBcg} alt="store" className="img-fluid" />
            </div>
            <div className="text-container col-11 col-lg-6 mx-auto text-center">
              <p>Welcome to Thread and Needle! We are so happy you have discovered us!<br /><br />
            Lorem ipsum dolor we first firsted back sit amet consectetur adipisicing elit. Aperiam, provident quaerat! Voluptatum quasi consequuntur rerum, deserunt, sequi accusamus unde aperiam itaque ea quibusdam minus quam dignissimos numquam veritatis. Quaerat ipsam illum non, ratione eveniet magni aut sequi enim voluptatum quas quibusdam minus cupiditate expedita suscipit corporis accusamus ea neque in.
            </p>
              <p className="pt-5">Happy Sewing,</p>
              <p className="pt-3">Thread & Needle</p>
            </div>
          </div>
        </div>
      </section>

      <News/>

      <div className="clients page-margin my-5 pb-5">
        <Title title="clients include" />
        <div className="container mt-5">
          <div className="row">
            <div className="col-7 col-md-4 text-capitalize text-center mx-auto">
              <p className="mb-0">jane eyre<br />coco chanel<br />marc jacobs<br />michael kors<br />vera wang<br />givenchy<br />
              </p>
            </div>
            <div className="col-7 col-md-4 text-capitalize text-center mx-auto pb-0">
              <p className="mb-0">jane eyre<br />coco chanel<br />marc jacobs<br />michael kors<br />vera wang<br />givenchy<br />
              </p>
            </div>
            <div className="col-7 col-md-4 text-capitalize text-center mx-auto">
              <p>jane eyre<br />coco chanel<br />marc jacobs<br />michael kors<br />vera wang<br />givenchy<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
