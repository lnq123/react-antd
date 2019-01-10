import React, { Component } from 'react'
import { Row } from 'antd';
import './style.css'
import RightSide from './rightSide.js';
import LeftSide from './leftSide.js'

class Home extends Component {
  render() {
    return (
      <div className="mainHomepage">
        <Row>
          <LeftSide />
          <RightSide />
        </Row>
      </div>
    )
  }
}

export default Home;
