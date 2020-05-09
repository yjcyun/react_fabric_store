import React from 'react';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../context';
import {Link} from 'react-router-dom';

const Cart = () => {
  return (
    <section className="py-5">
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length === 0) {
            return (
              <>
                <h5 className="text-center">Your shopping cart is currently empty.</h5>
                <h5 className="text-center">Continue browsing <Link to="/shop" style={{color:'var(--mainColor)'}}>here</Link>.</h5>
              </>
            )
          } else {
            return (
              <>
                <CartColumns />
                <CartList />
                <hr className="container"/>
                <CartTotals />
              </>
            )
          }
        }}
      </ProductConsumer>

    </section>
  );
}


export default Cart;
