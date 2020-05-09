import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import logo2 from '../images/logo2.svg';
import { FiMenu,FiShoppingCart} from 'react-icons/fi';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar } = value
        return (
          <NavbarWrapper>
            <div className="nav-center">
              <FiMenu className="nav-icon bars" onClick={handleSidebar} />
              <Link to='/' className="dark-link">
                <img src={logo} alt="company logo" />
                <span className="text-title"> THREAD & NEEDLE </span>
                <img src={logo2} alt="company logo" />
              </Link>

              <div className="nav-cart">
                <Link to="/cart">
                  <FiShoppingCart className="nav-icon" />
                  <div className="cart-items">{cartItems}</div>
                </Link>
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
  padding: 1.3rem 1.5rem;
  background-color: #fff;
  z-index:1;
  .nav-center{
    display:flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon{
    font-size: 1.7rem;
    color: var(--mainBlack);
    cursor: pointer
  }
  .bars:hover{
    color:var(--mainColor);
  }
  .nav-cart{
    position:relative;
  }
  .cart-items{
    background: var(--mainColor);
    color: white;
    position:absolute;
    font-size: 0.85rem;
    top:-8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
  @media (min-width: 768px) {
    .nav-icon.bars{
      visibility:hidden;
    }
  }
`;

export default Navbar;
