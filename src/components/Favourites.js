import React from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

const Favourites = () => {
  return (
    <section className="py-5 my-5">
      <div className="container">
        <Title title="customer favourites" />
        <div className="row mt-5">
          <ProductConsumer>
            {value => {
              const { favouriteProducts } = value;
              return (
                favouriteProducts.map(item => (
                  <Product key={item.id} product={item} />
                ))
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
}

export default Favourites;
