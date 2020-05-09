import React from 'react';
import styled from 'styled-components';
import homeBcg from '../images/homeBcg.jpg';

const Hero = ({ children, title }) => {
  return (
    <HeroWrapper>
      <div className="banner">
        <h1 className="title text-title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height: 90vh;
  color: var(--mainBlack);
  background:url(${homeBcg})center/cover no-repeat;

  .banner{
    background-color: rgba(255,255,255,0.9);
  }
  
  .title{
    padding-top:1rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 2.7rem;
    max-width: 50rem;
  }
  
  @media(max-width: 576px){
    .title{
      font-size: 2.7rem;
      padding: 1rem;
    }
  }

  @media(min-width: 768px){
    flex-direction:row;
    .title{
      padding: 0 1rem;
      font-size: 5rem;
    }
  }
`;

export default Hero
