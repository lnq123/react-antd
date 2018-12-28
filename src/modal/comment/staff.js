import React from "react";
import Example from "../movie/movie_list";
import { Row, Col } from "antd";

export default () => (
  <div>
    <Row>
      <Col>
        <Row>
          <Col span={6}>
            <Example />
          </Col>
          <Col span={6}>
            <Example />
          </Col>
          <Col span={6}>
            <Example />
          </Col>
          <Col span={6}>
            <Example />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Example />
          </Col>
          <Col span={6}>
            <Example />
          </Col>
          <Col span={6}>
            <Example />
          </Col>
          <Col span={6}>
            <Example />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
