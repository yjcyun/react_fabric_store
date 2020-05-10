import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/HomePage/AboutSection';
import Banner from '../components/HomePage/Banner';
import Featured from '../components/HomePage/Featured';
import News from '../components/News';
import stayConnected from '../images/stayConnected.jpg';
import storeImg from '../images/storeBcg.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Hero title="release your creativity">
        <Link to='/shop' className="main-link" style={{ margin: '1.5rem' }}>shop now</Link>
      </Hero>
      <AboutSection />
      <Featured />


      <Banner
        title="visit our store"
        subtitle="1234 Bloor Street E, Toronto, ON"
        message="We are temporarily closed due to COVID-19. Stay tuned for updates!"
        img={storeImg}>
        
      </Banner>
      <News />
      <Banner
        title="stay connected"
        message="Be the first to be notified for things like new products, workshops, lorem ipsum dolor sit amet."
        img={stayConnected}
        imgWidth="60%"
        order="true"
        className="stay-connected"
      >
        <form className="">
          <div className="form-group">
            <input type="text" placeholder="EMAIL ADDRESS" />
          </div>
          <button type="submit" className="main-link submit-btn">submit</button>
        </form>
      </Banner>
    </>
  );
}


export default HomePage
