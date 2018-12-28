import React, { Component } from "react";
import { Modal } from "antd";
import { Tabs } from "antd";
import faker from "faker";
import Questions from "./fund/questions";
import Payment from "./fund/payment";
import ProjectDetail from "./fund/project_details";
import Timeline from "./fund/timeline";
import { Row, Col, Progress, Tag, Button, Divider } from "antd";
import img12 from "../image/012.jpg";
import img11 from "../image/011.jpg";
import MyIcon from "../my_icon";
import imgChart from "../image/分组 12.png";
import {
  Player,
  BigPlayButton,
  ControlBar,
  VolumeMenuButton,
  LoadingSpinner
} from "video-react";
const TabPane = Tabs.TabPane;
const investor = money => (
  <div
    style={{
      margin: "20px 15px 10px 10px"
    }}
  >
    <img
      src={faker.image.avatar()}
      style={{
        width: 35,
        height: 35,
        borderRadius: 18,
        marginLeft: 10
      }}
    />
    <span
      style={{
        marginLeft: 15,
        fontSize: "14px",
        fontWeight: 400,
        color: "rgba(74,74,74,1)",
        lineHeight: "20px"
      }}
    >
      演员丽娜朱丽叶
    </span>
    <span
      style={{
        marginLeft: 24,
        fontSize: "14px",
        fontWeight: 400,
        color: "rgba(255,19,103,1)",
        lineHeight: "20px"
      }}
    >
      ¥ {money}
    </span>
    <Divider
      style={{
        width: "80%",
        margin: "auto"
      }}
    />
  </div>
);
const chart = fcolor => (
  <div
    style={{
      margin: "20px 0 0 23px",
      fontSize: "20px",
      fontWeight: 400,
      color: "#4A4A4A",
      lineHeight: "28px",
      position: "relative"
    }}
  >
    <div>
      <div
        style={{
          height: 17,
          width: 17,
          borderRadius: 9,
          background: fcolor
        }}
      />{" "}
      <span
        style={{
          position: "absolute",
          top: "-5px",
          left: "40px"
        }}
      >
        90% &nbsp;&nbsp;&nbsp;分类1
      </span>
    </div>
  </div>
);

