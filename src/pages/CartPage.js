import React from 'react';
import Title from '../components/Title';
import CartSection from '../components/CartPage/Cart';

const CartPage = () => {
  return (
    <div className="page-margin">
    <Title title="shopping cart" />
      <CartSection />
    </div>
  )
}

export default CartPage;
