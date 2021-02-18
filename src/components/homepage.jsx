import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Carousel } from "antd";
import "../styles/homepage.css";

class HomePage extends Component {
  state = {};

  render() {
    const contentStyle = {
      height: "400px",
      width: "100%",
    };

    function onChange(a, b, c) {
      console.log(a, b, c);
    }
    return (
      <React.Fragment>
        <Row className="rowone">
          <Col span={24}>
            <div>
              <Carousel afterChange={onChange}>
                {this.props.homePage.banner.map((c) => (
                  <img style={contentStyle} src={c}></img>
                ))}
              </Carousel>
            </div>
          </Col>
          </Row>
          <Row className="rowtwo">
          <Col span={24}>
              <h1 className="headingone">TOP BRANDS</h1>
              <div>
          {this.props.homePage.topbrands.map((c) => (
                     <img className='picscss' src={c}></img>

          ))}
          </div>

          </Col>
       </Row>
       <Row >
          <Col span={24}>
              <h1 className="headingone">TOP CATEGORY</h1>
              <div>
          {this.props.homePage.topcategory.map((c) => (
                     <img className='picscsss' src={c}></img>

          ))}
          </div>

          </Col>
       </Row>
      </React.Fragment>
    );
  }
}
export default HomePage;