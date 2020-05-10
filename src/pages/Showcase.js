import React from 'react';
import Title from '../components/Title';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';


const Showcase = () => {
  return (
    <ProductConsumer>
      {value => {
        const { showcase } = value;
        return (
          <div className="page-margin mt-5 pt-5">
            <Title title="Showcase" />
            <ShowcaseWrapper>
              {showcase.map(item => {
                return (
                  <div className=""
                    key={item.id}>
                    <img
                      src={item.image}
                      alt="showcase"
                      className="img-fluid"
                    />
                  </div>
                )
              })}
            </ShowcaseWrapper>

            <div className="page-margin pb-5" style={{ background: 'var(--lightOrange)', padding: '7rem 0' }}>
              <Title title="want to showcase your work?" />
              <div className="container mt-5">
                <div className="row">
                  <div className="col-10 col-md-6 mx-auto text-center">
                    <p className="">If you would like to show off your wonderful sewing skills using one of our fabrics, send us a message with a photo of your work!</p>
                    <Link
                      to='/contact'
                      className="main-link"
                      style={{ marginTop: '2rem' }}>shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}

const ShowcaseWrapper = styled.div`
 display:grid;
  grid-template-columns:repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap:1rem;
  grid-row-gap: 1rem;
  margin: 5rem 3rem;

  img{
    object-fit:fill;
    height:auto;
    width:100%;
  }
`;
export default Showcase
