import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Carousel } from "antd";
import "../styles/allproducts.css";
import { Row, Col } from "antd";
import { Checkbox } from "antd";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import BrandModal from "./modal";
import { Link } from "react-router-dom";

class AllProducts extends Component {
  state = { pageSize: 4, currentPage: 1 };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { Meta } = Card;

    const current_products_to_be_shown = paginate(
      this.props.allProducts.allproducts_grid,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <Row>
        <Col span={4}>
          <Card className='filter_card'>
            <h1>FILTERS</h1>
            <hr></hr>
            <h5>Category</h5>

            {this.props.allProducts.filter.category.map((c) => (
              <div>
                <Checkbox>{c}</Checkbox> <br />
              </div>
            ))}
            <hr></hr>
            <h5>Brand</h5>

            {this.props.allProducts.filter.brand.slice(0, 10).map((c) => (
              <div>
                <Checkbox>{c}</Checkbox> <br />
              </div>
            ))}
            {/* <button className='brand_btn' onClick={showModal}>+</button>  */}
            <BrandModal
              brand={this.props.allProducts.filter.brand}
            ></BrandModal>
            <hr></hr>
            <h5>Price</h5>

            {this.props.allProducts.filter.price.map((c) => (
              <div>
                <Checkbox>{c}</Checkbox> <br />
              </div>
            ))}
            <hr></hr>
            <h5>Colour</h5>

            {this.props.allProducts.filter.colour.map((c) => (
              <div>
                <Checkbox>{c}</Checkbox> <br />
              </div>
            ))}
          </Card>
        </Col>

        <Col span={20}>
          <Card className='allproducts_card'>
            <Row>
              {current_products_to_be_shown.map((c) => (
                <Col>
                  <Link to={"/product_detail/" + c.id}>
                    <Card className='all_cards' style={{ width: 240 }}>
                      <Carousel autoplay>
                        {c.pictures.map((c) => (
                          <img src={c}></img>
                        ))}
                      </Carousel>
                      <h6>{c.brand}</h6>
                      <h6>{c.label}</h6>
                      <h6>{c.price}</h6>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Card>

          {/* pagination will take place here */}
          <Pagination
            itemCount={this.props.allProducts.allproducts_grid.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </Col>
      </Row>
    );
  }
}

export default AllProducts;
