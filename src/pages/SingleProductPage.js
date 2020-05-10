import React from 'react';
import styled from 'styled-components';
import Favourites from '../components/Favourites';
import { ProductConsumer } from '../context';

const SingleProductPage = () => {
  return (
    <ProductConsumer>
      {value => {
        const { singleProduct, addToCart, loading } = value;

        if (loading) {
          return <h1>product loading...</h1>
        }

        const { id, company, title, price, material, width, description, image } = singleProduct;

        return (
          <SingleWrapper className="page-margin">
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto text-center col-sm-8 col-md-6 my-3">
                  <img src={image} alt="single product" className="img-fluid" />
                </div>

                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                  <span className="text-capitalize">{company}</span>
                  <h5 className="my-3 text-uppercase product-name">{title}</h5>
                  <h5 className="text-uppercase font-weight-bold">${price} per yard</h5>
                  <p className="my-4">{description}</p>
                  <p>{material}</p>
                  <p>{width}</p>
               
                  <div className="col-8 d-inline-block px-0">
                    <button className="main-link text-uppercase text-center " onClick={() => addToCart(id)}>add to cart</button>
                  </div>
                </div>
              </div>
            </div>
            <Favourites />
          </SingleWrapper>
        );
      }}
    </ProductConsumer>
    
  );
}

const SingleWrapper = styled.section`
font-family: 'Montserrat', sans-serif;
span{
  color: var(--purple);
}

`;

export default SingleProductPage;
