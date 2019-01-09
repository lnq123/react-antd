import React, { Component } from "react";
import { Row, Col, Input, Button } from "antd";
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
    <Col span={24} style={{ marginTop: 50 }}>
      <Row style={{width:1200,margin: 'auto'}}>
        <Col span={24}>
        <div className='contact_feedback_field'>名字 *</div>
        </Col>
        <Col span={24}>
        <div >
        <Input size="large" className='contact_feedback_inputname' />
        </div>
        </Col>
        <Col span={24}>
        <div className='contact_feedback_field'>邮箱地址 *</div>
        </Col>
        <Col span={24}>
        <div >
        <Input size="large" className='contact_feedback_email' />
        </div>
        </Col>
        <Col span={24}>
        <div className='contact_feedback_field'>主题 *</div>
        </Col>
        <Col span={24}>
        <div >
        <Input size="large" className='contact_feedback_email' />
        </div>
        </Col>
        <Col span={24}>
        <div className='contact_feedback_field'>内容 *</div>
        </Col>
        <Col span={24}>
        <div >
        <Input.TextArea size="large" className='contact_feedback_email' autosize={{minRows: 20, maxRows: 40}}/>
        </div>
        </Col>
        <Col style={{textAlign:'center'}}>
        <Button className='contact_feedback_btn'>
        提&nbsp;交
        </Button>
        </Col>
      </Row>
    </Col>
  </Row>
);

// <div className='contact_feedback_field'>邮箱地址 *</div>
// <div className='contact_feedback_field'>主题 *</div>
// <div className='contact_feedback_field'>内容 *</div>
// <button>提&nbsp;&nbsp;交</button>