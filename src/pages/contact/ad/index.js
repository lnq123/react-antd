import React, { Component } from "react";
import { Row, Col } from "antd";
const imgtitle = "/image/6.png";
const img_background = "/image/contact/ad/bg.png";
const img1 = "/image/contact/ad/1.png";
const img2 = "/image/contact/ad/2.png";
const img3 = "/image/contact/ad/3.png";
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
        <div className="contact_title">广告</div>
        <div className="ad_description">请根据需求联系邮箱</div>
      </div>
    </Col>
    <Col span={24} className="DisplayCenter" style={{ marginTop: 50 }}>
      <Row gutter={90}>
        <Col span={8}>
          <div>
            <img className="contact_ad_img" src={img1} alt="" />
            <div className="contact_ad_title">关注我们</div>
          </div>
        </Col>
        <Col span={8} >
          <div style={{marginBottom:100}}>
            <img className="contact_ad_img" src={img2} alt="" />
            <div className="contact_ad_title">微信公众号、官方微博广告</div>
            <div className="contact_ad_title">商务合作 </div>
            <div className="contact_ad_email">business@youth24h.com </div>
            <div className="contact_ad_title"> 广告合作 </div>
            <div className="contact_ad_email">advertise@youth24h.com  </div>
            <div className="contact_ad_title"> 作者入驻 </div>
            <div className="contact_ad_email">jobs@youth24h.com </div>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <img className="contact_ad_img" src={img3} alt="" />
            <div className="contact_ad_title">线下会议 </div>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
);
