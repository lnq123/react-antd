import React, { Component } from 'react'
import { List, Icon, Carousel, Row, Col, Timeline, Menu, Skeleton, Button } from 'antd';
import rightSide from './rightSide.js'
import LeftSide from './leftSide.js'
import './style.css'
import RightSide from './rightSide.js';

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
