import React from 'react';
import Title from '../components/Title';
import CartSection from '../components/CartPage/Cart';

const CartPage = (props) => {
 
  return (
    <div className="page-margin my-5 pb-5">
    <Title title="shopping cart" />
      <CartSection history={props.history} />
    </div>
  )
}

export default CartPage;
