import React, { Component } from "react";
import { Row, Col } from "antd";
import SearchTop from "./search_top";

export default class Search extends Component {
  

  render() {
    return (
      <div style={{ background: "#FFFFFF" }}>
        <Row>
          <Col span={24}>
            <SearchTop />
          </Col>
          
          
        </Row>
      </div>
    );
  }
}
