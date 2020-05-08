import React from 'react';
import styled from 'styled-components';

const Title = ({ title, fontsize }) => {
  return (
    <TitleWrapper>
      <h2 className="text-uppercase text-center text-title">{title}</h2>
      <hr />
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  h2{
    letter-spacing: var(--letterSpacing);
  }
  hr{
    border: none;
    border-bottom: 3px dotted var(--mainBlack);
    width: 8rem; 
  }
`;

export default Title
