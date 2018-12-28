import React from "react";

import { Table, List } from "antd";

export default () => (
  <div style={{ borderTop: "1px solid rgba(216,216,216,1)" }}>
    <br />
    <List
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  </div>
);
const data = [
  "作者: 导演老安",
  "编号: asdasdasdasdasdasdasdasdasdasdasda",
  "ID: asdasdasdasdasdasdasdasdasdasdasda",
  "时间戳: asdasdasdasdasdasdasdasdasdasdasda"
];