export default class PlayModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showFund() {
    this.setState({
      visible: true
    });
  }
  handleCancel() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div>
        <Modal
          visible={this.state.visible}
          closable={false}
          footer={null}
          centered={true}
          width={"1270px"}
          bodyStyle={{ padding: "0px", margin: "5% 0" }}
        >
          <div
            onClick={() => this.handleCancel()}
            style={{
              position: "fixed",
              top: "65px",
              right: "50px",
              color: "white",
              fontSize: "30px",
              float: "right",
              marginRight: "6px",
              textAlign: "center"
            }}
          >
            <MyIcon type="icon-close" />
          </div>
          <div>
            <Row>
              <Col
                span={24}
                style={{
                  height: "678px",
                  background: "rgba(255,255,255,1)",
                  borderRadius: "16px"
                }}
              >
                <Row>
                  <Col span={24}>
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: 500,
                        color: "rgba(0,0,0,1)",
                        lineHeight: "45px",
                        margin: "30px 0 0px 38px"
                      }}
                    >
                      这个视频的标题这个视频的标题
                      <Tag
                        style={{
                          margin: "0 5px 0 20px",
                          color: "#FFFFFF",
                          width: 55,
                          height: 20,
                          background: "#FFC53D",
                          borderRadius: "10px",
                          textAlign: "center"
                        }}
                      >
                        动画
                      </Tag>
                      <Tag
                        style={{
                          margin: "0 5px",
                          color: "#FFFFFF",
                          width: 55,
                          height: 20,
                          background: "#FFC53D",
                          borderRadius: "10px",
                          textAlign: "center"
                        }}
                      >
                        视频
                      </Tag>
                      <Tag
                        style={{
                          margin: "0 5px",
                          color: "#FFFFFF",
                          width: 55,
                          height: 20,
                          background: "#FFC53D",
                          borderRadius: "10px",
                          textAlign: "center"
                        }}
                      >
                        原创
                      </Tag>
                    </div>
                  </Col>

                  <Col span={19}>
                    <div style={{ width: "969px", margin: "20px 0 52px 41px" }}>
                      <Player poster={img12} preload="metadata">
                        <BigPlayButton position="center" />
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <LoadingSpinner />
                        <ControlBar autoHide={true}>
                          <VolumeMenuButton vertical />
                        </ControlBar>
                      </Player>
                    </div>
                  </Col>
                  <Col span={5} style={{ textAlign: "center" }}>
                    <Progress
                      type="circle"
                      percent={this.props.percent}
                      showInfo={false}
                    />
                    <div style={{}}>
                      {this.props.percent == 0 ? (
                        <div
                          style={{
                            color: "rgb(255, 19, 103)",
                            fontSize: "24px",
                            fontWeight: 500,
                            lineHeight: "40px",
                            position: "absolute",
                            top: "40px",
                            right: "95px"
                          }}
                        >
                          预热中
                        </div>
                      ) : this.props.percent == 100 ? (
                        <div
                          style={{
                            color: "#52C41A",
                            fontSize: "40px",
                            fontWeight: 500,
                            lineHeight: "40px",
                            position: "absolute",
                            top: "40px",
                            right: "80px"
                          }}
                        >
                          {this.props.percent}%
                        </div>
                      ) : (
                        <div
                          style={{
                            color: "rgb(16, 142, 233)",
                            fontSize: "40px",
                            fontWeight: 500,
                            lineHeight: "40px",
                            position: "absolute",
                            top: "40px",
                            right: "85px"
                          }}
                        >
                          {this.props.percent}%
                        </div>
                      )}
                    </div>

                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 400,
                        color: "rgba(155,155,155,1)",
                        lineHeight: "28px",
                        marginTop: "30px"
                      }}
                    >
                      2018.09.11
                    </div>
                    <div
                      style={{
                        marginTop: 15,
                        marginBottom: 21,
                        fontSize: 18,
                        fontWeight: 500,
                        color: "rgba(155,155,155,1)",
                        lineHeight: "25px"
                      }}
                    >
                      截止日期
                    </div>
                    <div style={{ margin: "0 98px" }}>
                      <Divider
                        style={{
                          width: 70,
                          height: 1,
                          background: "rgba(216,216,216,1)"
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginTop: 21,
                        marginBottom: 15,
                        fontSize: 28,
                        fontWeight: 400,
                        color:
                          this.props.money == 0
                            ? "rgba(155,155,155,1)"
                            : this.props.money == "20,000"
                            ? "rgb(135, 208, 104)"
                            : "rgb(16, 142, 233)",
                        lineHeight: "28px"
                      }}
                    >
                      {this.props.money}
                    </div>
                    <div
                      style={{
                        marginBottom: 21,
                        fontSize: 18,
                        fontWeight: 500,
                        color: "rgba(155,155,155,1)",
                        lineHeight: "25px"
                      }}
                    >
                      已募集资金 (糖分)
                    </div>
                    <div style={{ margin: "0 98px" }}>
                      <Divider
                        style={{
                          width: 70,
                          height: 1,
                          background: "rgba(216,216,216,1)"
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginTop: 21,
                        marginBottom: 15,
                        fontSize: 28,
                        fontWeight: 400,
                        color: "rgba(155,155,155,1)",
                        lineHeight: "28px"
                      }}
                    >
                      20,000
                    </div>
                    <div>目标资金 (糖分)</div>
                  </Col>
                </Row>
              </Col>
              <Col
                span={24}
                style={{
                  width: 1270,
                  height: 359,
                  fontSize: "32px",
                  fontWeight: 500,
                  color: "rgba(0,0,0,1)",
                  lineHeight: "45px",
                  margin: "15px 0 0px 0px",
                  background: "rgba(255, 255, 255, 1)",
                  boxShadow: "0px 2px 20px 0px rgba(0,0,0,0.06)",
                  borderRadius: "16px"
                }}
              >
                <Row style={{}}>
                  <Col span={7}>
                    <Payment money="￥69" />
                  </Col>
                  <Col span={1}>
                    <Divider
                      type="vertical"
                      style={{
                        width: "1px",
                        height: "265px",
                        background: "rgba(238,238,238,1)",
                        margin: "49px 25px 0 25px"
                      }}
                    />
                  </Col>
                  <Col span={8}>
                    <Payment money="￥10,000" />
                  </Col>
                  <Col span={1}>
                    <Divider
                      type="vertical"
                      style={{
                        width: "1px",
                        height: "265px",
                        background: "rgba(238,238,238,1)",
                        margin: "49px 25px 0 25px"
                      }}
                    />
                  </Col>
                  <Col span={7}>
                    <Payment money="￥20,000" />
                  </Col>
                </Row>
              </Col>
              <Col span={19}>
                <div
                  style={{
                    width: 980,
                    marginTop: "15px",
                    background: "rgba(255, 255, 255, 1)",
                    boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
                    borderRadius: "16px"
                  }}
                >
                  <Tabs
                    defaultActiveKey="1"
                    size={"large"}
                    tabBarStyle={{ textAlign: "center" }}
                  >
                    <TabPane tab="项目详情" key="1">
                      <ProjectDetail img={img11} />
                    </TabPane>
                    <TabPane tab="动&nbsp;&nbsp;态" key="2">
                      <Timeline />
                    </TabPane>
                    <TabPane tab="问&nbsp;&nbsp;答" key="3">
                      <Questions />
                    </TabPane>
                  </Tabs>
                </div>
              </Col>
              <Col span={5}>
                <Row>
                  <Col span={24}>
                    <div
                      style={{
                        width: "275px",
                        height: "563px",
                        background: "rgba(255,255,255,1)",
                        borderRadius: "16px",
                        margin: "15px 0 15px -9px"
                      }}
                    >
                      <div
                        style={{
                          width: 150,
                          height: 28,
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "rgba(74,74,74,1)",
                          lineHeight: "28px",
                          padding: "15px"
                        }}
                      >
                        最新投资人
                      </div>
                      <div
                        style={{
                          margin: "20px 0 0 0",
                          fontSize: 14,
                          fontWeight: 400,
                          color: "rgba(155,155,155,1)",
                          lineHeight: "20px"
                        }}
                      >
                        <span
                          style={{
                            margin: "0 0 0 40px"
                          }}
                        >
                          用户名
                        </span>
                        <span
                          style={{
                            margin: "0 40px 0 110px"
                          }}
                        >
                          投票糖分
                        </span>
                      </div>
                      {investor("20,000")}
                      {investor("60")}
                      {investor("10,000")}
                      {investor("10,000")}
                      {investor("60")}
                      {investor("60")}
                      {investor("60")}
                      {investor("60")}
                    </div>
                  </Col>
                  <Col span={24}>
                    <div
                      style={{
                        width: "275px",
                        height: "365px",
                        background: "rgba(255,255,255,1)",
                        borderRadius: "16px",
                        margin: "15px 0 15px -9px"
                      }}
                    >
                      <div
                        style={{
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "rgba(74,74,74,1)",
                          lineHeight: "28px",
                          padding: "15px"
                        }}
                      >
                        发起人
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <img
                          src={faker.image.avatar()}
                          style={{
                            width: "90px",
                            height: "90px",
                            borderRadius: 45
                          }}
                        />
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: 400,
                          color: "rgba(0,0,0,1)",
                          lineHeight: "18px",
                          marginTop: "10px"
                        }}
                      >
                        导演老李
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          fontWeight: 400,
                          color: "rgba(74,74,74,1)",
                          lineHeight: "18px",
                          marginTop: "10px"
                        }}
                      >
                        100作品 202.33万 粉丝
                      </div>
                      <div
                        style={{
                          margin: "0 15px",
                          textAlign: "center",
                          fontSize: "16px",
                          fontWeight: 400,
                          color: "rgba(155,155,155,1)",
                          lineHeight: "24px",
                          marginTop: "10px"
                        }}
                      >
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近意，生言有我感際英面，別一他草；社團時任光地？住情半電地裡看畫朋我我室劇。
                      </div>
                      <div style={{ margin: "24px 0 33px 0px" }}>
                        <Button
                          style={{
                            margin: "0px 15px 0px 40px",
                            width: "90px",
                            height: "32px",
                            background:
                              "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
                            borderRadius: "18px",
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "rgba(255,255,255,1)",
                            lineHeight: "14px"
                          }}
                        >
                          关 注
                        </Button>
                        <Button
                          style={{
                            margin: "0px 40px 0px 0px",
                            width: "90px",
                            height: "32px",
                            background: "rgba(255,255,255,1)",
                            borderRadius: "18px",
                            border: "1px solid",
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "rgba(255,19,103,1)",
                            lineHeight: "14px"
                          }}
                        >
                          私 信
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div
                      style={{
                        width: "275px",
                        height: "146px",
                        background: "rgba(255,255,255,1)",
                        boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
                        borderRadius: "16px",
                        margin: "15px 0 15px -9px"
                      }}
                    >
                      <div
                        style={{
                          fontSize: "20px",
                          fontWeight: 400,
                          color: "rgba(74,74,74,1)",
                          lineHeight: "28px",
                          padding: "15px"
                        }}
                      >
                        项目宣发
                      </div>
                      <div>
                        <span>
                          <MyIcon
                            type="icon-weibo"
                            style={{ fontSize: 40, margin: "0 0 0 40px" }}
                          />
                          <MyIcon
                            type="icon-weixin"
                            style={{ fontSize: 40, margin: "5px 40px" }}
                          />
                          <MyIcon
                            type="icon-facebook"
                            style={{ fontSize: 40 }}
                          />
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 400,
                          color: "rgba(155,155,155,1)",
                          lineHeight: "17px"
                        }}
                      >
                        <span style={{ margin: "0 0 0 42px" }}>微 博</span>
                        <span style={{ margin: "0 55px" }}>微 信</span>
                        <span>脸 书</span>
                      </div>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div
                      style={{
                        width: "275px",
                        height: "563px",
                        background: "rgba(255,255,255,1)",
                        boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
                        borderRadius: "16px",
                        margin: "15px 0 15px -9px"
                      }}
                    >
                      <div
                        style={{
                          fontSize: "20px",
                          fontWeight: 400,
                          color: "rgba(74,74,74,1)",
                          lineHeight: "28px",
                          padding: "15px"
                        }}
                      >
                        预算分配
                      </div>
                      <div style={{ margin: "28px 0 38px 53px" }}>
                        <img src={imgChart} />
                      </div>

                      {chart("#F0F5FF")}
                      {chart("#D6E4FF")}
                      {chart("#85A5FF")}
                      {chart("#597EF7")}
                      {chart("#2F54EB")}
                      {chart("#1D39C4")}
                      {chart("#061178")}
                    </div>
                  </Col>
                  <Col>
                    <div style={{ position: "fixed", top: "80%" }}>
                      <div style={{}}>
                        <a>
                          &nbsp;
                          <Button
                            style={{
                              width: "68px",
                              height: "68px",
                              background: "rgba(238,238,238,1",
                              borderRadius: "17px"
                            }}
                          >
                            <MyIcon
                              type="icon-totop"
                              style={{ fontSize: 29, color: "#BCBCBC" }}
                            />
                          </Button>
                        </a>
                      </div>
                      <br />
                      <div style={{}}>
                        <a>
                          &nbsp;
                          <Button
                            style={{
                              width: "68px",
                              height: "68px",
                              background: "rgba(238,238,238,1",
                              borderRadius: "17px"
                            }}
                          >
                            <MyIcon
                              type="icon-interactive"
                              style={{ fontSize: 40, color: "#BCBCBC" }}
                            />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
}
