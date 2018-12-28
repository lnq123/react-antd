import React, { Component } from "react";
import DropdownType from "./dropdown_type";
import { Row, Col } from "antd";
import MyIcon from "../my_icon";
import { Input } from "antd";
import { Tabs, Button } from "antd";

export default class SmallSearch extends Component {
  render() {
    return (
      <div style={{ height: 60 }}>
        <Row>
          <Col offset={2} span={2}>
            <div style={{ margin: "15px 0" }}>
              <DropdownType />
            </div>
          </Col>
          <Col span={7}>
            <div style={{ margin: "3% 0 0" }}>
              <Input
                placeholder="输入关键字搜索作品、众筹项目或用户"
                prefix={
                  <MyIcon
                    type="icon-search"
                    style={{ fontSize: 20, color: "rgba(0,0,0,.25)" }}
                  />
                }
              />
            </div>
          </Col>
          <Col span={2}>
            <Button
              style={{
                margin: "10% 30px",
                borderRadius: "18px",
                background:
                  "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
                color: "#FFFFFF",
                fontWeight: 400,
                fontSize: 16,
                height: "36px",
                lineHeight: "16px",
                border: 0
              }}
            >
              搜索
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
