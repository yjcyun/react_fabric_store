import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const CartItem = ({ cartItem, increment, decrement, removeItem }) => {
  const { id, company, count, title, price, image } = cartItem;
  return (
    <CartItemWrapper className="row">
      {/* item */}
      <div className="col-11 col-lg-6 pb-4 d-flex cart-box">
        <Link
          to='/shop/{id}'>
          <img
            src={image}
            alt="product"
            width="150"
            className="img-fluid" />
        </Link>
        <div className="pl-3">
          <div>
            <Link
              to="/shop/{id}" className="dark-link-hover">
              <span className="text-uppercase">{title}</span>
            </Link><br />
            <span className="text-capitalize">by {company}</span><br /><br />
            <span
              onClick={() => removeItem(id)}
              className="text-uppercase remove-text">
              remove
            </span>
          </div>
          <div className="d-lg-none">
            <span className="unit-price">${price.toFixed(2)}</span><br />

            <div className="count-control">
              <FiChevronDown className="cart-icon text-dark" onClick={() => decrement(id)} />
              <span className="mx-3">{count}</span>
              <FiChevronUp className="cart-icon text-dark" onClick={() => increment(id)} />
            </div>
            <span className="unit-subtotal font-weight-bold">${(price * count).toFixed(2)}</span>
          </div>

          <IoMdClose
            className="cart-icon remove-btn d-lg-none"
            onClick={() => removeItem(id)}
          />

        </div>
      </div>


      {/* price */}
      <div className="col-lg-2 small-display text-right">
        <span>${price.toFixed(2)}</span>
      </div>

      {/* amount */}
      <div className="col-lg-2 small-display">
        <div className="d-flex align-items-center justify-content-end">
          <FiChevronDown className="cart-icon text-dark" onClick={() => decrement(id)} />
          <span className="mx-3">{count}</span>
          <FiChevronUp className="cart-icon text-dark" onClick={() => increment(id)} />
        </div>
      </div>

      {/* subtotal */}
      <div className="col-lg-2 small-display text-right">
        <span>${(price * count).toFixed(2)}</span>
      </div>


    </CartItemWrapper>
  )
}

const CartItemWrapper = styled.div`
  font-size: 0.9rem;

  .unit-price{
    color: var(--mainColor); 
  }

  .unit-subtotal{
    font-size: 1rem;
  }
  .remove-text{
    font-size:0.8rem;
    cursor:pointer;
    letter-spacing:var(--letterSpacing);
  }
  .remove-text:hover{
    text-decoration:underline;
    color:var(--mainColor);
  }

  @media (max-width:992px){
    .small-display, .remove-text{
      display:none;
    }
  }
`
export default CartItem
