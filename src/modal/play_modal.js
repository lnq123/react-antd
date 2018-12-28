import React, { Component } from "react";
import { Modal } from "antd";
import SidePanel from "./comment/side_panel";
import CommentBar from "./comment/comment_bar";
import PaidMovie from "./movie/paid_movie";
import Comments from "./comment/comment_editor";
import { Row, Col, Button } from "antd";
import MyIcon from "../my_icon";

export default class PlayModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showModal() {
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
          width={"90%"}
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
              <Col span={19}>
                <Row>
                  <Col>
                    <div>
                      <PaidMovie />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <CommentBar />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <Comments />
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col span={5}>
                <Row>
                  <Col>
                    <SidePanel />
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
