import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

const SideCart = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart } = value;
        return (
          <CartWrapper
            show={cartOpen}
            onClick={closeCart}>
            <p>cart items</p>
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
width: 100%;
height:100%;
z-index:1;
background: var(--lightOrange);
transition: var(--mainTransition);
transform: ${props=>props.show?'translateX(0)':'translateX(100%)'};
  @media (min-width:768px){
    width: 20rem;
  }
`;

export default SideCart