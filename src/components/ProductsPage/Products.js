import React from 'react';
import Title from '../Title';
import Product from '../Product';
import ProductFilter from './ProductFilter';
import { ProductConsumer } from '../../context';

const Products = () => {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <section className="page-margin">
            <div className="container">

              {/* title */}
              <Title title="products" />

              {/* filter section */}
              <ProductFilter />

              {/* total count */}
              {/* <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="">total products : {filteredProducts.lengh}</h6>
                </div>
              </div> */}

              {/* products */}
              <div className="row py-5">
                {filteredProducts.length === 0
                  ? (
                    <div className="col text-center">
                      Sorry, no items matched your search.
                    </div>
                  )
                  : filteredProducts.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}

export default Products;
