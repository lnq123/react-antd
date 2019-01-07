import React, { Component } from "react";
//import { HeaderWrapper, } from "./style";
import { Icon } from 'antd';
import "./header.css";
import { Row, Col } from "antd";
const Img6 = "/image/6.png";
class TopHeader extends Component {
  
  render() {
    return (
      <div className="headerWrapper ">
        <Row className="HeaderTitleWidth" gutter={10}>
          <Col span={5}>
            <img className="TitleImg" src={Img6} alt="" />
          </Col>
          <Col span={19}>
           
              <a className="HeaderTitle" href="/">
                <span  >首页</span>
              </a>
              <a className="HeaderTitle"  href="/news">
                <span>快讯</span>
              </a>
              <a className="HeaderTitle"  href="/school">
                <span>阅链学校</span>
              </a>
              <a className="HeaderTitle"  href="/activity">
                <span>活动</span>
              </a>
              <a className="HeaderTitle"  href="/contact">
                <span>联系我们</span>
              </a>
              <a className="HeaderSearchIcon"  href="/contact">
                <span><Icon type="search" style={{fontSize:24}}/></span>
              </a>
              <a className="HeaderLogin"  href="/contact">
                <span>登录/注册</span>
              </a>

              </Col>
            
          
        </Row>
      </div>
    );
  }
}

export default TopHeader;
