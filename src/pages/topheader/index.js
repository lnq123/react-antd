import React, { Component } from "react";
//import { HeaderWrapper, } from "./style";
import { Icon } from "antd";
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
            <a
              className={
                this.props.index === 1 ? "HeaderTitleA" : "HeaderTitle"
              }
              href="/"
            >
              <span style={{ position: "relative" }}>
                首页
                <span className={this.props.index === 1 ? "index1" : ""} />
              </span>
            </a>
            <a
              className={
                this.props.index === 2 ? "HeaderTitleA" : "HeaderTitle"
              }
              href="/news"
            >
              <span style={{ position: "relative" }}>
                快讯
                <span className={this.props.index === 2 ? "index2" : ""} />
              </span>
            </a>
            <a
              className={
                this.props.index === 3 ? "HeaderTitleA" : "HeaderTitle"
              }
              href="/school"
            >
              <span style={{ position: "relative" }}>
                阅链学校
                <span className={this.props.index === 3 ? "index3" : ""} />
              </span>
            </a>
            <a
              className={
                this.props.index === 4 ? "HeaderTitleA" : "HeaderTitle"
              }
              href="/activity"
            >
              <span style={{ position: "relative" }}>
                活动
                <span className={this.props.index === 4 ? "index4" : ""} />
              </span>
            </a>
            <a
              className={
                this.props.index === 5 ? "HeaderTitleA" : "HeaderTitle"
              }
              href="/contact"
            >
              <span style={{ position: "relative" }}>
                联系我们
                <span className={this.props.index === 5 ? "index5" : ""} />
              </span>
            </a>
            <a className="HeaderSearchIcon" href="/contact">
              <span>
                <Icon type="search" style={{ fontSize: 24 }} />
              </span>
            </a>
            <a className="HeaderLogin" href="/contact">
              <span>登录/注册</span>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TopHeader;
