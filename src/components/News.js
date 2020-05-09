import React from 'react';
import NewsArticle from './NewsArticle';
import Title from './Title';
import { ProductConsumer } from '../context';

const News = () => {
  return (
    <ProductConsumer>
      {value => {
        return (
          <div className="container-fluid page-margin pt-5" style={{ backgroundColor: 'var(--lightOrange)' }} >
            <div className="container">
              <Title title="latest news" />
              <div className="row">
                {value.news.map(item =>
                  <div
                    key={item.id}
                    className="col-11 col-lg-4 mx-auto">
                    <NewsArticle
                      item={item}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default News
