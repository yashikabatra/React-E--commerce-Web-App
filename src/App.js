import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Login from './components/login'
import Signup from './components/signup'
import ProductDetail from './components/productdetail'
import getHomePage from './json/homepage'
import {getProductDetail_id, getAllProduct} from './json/allproducts'
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/homepage'
import './index.css';
import AllProducts from './components/allproducts'
import OrderPage from './components/orderpage'
import getOrderPage from './json/orderpage';
import Checkout from './components/checkout'
import getCheckout from './json/checkout';
import {Route , Switch} from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Payment_Page from './components/payment_page'


class App extends Component {
  state = { home_page: getHomePage() , all_products:getAllProduct() , order_page:getOrderPage() ,checkout:getCheckout()}
  render() { 
    return (
        <div>
       {/* <ProductDetail product_details={this.state.product_detail} ></ProductDetail>
       <HomePage homePage={this.state.home_page}> </HomePage>
       <Login></Login>
       <Signup></Signup>
       <AllProducts allProducts={this.state.all_products}></AllProducts>
       <OrderPage orderpage={this.state.order_page}></OrderPage>
  <Checkout checkout={this.state.checkout}></Checkout>   */}
<Header></Header>

  <Switch>
    <Route path="/" exact>
    <HomePage homePage={this.state.home_page}> </HomePage>
    </Route>
    <Route path="/login">
    <Login></Login>
      </Route> 
    <Route path="/signup">
    <Signup></Signup>
      </Route>
      <Route path="/paymentpage">
        <Payment_Page></Payment_Page>
      </Route>
    <Route path="/orderpage">
    <OrderPage orderpage={this.state.order_page}></OrderPage>
    </Route>
    <Route path="/allproducts">
    <AllProducts allProducts={this.state.all_products}></AllProducts>
    </Route>
    <Route path="/checkout">
  <Checkout checkout={this.state.checkout}></Checkout> 
    </Route>

    {/* Adding a pattern for product_detail with numeric digit after the product_detail/  
    React router will send this to the ProductDetail component */}

    <Route path="/product_detail/:product_id" component={ProductDetail}> 
    </Route>
  </Switch>
  </div>
      );
  }
}

export default App;
