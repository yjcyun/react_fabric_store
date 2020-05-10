import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';

const ProductFilter = () => {
  return (
    <ProductConsumer>
      {value => {
        const { search, company, substrate, storeProducts, handleChange } = value;

        const getUnique = (items, value) => [...new Set(items.map(item => item[value]))];
        let companies = getUnique(storeProducts, 'company');
        companies = ['all', ...companies];

        let substrates = getUnique(storeProducts, 'substrate');
        substrates = ['all', ...substrates];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text search */}
                <div>
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/* end of text search */}

                {/* company */}
                <div>
                  <label htmlFor="company">manufacturer</label>
                  <select
                    name="company"
                    id="company"
                    className="filter-item"
                    value={company}
                    onChange={handleChange}>
                    {companies.map((company, index) => {
                      return (
                        <option
                          key={index}
                          value={company}>{company}</option>
                      );
                    })}
                  </select>
                </div>
                {/* end of company */}

                {/* substrate */}
                <div>
                  <label htmlFor="substrate">substrate</label>
                  <select
                    name="substrate"
                    id="substrate"
                    className="filter-item"
                    value={substrate}
                    onChange={handleChange}>
                    {substrates.map((substrate, index) => {
                      return (
                        <option
                          key={index}
                          value={substrate}>{substrate}</option>
                      );
                    })}
                  </select>
                </div>
                {/* end of substrate */}

              </FilterWrapper>
            </div>
          </div>
        )

      }}
    </ProductConsumer>
  )
}

const FilterWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap:2rem;
  grid-row-gap: 1rem;

  label{
    font-weight: bold;
    text-transform:capitalize;
  }

  .filter-item{
    display:block;
    width:100%;
    background: transparent;
    border: 1px solid var(--mainBlack);
    padding: 0.3rem;
  }
`;

export default ProductFilter
