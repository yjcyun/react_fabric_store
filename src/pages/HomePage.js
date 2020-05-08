import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import AboutSection from '../components/HomePage/AboutSection';
import Banner from '../components/HomePage/Banner';
import storeImg from '../images/storeBcg.jpg';
import stayConnected from '../images/stayConnected.jpg';
import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <>
      <Hero title="release your creativity ">
        <Link to='/shop' className="main-link" style={{ margin: '1.5rem' }}>shop now</Link>
      </Hero>
      <AboutSection />
      <Banner
        title="visit our store"
        subtitle="1234 Bloor Street E, Toronto, ON"
        message="We are temporarily closed due to COVID-19. Stay tuned for updates!"
        img={storeImg}>
      </Banner>
      <Banner
        title="stay connected"
        message="Be the first to be notified for things like new products, workshops, lorem ipsum dolor sit amet."
        img={stayConnected}
        imgWidth="60%"
        order="true"
        className="stay-connected"
      >
        <HomeWrapper>
          <form className="">
            <div className="form-group">
              <input type="text" placeholder="EMAIL ADDRESS" />
            </div>
            <button type="submit" className="main-link reverse-link submit-btn">submit</button>
          </form>
        </HomeWrapper>
      </Banner>
    </>
  )
}

const HomeWrapper = styled.div`
  input{
    display:block;
    width: 20rem;
    padding: 0.5rem;
    border: 1px solid var(--mainColor);
  }

  .submit-btn{
    width: 20rem;
  }

`;
export default HomePage
