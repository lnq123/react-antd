import React, { Component, Fragment } from "react";
import TopHeader from "../topheader";
import "./index.css";
import { Row, Col } from "antd";
const img_background = "/image/school_backkground.png";
const img_serve = "/image/school_serve.png";
const img_sto = "/image/school_sto.png";

class School extends Component {
  render() {
    return (
      <Fragment>
        <TopHeader index={3} />
      <Row>
        <Col span={24}>
          <div
            style={{
              backgroundImage: `url(${img_background})`,
              height: "640px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              textAlign: "center"
            }}
          />
        </Col>
        <Col span={24} className=" DisplayCenter">
          <Row className="BottomWidth">
            <Col span={12} style={{ textAlign: "center" }}>
              <img className="contact_options_img" src={img_serve} alt="" />
              <div className="contact_options_title">服务</div>
              <button className="contact_options_btn">了解更多</button>
            </Col>
            <Col span={12} style={{ textAlign: "center",  marginBottom: "120px"}}>
              <img className="contact_options_img" src={img_sto} alt="" />
              <div className="contact_options_title">STO</div>
              <button className="contact_options_btn">了解更多</button>
            </Col>
          </Row>
        </Col>
      </Row></Fragment>
    );
  }
}

export default School;
