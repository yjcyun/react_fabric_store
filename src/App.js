import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import VisitPage from './pages/VisitPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/visit" component={VisitPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/products/:id" component={SingleProductPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
