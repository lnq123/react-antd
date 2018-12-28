import React from "react";
import { Menu, Dropdown, Icon } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a
        href=""
        style={{
          fontSize: 14,
          fontWeight: 400,
          color: "rgba(74,74,74,1)",
          lineHeight: "32px"
        }}
      >
        日期顺序
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        href=""
        style={{
          fontSize: 14,
          fontWeight: 400,
          color: "rgba(74,74,74,1)",
          lineHeight: "32px"
        }}
      >
        众&nbsp;&nbsp;筹
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        href=""
        style={{
          fontSize: 14,
          fontWeight: 400,
          color: "rgba(74,74,74,1)",
          lineHeight: "32px"
        }}
      >
        用&nbsp;&nbsp;户
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        href=""
        style={{
          fontSize: 14,
          fontWeight: 400,
          color: "rgba(74,74,74,1)",
          lineHeight: "32px"
        }}
      >
        剧组服务
      </a>
    </Menu.Item>
  </Menu>
);
export default () => (
  <div>
    <Dropdown overlay={menu} trigger={["click"]}>
      <a
        href=""
        style={{
          color: "#4A4A4A",
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: 400,
          marginLeft: 10
        }}
      >
      <Icon style={{ fontSize: '16px' }} type="clock-circle" />
        <span
          style={{
            paddingBottom: "5px",
            fontSize: "14px",
            fontWeight: 500,
            color: "rgba(74,74,74,1)",
            lineHeight: "28px"
          }}
        >
          日期顺序
        </span>
        <Icon style={{ margin: "0 10px" }} type="down" />
      </a>
    </Dropdown>
  </div>
);
