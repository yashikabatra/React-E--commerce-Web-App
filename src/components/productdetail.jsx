import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../App.css";
import "../styles/pdetail.css";
import { Carousel } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "antd";
import getproductDetail from "../json/productdetail";
import { Link } from "react-router-dom";



class ProductDetail extends Component {
  state = { data: getproductDetail() };

  constructor(props) {
    super(props);
    const { product_id } = props.match.params;
    console.log(product_id);
    this.setState({ data: getproductDetail() });
  }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Carousel autoplay>
            {this.state.data.image.map((c) => (
              <img className='imgone' src={c}></img>
            ))}
          </Carousel>
        </Col>
        <Col span={12}>
          <div className='coltwo'>
            <h1 className='brand'>{this.state.data.brand}</h1>
            <h6>{this.state.data.label}</h6>

            <h1 className='price'>{this.state.data.price}</h1>
            <div>
              <h6 className='size'>SIZE</h6>
              <select>
                {this.state.data.size.map((c) => (
                  <option>{c}</option>
                ))}
              </select>
            </div>
            <Link to="/orderpage">
            <button class=' btn btn-primary btn-lg buttonone'>
              ADD TO CART
            </button>
            </Link>
            <p className='description'>{this.state.data.description}</p>
          </div>
        </Col>
      </Row>
    );
  }
}
export default ProductDetail;
