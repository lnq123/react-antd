import React, { Component } from "react";
import Slide from './slides'
import Tabs from './tabs'
import {Row, Col} from 'antd'

class Activity extends Component {
  render() {
    return (
      <Row style={{marginTop:'30px'}} >
        <Col span={24}>
          <Slide />
        </Col>
        <Col span={24} style={{marginTop:'60px'}}>
          <div style={{width:'1200px', margin: '0 auto',}}>
          <Tabs />
          </div>
        </Col>
      </Row>
    );
  }
}

export default Activity;
