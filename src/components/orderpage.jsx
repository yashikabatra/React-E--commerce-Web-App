import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Card } from "antd";
import "../styles/orderpage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";


class OrderPage extends Component {
  state = {};
  render() {
    return (
        
            <Row>
            <Col span={15}>

        {this.props.orderpage.orderpage_items.map((c)=>(
              <Card className='card_one'>
                <Row>
                  <Col>
                    <img src={c.picture}></img>
                  </Col>
                  <Col className="css_for_brand">
                    <h1>{c.brand}</h1>
                    <h6>{c.label}</h6>
    
                    <div>
                      <select>
                        {c.size.map((size) => (
                          <option>{size}</option>
                        ))}
                      </select>
                    </div>
                    <div className="qty_css">
                      <select>
                        {c.qty.map((qty) => (
                          <option>{qty}</option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  <Col className="css_for_price">
                    <h1>{c.price}</h1>
                  </Col>
                </Row>
              </Card>
              
        ))
                        }
                        </Col>
 

 
 
<Col span={9}>

   
    <Card className='card_two'>
      <h5>Total MRP</h5>
      <p>{this.props.orderpage.orderpage_prices.totalMrp}</p>
      <h5>Discount on MRP</h5>
      <p>{this.props.orderpage.orderpage_prices.discountonmrp}</p>
      <h5>Convenience Fees</h5>
      <p>{this.props.orderpage.orderpage_prices.Convenience_fees}</p>
      <hr></hr>
      <h5>Total Amount</h5>
      <p>{this.props.orderpage.orderpage_prices.totalamount}</p>
      <Link to="/checkout">
      <button class='btn btn-primary btn-lg buttonone'>
        PLACE ORDER
      </button>
      </Link>
    </Card>
 


</Col>
</Row>






    );
  }
}

export default OrderPage;
