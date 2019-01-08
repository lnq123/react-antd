import React, { Component } from "react";
import { Row, Col } from "antd";
const imgtitle = "/image/6.png";
const img_background = "/image/contact/feedback/bg.png";
export default () => (
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
      >
        <img className="contact_title_img" alt="" src={imgtitle} />
        <div className="contact_title">意见反馈</div>
        <div className="ad_description">若您在使用网站期间遇到任何问题，<div>请联系邮箱 support@youth24h.com</div> </div>
      </div>
    </Col>
    <Col span={24} className="DisplayCenter" style={{ marginTop: 50 }}>
      
    </Col>
  </Row>
);
