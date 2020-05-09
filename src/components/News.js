import React from 'react';
import { ProductConsumer } from '../context';

const News = () => {
  return (
    <ProductConsumer>
      {value => {
        return (
          <h1>hello</h1>
        );
      }}
    </ProductConsumer>
  );
}

export default News
