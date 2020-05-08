import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

const Product = ({ product }) => {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;
        return (
          <ProductWrapper className="col-6 mx-auto col-sm-3 my-3">
            <div className="card">
              <div className="img-container">
                <Link
                  to={`/shop/${product.id}`}
                  onClick={() => setSingleProduct(product.id)}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="product"
                    style={{ maxHeight: '250px' }} />
                </Link>
              </div>
              <div className="text-center text-capitalize mt-2">
                <Link to={`/shop/${product.id}`} className="link-title">
                  <p className="mb-0">{product.title}</p>
                </Link>
                <p className="mb-0 font-weight-bold" onClick={() => addToCart(product.id)}>${product.price}.00 / yard</p>
              </div>
            </div>
          </ProductWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const ProductWrapper = styled.div`
  .card{
    border:none;
    padding: 0 !important;
  }
`;
export default Product
