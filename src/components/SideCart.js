import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { IoMdClose } from 'react-icons/io';

const SideCart = () => {
  return (

    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartSubtotal, setSingleProduct } = value;
        return (
          <CartWrapper
            onClick={closeCart}
            show={cartOpen}>
          
                <div>
                  <h6 className="text-uppercase text-center py-3 cart-heading text-white">cart summary</h6>
                  <IoMdClose className="remove-btn" onClick={closeCart} />
                </div>

                <ul className="px-3">
                  {cart.map(item => {
                    return (
                      <li key={item.id} className="cart-item my-3 d-flex">
                        <Link
                          to="/shop/{item.id}"
                          onClick={() => { setSingleProduct(item.id); closeCart() }}>
                          <img width="70" height="70" src={item.image} alt="product" />
                        </Link>
                        <div className="ml-3">
                          <Link
                            to="/shop/{item.id}"
                            className="dark-link-hover"
                            onClick={() => { setSingleProduct(item.id); closeCart() }}>
                            <h6 className="text-capitalize">{item.title}</h6>
                          </Link>
                          <h6 className="text-uppercase">${item.price.toFixed(2)} per yard</h6>
                          <h6 className="text-uppercase">qty : {item.count}</h6>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <div className="d-flex justify-content-between mx-3 mb-3">
                  <h5 className="text-capitalize font-weight-bold">subtotal</h5>
                  <h5 className="font-weight-bold">$ {cartSubtotal.toFixed(2)}</h5>
                </div>
                <div className="text-center mt-5 mx-3">
                  <Link to="/cart" className="main-link w-100">view cart</Link>
                </div>
                <div className="text-center my-1 mx-3">
                  <Link to="/shop" className="main-link w-100 px-0">continue shopping</Link>
                </div>
          
          </CartWrapper>
        );
      }
      }
    </ProductConsumer>

  );
}

const CartWrapper = styled.div`

position:fixed;
top: 60px;
right: 0;
width: 70%;
height:100%;
overflow: auto;
z-index:99;
background: var(--lightOrange);
transition: var(--mainTransition);
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
font-family: 'Montserrat', sans-serif;


@media (min-width:768px){
    width: 20rem;
  }


.cart-heading{
  background-color: var(--mainColor);
  letter-spacing: var(--letterSpacing);
}
.cart-item h6{
  font-size:0.9rem;
}

`;

export default SideCart