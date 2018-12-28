import React from "react";
import { Tabs } from "antd";
import Intro from "./introduction";
import Staff from "./staff";
import CopyRight from "./copy_right";
const TabPane = Tabs.TabPane;

const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";

export default () => (
  <div
    style={{
      padding: "2% 2% 1% 2%",
      margin: "1% 1% 0% 1%",
      backgroundColor: "#FFFFFF",
      borderRadius: "16px"
    }}
  >
    <Tabs defaultActiveKey="1">
      <TabPane tab="简&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;介" key="1">
        <Intro />
      </TabPane>
      <TabPane tab="版权信息" key="2">
        <CopyRight />
      </TabPane>
    </Tabs>
  </div>
);
