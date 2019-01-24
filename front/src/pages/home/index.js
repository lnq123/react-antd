import React, { Component } from 'react'
import { Row } from 'antd';
import './style.css'
import RightSide from './rightSide.js';
import LeftSide from './leftSide.js'

class Home extends Component {
  render() {
    console.log('PROPS', this.props);

    return (
      <div className="mainHomepage">
        <Row>
          <LeftSide history={this.props.history} />
          <RightSide history={this.props.history} />
        </Row>
      </div>
    )
  }
}

export default Home;
