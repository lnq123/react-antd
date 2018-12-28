import React from "react";
import CommentEditor from "./comment_editor";
import HotComments from "./comments_hot";
import NewComments from "./comments_new";
import { Row, Col } from "antd";
import MyIcon from "../../my_icon";

import { Input, Icon, Button } from "antd";
const { TextArea } = Input;

export default () => (
  <div
    style={{
      padding: "2.5%",
      margin: "1% 1% 1% 1%",
      backgroundColor: "#FFFFFF",
      borderRadius: "16px"
    }}
  >
    <Row>
      <Col>
        <Row>
          <Col>
            <div style={{ margin: "1% 0" }}>
              <TextArea
                placeholder="在此写下您的评论 …"
                autosize={{ minRows: 3, maxRows: 3 }}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={3}>
            <Row>
              <Col span={8}>
                <MyIcon
                  type="icon-Smile"
                  style={{
                    fontSize: "150%",
                    marginLeft: "1%",
                    marginRight: "1%"
                  }}
                />
              </Col>
              <Col span={8}>
                <MyIcon
                  type="icon-at"
                  style={{ fontSize: "150%", marginRight: "1%" }}
                />
              </Col>
              <Col span={8}>
                <MyIcon
                  type="icon-picture"
                  style={{ fontSize: "150%", marginRight: "1%" }}
                />
              </Col>
            </Row>
          </Col>

          <Col span={19} />
          <Col span={2}>
            <div>
              <Button
                style={{
                  background:
                    "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
                  float: "right",
                  width: "200%",
                  boxShadow: "0px 5px 10px 0px rgba(255,79,81,0.66)",
                  borderRadius: "41px",
                  border: "0px"
                }}
              >
                <span style={{ color: "#FFFFFF" }}>评论</span>
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col span={24}>
                <div
                  style={{
                    fontSize: "100%",
                    marginTop: "5%",
                    fontWeight: 500,
                    color: "rgba(74,74,74,1)"
                  }}
                >
                  热门评论
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <HotComments />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col span={24}>
                <div
                  style={{
                    fontSize: "100%",
                    marginTop: "5%",
                    fontWeight: 500,
                    color: "rgba(74,74,74,1)"
                  }}
                >
                  最新评论 (1,999万)
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <NewComments />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
