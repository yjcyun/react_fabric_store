import React from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container-fluid pt-5 px-5">
              <div className="row mb-5">
                <div className="col-md-3">
                  <p className="text-uppercase">come visit us</p>
                  <p>1234 Bloor Street E.
                  <br />Toronto, ON</p>
                  <p>Weekdays 10am-5pm
                  <br />Weekends 12-5pm</p>
                </div>
                <div className="col-md-2 footer-links">
                  <Link to="/shop" className="text-white text-uppercase links">shop</Link>
                  <Link to="/shop" className="text-white text-uppercase links">showcase</Link>
                  <Link to="/shop" className="text-white text-uppercase links">classes</Link>
                </div>
                <div className="col-md-2">
                  <Link to="/shop" className="text-white text-uppercase links">visit us</Link>
                  <Link to="/shop" className="text-white text-uppercase links">about</Link>
                  <Link to="/shop" className="text-white text-uppercase links">contact</Link>
                </div>
                <div className="col-md-3 footer-signup">
                  <h5 className="text-uppercase">stay up to date!</h5>
                  <p>Sign up to be first to be notified for any updates!</p>
                </div>
                <div className="col-md-2">
                  {value.social.map(item => (
                    <a href={item.path} key={item.id}>{item.icon}</a>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="col-md-4  text-uppercase bottom">
                  <p>&copy;{new Date().getFullYear()}{' '}thread & needle</p>
                </div>
                <div className="col-md-4">
                  <div className="d-flex justify-content-center">
                    <p className="px-2"><Link to="/" className="text-white">privacy policy</Link></p>
                    <p className="px-2"><Link to="/" className="text-white">return policy</Link></p>
                    <p className="px-2"><Link to="/" className="text-white">terms & conditions</Link></p>
                  </div>
                </div>
                <div className="col-md-4 text-right">
                  <p>site by christina yun</p>
                </div>

              </div>
            </div>
          </FooterWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const FooterWrapper = styled.footer`
background-color: var(--mainBlack);
color: white;
font-family: 'Montserrat';
font-size: 0.7rem;

.footer-links p:hover {
  color: var(--mainColor) !important;
}
.links{
  color: #fff;
  display: block;
  margin-bottom:0.5rem;
  text-decoration:none;
  transition: var(--mainTransition);
}
.icon{
  color: white;
  margin: 0 0.5rem;
  font-size: 1.2rem;
}
@media (max-width: 768px){
  text-align:center!important;
  .text-right{
    text-align:center!important;
  } 
  .footer-links{
    margin-top: 2rem;
  }
  .footer-signup{
    margin:2rem 0;
  }

  
}


`

export default Footer
