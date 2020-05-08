import React from 'react'
import Product from '../Product';
import Title from '../Title';
import { ProductConsumer } from '../../context';


const Featured = () => {
  return (
    <section className="py-5 my-5">
      <div className="container">
        <Title title="shop featured items" />
        <div className="row mt-5">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;
              return (
                featuredProducts.map(item => (
                  <Product key={item.id} product={item} />
                ))
              );
            }}
          </ProductConsumer>
        </div>

      </div>
    </section>
  )
}

export default Featured
