import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  return (
    <CartTotalsWrapper>
      <div className="container">
        <div className="row">
          <ProductConsumer>
            {value => {
              const { cartSubtotal, cartTotal, cartTax } = value;
              return (
                <>
                  <div className="col-lg-4">
                    <label htmlFor="specialInstructions">Special instructions for seller</label>
                    <textarea name="note" id="specialInstructions" className="w-100 d-block mb-3" style={{ minHeight: "100px" }}></textarea>
                    <Link to="/shop" className="link-title text-uppercase">{'< '}continue shopping</Link>
                  </div>
                  <div className="col-lg-8 text-right text-uppercase">
                    <h5>subtotal ${cartSubtotal.toFixed(2)}</h5>
                    <h5>tax ${cartTax}</h5>
                    <h5>total ${cartTotal}</h5>
                  </div>
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </CartTotalsWrapper>
  )
}

const CartTotalsWrapper = styled.div`
  .link-title{
    color: var(--mainColor);
    font-weight: 600;
  }
  .link-title:hover{
    color: var(--mainBlack);
  }
  h5{
    font-size:1.2rem;
    letter-spacing: var(--letterSpacing);
  }
`;

export default CartTotals


