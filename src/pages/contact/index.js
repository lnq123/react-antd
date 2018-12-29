import React, { Component } from "react";
import img_background from "../../image/contact_background.png";
import img_ad from "../../image/contact_ad.png";
import img_feedback from "../../image/contact_feedback.png";
import img_us from "../../image/contact_us.png";
import { Row, Col } from "antd";
import imgtitle from "../../image/6.png";
import "./index.css";
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
            <Col span={12} style={{textAlign: 'center'}}>
              <img className="contact_options_img" src={img_ad} alt="" />
              <div className="contact_options_title">广告</div>
              <button className="contact_options_btn">了解更多</button>
            </Col>
            <Col span={12} style={{textAlign: 'center'}}>
              <img className="contact_options_img" src={img_feedback} alt="" />
              <div className="contact_options_title">意见反馈</div>
              <button className="contact_options_btn">了解更多</button>
            </Col>
            <Col span={12} style={{textAlign: 'center',marginBottom:'120px'}} >
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
