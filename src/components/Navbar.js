import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import logo2 from '../images/logo2.svg';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import { ProductConsumer } from '../context';

const Navbar = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart } = value
        return (
          <NavbarWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <div>
                <img src={logo} alt="company logo" />
                <span className="font-weight-bold"> THREAD & NEEDLE </span>
                <img src={logo2} alt="company logo" />
              </div>
      
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavbarWrapper>
        )
      }}
    </ProductConsumer>
  );
}

const NavbarWrapper = styled.nav`
  position:-webkit-sticky;
  position:sticky;
  top:0;
  width: 100%;
  padding: 1rem 1.5rem;
  .nav-center{
    display:flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon{
    font-size: 1.5rem;
    cursor: pointer
  }
  .nav-cart{
    position:relative;
  }
  .cart-items{
    background: #EFA66F;
    color: white;
    position:absolute;
    font-size: 0.85rem;
    top:-8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;

export default Navbar;
