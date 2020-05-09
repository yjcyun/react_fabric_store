import React, { Component } from 'react';
import { linkData } from './linkData';
import { socialIcons } from './socialData';
import { items } from './productData';
import {newsData} from './newsData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    social: socialIcons,
    news:newsData,
    cart: [],
    cartItems: 0,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    favouriteProducts: [],
    singleProduct: {},
    loading: true
  };

  componentDidMount() {
    this.setProducts(items);
  }

  setProducts = (products) => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image: image }
      return product;
    });

    //featured products
    let featuredProducts = storeProducts.filter(item => item.featured === true);

    //favourite product
    let favouriteProducts = storeProducts.filter(item => item.favourite === true);

    this.setState({
      storeProducts,
      featuredProducts,
      favouriteProducts,
      filteredProducts: storeProducts,
      singleProduct: this.getStorageProduct(),
      cart: this.getStorageCart(),
      loading: false
    }, () => {
      this.addTotals()
    });
  };
  // get cart from local storage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    else {
      cart = [];
    }
    return cart;
  };

  // get products from local storage
  getStorageProduct = () => {
    return localStorage.getItem('singleProduct')
      ? JSON.parse(localStorage.getItem('singleProduct'))
      : {};
  };

  // get total 
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = +subTotal.toFixed(2);
    let tax = subTotal * 0.13;
    tax = +tax.toFixed(2);
    let total = subTotal + tax;
    total = +total.toFixed(2);

    return {
      cartItems: cartItems,
      subTotal: subTotal,
      tax: tax,
      total: total
    };
  };

  // add totals
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubtotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };

  // sync storage
  syncStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  };

  // add to cart
  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total: total };
      tempCart = [...tempCart, cartItem];
    }
    else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = +tempItem.total.toFixed(2);
    }
    this.setState({
      cart: tempCart
    }, () => {
      this.addTotals()
      this.syncStorage()
      this.openCart()
    })
  };

  // set single product
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem('singleProduct', JSON.stringify(product));

    this.setState({
      singleProduct: { ...product },
      loading: false
    });
  };

  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  //cart functionality
  increment = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = +cartItem.total.toFixed(2);
    this.setState({
      cart: [...tempCart],
    }, () => {
      this.syncStorage()
      this.addTotals()
    });
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count--;
    if (cartItem.count === 0) {
      this.removeItem(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = +cartItem.total.toFixed(2);

      this.setState({
        cart: [...tempCart]
      }, () => {
        this.syncStorage()
        this.addTotals()
      });
    }
  };

  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState({
      cart: [...tempCart]
    }, () => {
      this.syncStorage()
      this.addTotals()
    });
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleSidebar: this.handleSidebar,
        handleCart: this.handleCart,
        closeCart: this.closeCart,
        openCart: this.closeCart,
        addToCart: this.addToCart,
        setSingleProduct: this.setSingleProduct,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

