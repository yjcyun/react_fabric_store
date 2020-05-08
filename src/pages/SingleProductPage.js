import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

const SingleProductPage = () => {
  return (
    <ProductConsumer>
      {value => {
        const { singleProduct, addToCart, loading } = value;

        if (loading) {
          console.log('loading...');
          return <h1>product loading...</h1>
        }

        const { id, company, title, price, material, width, description, image } = singleProduct;

        return (
          <SingleWrapper className="page-margin">
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto text-center col-sm-8 col-md-6 my-3">
                  <img src={`../${image}`} alt="single product" className="img-fluid" />
                </div>

                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                  <span className="text-capitalize">{company}</span>
                  <h5 className="my-3 text-uppercase product-name">{title}</h5>
                  <h5 className="text-uppercase font-weight-bold">${price} per yard</h5>
                  <p className="my-4">{description}</p>
                  <p>{material}</p>
                  <p>{width}</p>
                  <div className="col-6 d-inline-block px-0">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button">-</button>
                      </div>
                      <input type="text" className="form-control" placeholder="0.25yds" step="0.25" min="0.25"/>
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary">+</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-inline-block">
                    <button className="btn input-group btn-secondary text-uppercase text-center" onClick={() => addToCart(id)}>add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </SingleWrapper>
        )
      }}
    </ProductConsumer>
  );
}

const SingleWrapper = styled.section`
font-family: 'Montserrat', sans-serif;
span{
  color: #AF729B;
}
.btn{
  border-radius:0;
}
`;

export default SingleProductPage;
