import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

const Sidebar = () => {
  return (
    <ProductConsumer>
      {value => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map(item =>
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="sidebar-link"
                    onClick={handleSidebar}>
                    {item.text}
                  </Link>
                </li>
              )}
            </ul>
            <hr />
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  background-color: var(--lightOrange);
  position:fixed;
  top: 62px;
  left: 0;
  width: 50%;
  height:100%;
  font-weight: bold;
  font-family:'Unica One', sans-serif;
  transition: var(--mainTransition);
  z-index:1;
  transform: ${props => (
    props.show ? 'translateX(0)' : 'translateX(-100%)'
  )};

  hr{
    display:none;
  }

  ul{
    list-style-type:none;
    padding: 0 !important;
    margin-top: 1rem;
  }

  .sidebar-link{
    display:block;
    font-size: 1.1rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    transition: var(--mainTransition);
  }

  .sidebar-link:hover{
    color: var(--mainColor);
    text-decoration:none;
  }

  @media (min-width: 768px) {
    top: 64px;
    background-color: white;
    left:50%;
    transform: translateX(-50%);
    margin: auto;
    width: 100%;
    height: auto;
    text-align: center;

    hr{
      display:block;
      margin:0;
      margin-top:1rem;
    }

    ul{
      margin:0;
    }

    li{
      display:inline-block;
    }
    
    .sidebar-link{
      font-size: 0.8rem;
      padding: 0 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
  }
}
`;

export default Sidebar