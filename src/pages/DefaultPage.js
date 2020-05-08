import React from 'react';
import defaultBcg from '../images/404.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const DefaultPage = () => {
  return (
    <DefaultWrapper>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 col-md-6 mx-auto mb-4">
            <img src={defaultBcg} alt="" className="img-fluid"/>
          </div>
          <div className="col-10 col-md-5 mx-auto d-flex flex-column justify-content-center align-items-center text-center">
            <h4 className="text-uppercase mb-4">oops! seems like this page no longer exists.</h4>
            <p className="mb-5">Check out the latest on {' '} 
            <Link to="/" className="link-title e"><u>our homepage.</u></Link>
            </p>
            <Link to="/" className="text-uppercase link-btn">back to homepage</Link>
          </div>
        </div>
      </div>
    </DefaultWrapper>
  )
}
const DefaultWrapper=styled.div`
img{
  border-radius:1rem;
}
h4{
  letter-spacing:0.1rem;
  line-height: 1.5;
}
.link-title:hover{
  color: var(--mainColor);
}

@media(min-width: 768px){
  margin-top: 5rem;
}
`;
export default DefaultPage
