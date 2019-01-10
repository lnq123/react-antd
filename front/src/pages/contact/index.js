import React, { Component } from "react";
import { Row, Col } from "antd";
import "./index.css";

const imgtitle = "/image/6.png";
const img_background = "/image/contact/background.png";
const img_ad = "/image/contact/ad.png";
const img_feedback = "/image/contact/feedback.png";
const img_us = "/image/contact/us.png";
class Contact extends Component {
  render() {
    return (
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
            <div className="contact_title">联系我们</div>
          </div>
        </Col>
        <Col span={24} className=" DisplayCenter">
          <Row className="BottomWidth">
            <Col span={12} style={{ textAlign: "center" }}>
              <a href="/contact/ad">
                <img className="contact_options_img" src={img_ad} alt="" />
                <div className="contact_options_title">广告</div>
                <button className="contact_options_btn">了解更多</button>
              </a>
            </Col>
            <Col span={12} style={{ textAlign: "center" }}>
              <a href="/contact/feedback">
                <img
                  className="contact_options_img"
                  src={img_feedback}
                  alt=""
                />
                <div className="contact_options_title">意见反馈</div>
                <button className="contact_options_btn">了解更多</button>
              </a>
            </Col>
            <Col
              span={12}
              style={{ textAlign: "center", marginBottom: "120px" }}
            >
              <img className="contact_options_img" src={img_us} alt="" />
              <div className="contact_options_title">关注我们</div>
              <button className="contact_options_btn">了解更多</button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Contact;
