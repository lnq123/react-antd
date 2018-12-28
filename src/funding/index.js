import React, { Component } from "react";
import Ad from "../home/ad_title";
import { Row, Col, Pagination } from "antd";
import PlayModal from "../modal/play_fund";
import Title from "./title";
import MyIcon from "../my_icon";
import { Tabs } from "antd";
import "../home/hot.less";
import img1 from "../image/001.jpeg";
import img2 from "../image/007.jpg";
import img3 from "../image/004.jpeg";
import img4 from "../image/005.jpg";
import img5 from "../image/006.jpg";
import img9 from "../image/009.jpg";

import ftImg from '../image/ft.png'

const TabPane = Tabs.TabPane;
const color1 =
  "linear-gradient(270deg,rgba(250,217,97,1) 0%,rgba(249,163,63,1) 100%)";
const fontcolor1 = "#FAAD14";
const color2 =
  "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)";
const fontcolor2 = "#FF1367";
const color3 =
  "linear-gradient(270deg,rgba(197,222,49,1) 0%,rgba(67,245,219,1) 100%)";
const fontcolor3 = "#52C41A";
class Home extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={24}>
          <Ad />
        </Col>
        <Col
          span={24}
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 2px 31px 0px rgba(205,205,205,0.27)",
            height: 54
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              minWidth: "1200px",
              margin: "auto"
            }}
          >
            <Row type="flex" justify="center">
            <Col offset={1} span={6}>
                <img
                  src={ftImg}
                  style={{
                    position: "absolute",
                    bottom: "0px"
                  }}
                />
              </Col>
              <Col span={17}>
                <Tabs
                  defaultActiveKey="1"
                  size={"large"}
                  style={{ marginLeft: "-30px" }}
                >
                  <TabPane tab={<span>推&nbsp;&nbsp;荐</span>} key="1" />
                  <TabPane tab={<span>视&nbsp;&nbsp;频</span>} key="2" />
                  <TabPane tab={<span>文&nbsp;&nbsp;学</span>} key="3" />
                  <TabPane tab={<span>其&nbsp;&nbsp;他</span>} key="4" />
                </Tabs>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          span={24}
          style={{
            margin: "50px 0 0"
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              minWidth: "1200px",
              margin: "auto"
            }}
          >
            <Title
              img={img1}
              color={color1}
              fontcolor={fontcolor1}
              percent={25}
              money={"16,000"}
            />
            <Title
              img={img2}
              color={color2}
              percent={0}
              fontcolor={fontcolor2}
              money={0}
            />
            <Title
              img={img3}
              fontcolor={fontcolor3}
              color={color3}
              percent={100}
              money={"20,000"}
            />
            <div style={{margin: '48px 0px 80px 900px',}}>
              <Pagination defaultCurrent={2} total={200} />
            </div>
          </div>
        </Col>

        <PlayModal />
      </Row>
    );
  }
}

export default Home;
