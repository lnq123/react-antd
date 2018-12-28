import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import MyIcon from "../my_icon";

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a href="">从高到低</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="">从低到高</a>
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
        热度 <Icon style={{ margin: "0 10px" }} type="down" />
      </a>
    </Dropdown>
  </div>
);
