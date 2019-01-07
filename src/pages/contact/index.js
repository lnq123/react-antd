import React, { Component, Fragment } from "react";
import TopHeader from "../topheader";
import { Row, Col } from "antd";
import "./index.css";

const imgtitle = "/image/6.png";
const img_background = "/image/contact_background.png";
const img_ad = "/image/contact_ad.png";
const img_feedback = "/image/contact_feedback.png";
const img_us = "/image/contact_us.png";
class Contact extends Component {
  render() {
    return (
      <Fragment>
        <TopHeader index={5} />
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
                <img className="contact_options_img" src={img_ad} alt="" />
                <div className="contact_options_title">广告</div>
                <button className="contact_options_btn">了解更多</button>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <img
                  className="contact_options_img"
                  src={img_feedback}
                  alt=""
                />
                <div className="contact_options_title">意见反馈</div>
                <button className="contact_options_btn">了解更多</button>
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
      </Fragment>
    );
  }
}

export default Contact;
