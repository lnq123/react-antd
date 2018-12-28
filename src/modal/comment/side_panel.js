import React from "react";
import { Button, Tabs } from "antd";
import { Row, Col, BackTop } from "antd";
import img1 from "../../image/001.jpeg";
import MyIcon from "../../my_icon";
import SidePlayer from "./side_player";
const TabPane = Tabs.TabPane;
export default () => (
  <div>
    <Row>
      <Col>
        <div
          style={{
            padding: "2.5%",
            margin: "3% 3% 3% 1%",
            backgroundColor: "#FFFFFF",
            borderRadius: "16px"
          }}
        >
          <Row>
            <Col span={24}>
              <div style={{ textAlign: "center" }}>
                <img
                  src={img1}
                  style={{ width: 130, height: 130, borderRadius: 65 }}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div
                style={{
                  textAlign: "center",
                  margin: "2%",
                  fontSize: "100%",
                  fontWeight: 400,
                  color: "rgba(0,0,0,1)"
                }}
              >
                导演老李
              </div>
              <div
                style={{
                  textAlign: "center",
                  margin: "1%",
                  fontSize: "90%",
                  fontWeight: 400,
                  color: "rgba(74,74,74,1)"
                }}
              >
                100 作品 202.33万 粉丝
              </div>
              <div
                style={{
                  margin: "2% 4% 8%",
                  fontSize: "80%",
                  fontWeight: 400,
                  color: "rgba(155,155,155,1)"
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;近意，生言有我感際英面，別一他草；社團時任光地？住情半電地裡看畫朋我我室劇。
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row>
                <Col>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        background:
                          "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
                        boxShadow: "0px 5px 10px 0px rgba(255,79,81,0.66)",
                        border: 0,
                        width: "60%",
                        borderRadius: "41px",
                        color: "#FFFFFF"
                      }}
                    >
                      <MyIcon type="icon-money" />
                      打赏
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ textAlign: "center", margin: "5% 0" }}>
                    <Button
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #FF1367",
                        width: "60%",
                        borderRadius: "41px",
                        color: "#FF1367"
                      }}
                    >
                      <MyIcon type="icon-add" />
                      关注
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div style={{ margin: "3% 3% 3% 1%", borderRadius: "16px" }}>
          <Row>
            <Col>
              <SidePlayer />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
);
/*
        <Row>
      <Col>
        <Button  type="primary">打赏</Button>
      </Col>
      <Col>
        <Button ghost>关注</Button>
      </Col>
    </Row>
    <Row>
        <Col>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="播 放" key="1"><MovieList /></TabPane>
            <TabPane tab="团 队" key="2"><MovieList /></TabPane>
          </Tabs>
        </Col>
      
    </Row>
      </Col>
      <Col span={1}/>
      */
