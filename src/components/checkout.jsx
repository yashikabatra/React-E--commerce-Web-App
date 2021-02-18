import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import '../styles/checkout.css'
import { Card } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";




class Checkout extends Component {
    state = {  }
    render() { 
        return ( 
<Row>
    <Col span={15}>
    <Card className="shipping_card">
    <h1 className="heading_one">SHIPPING INFORMATION</h1>
    <form className="form_css">
        <h5>First Name</h5>
        <input type="text" class="form-control" placeholder="First Name"></input>
        <h5>Last Name</h5>
        <input type="text" class="form-control" placeholder="Last Name"></input>
        <h5>Address</h5>
        <input type="text" class="form-control" placeholder="Address"></input>
        <h5>City</h5>
        <input type="text" class="form-control" placeholder="City"></input>
        <h5>State</h5>
        <input type="text" class="form-control" placeholder="State"></input>
        <h5>Phone Number</h5>
        <input type="text" class="form-control" placeholder="Phone Number"></input>
        <h5>Email Address</h5>
        <input type="text" class="form-control" placeholder="Email Adress"></input>
    </form>
    <Link to="/paymentpage">
    <button class="btn btn-primary shipping_btn">CONTINUE TO PAYMENT INFORMATION</button>
    </Link>
    </Card>
    </Col>
    <Col span={9}>
       <Card className="amt_card">
           <Row>
               <Col>
           <img src={this.props.checkout.picture}></img>
           </Col>
           <Col>
           <p className="label">{this.props.checkout.label}</p>
           </Col>
           <Col>
           <h6 className="price_checkout">{this.props.checkout.price}</h6>
           <p className="quantity_css">{this.props.checkout.quantity}</p>
           </Col>
           </Row>
           <hr></hr>
           <Row>
               <Col>
               <h6>SUBTOTAL</h6> 

               </Col>
               <Col>
           <h6 className="subtotal_css"> {this.props.checkout.subtotal}</h6>
           </Col>
           <Col>
           <h6>SHIPPING</h6>
           </Col>
           <Col>
           <h6 className="shipping_css">{this.props.checkout.shipping}</h6>
           </Col>
           </Row>
           <hr></hr>
           <Row>
               <Col>
               <h6>TOTAL AMOUNT</h6> 

               </Col>
               <Col>
           <h6 className="totalamt_css"> {this.props.checkout.total_amount}</h6>
           </Col>
           </Row>
       </Card>
    </Col>
</Row>
        );
    }
}
 
export default Checkout;