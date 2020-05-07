import React from 'react';
import {ProductConsumer} from '../context';

const HomePage = () => {
  return (
    <>
    <ProductConsumer>
      {value=> {
        return <h1>hello from homepage</h1>
      }}
    </ProductConsumer>
    </>
  )
}

export default HomePage
