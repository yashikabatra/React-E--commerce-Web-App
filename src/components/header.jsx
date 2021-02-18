import React, { Component } from 'react';
import '../styles/header.css'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Input } from 'antd';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="header">
              <Row>
                <Col>
                <Link to={"/"}>
   <img className="img_h" src="https://mumbaimirror.indiatimes.com/photo/80601325.cms"></img>
   </Link>
   </Col>
  
  <Col>
  <div class="shopping_cart">
    <Link to={"/orderpage"}>
    <IconFont type="icon-shoppingcart" />
  <p>Bag</p>
  </Link>
  </div>
  </Col>
  </Row>
</div>
         );
    }
}
export default Header;
