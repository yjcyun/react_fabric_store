import React from 'react';
import Banner from '../components/HomePage/Banner';
import Title from '../components/Title';
import Favourites from '../components/Favourites';
import sewingImg from '../images/visitBcg.jpg';
import mapImg from '../images/map.jpg';

const VisitPage = () => {
  return (
    <div className="page-margin my-5">
      <Title title="Visit our shop" />
      <Banner
        subtitle="Our sewing classes are back! He was an expert but not in a discipline that anyone could fully appreciate."
        title="sewing 101 workshop"
        message="She tried not to judge him. His ratty clothes and unkempt hair made him look homeless. Was he really the next Einstein as she had been told? On the off chance it was true, she continued to try not to judge him."
        img={sewingImg} />

      <div style={{backgroundColor:'var(--lightOrange)'}}>
        <Banner
          title="visit us"
          subtitle="1234 Bloor Street Toronto ON"
          message="We are temporaily closed. Stay tuned for updates."
          img={mapImg}
          order="true"
        >
          <br />
          <span>weekdays 10am-5pm</span>
          <span>weekends 12am-5pm</span>
        </Banner>
      </div>
      <Favourites />

    </div>
  )
}

export default VisitPage
