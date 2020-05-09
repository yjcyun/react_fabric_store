import React from 'react';
import styled from 'styled-components';
import Title from '../Title';

const Banner = ({ img, children, subtitle, title, message, imgWidth, order }) => {
  return (
    <BannerWrapper order={order}>
      <div className="container">
        <div className="row">
          <div className='col-md-5 d-flex flex-column justify-content-center align-items-center text-container'>
            <div>
              <div className="text-center">
                <br />
                <Title title={title} fontsize="3rem" />
                <h5 className="my-5  mx-auto">{subtitle}</h5>
                <p>{message}</p>
              </div>
            </div>
            {children}
          </div>
          <div className="col-md-7 mt-4 img-container text-center">
            <div className="banner-img">
              <img src={img} width={imgWidth} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.section`
  margin: 4rem auto;

  p{
    font-size: 0.9rem;
  }
  .stay-connected{
    flex-direction: column-reverse;
  }
  .img-container{
    order: ${props => props.order && 1};
  }
  .text-container{
    order: ${props => props.order && 2};
  }
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

export default Banner;
