import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <div className="p-5 text-center">
        <h5 className="mx-auto mb-4">
          Thread & Needle is a fabric shop based in Toronto Ontario. They are devoted to brining their customers the best quality modern fabircs at an affordable price.
      </h5>
        <Link to="/about" className="link-btn">learn more</Link>
      </div>
    </AboutSectionWrapper>
  )
}
const AboutSectionWrapper = styled.div`
  background-color:#FFF6F8;
  h5{
    line-height:1.5;
    max-width: 40rem;
    font-weight: 600;
  }
  
`;


export default AboutSection
