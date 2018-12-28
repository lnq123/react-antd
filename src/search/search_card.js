import React, { Component } from "react";
import { Tag } from "antd";
import MyIcon from "../my_icon";
import { Row, Col } from "antd";
import img10 from "../image/010.jpg";
//const img1 ="https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";
import { Divider } from "antd";

class MovieCards extends Component {
  render() {
    return (
      <div style={{ margin: "15px 0" }}>
        <Row>
          <Col span={24}>
            <div
              style={{
                height: "131px",
                backgroundPosition: "50% 50%",
                backgroundColor: "black",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                backgroundImage: `url(${
                  this.props.img ? this.props.img : "black"
                })`
              }}
            >
              <span>
                {this.props.time ? (
                  <Tag
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      maxHeight: 20,
                      border: 0,
                      borderRadius: "10px",
                      background: "#222222"
                    }}
                  >
                    <span
                      style={{
                        color: "#FFFFFF",
                        fontSize: 12,
                        fontWeight: 400,
                        lineHeight: "12px"
                      }}
                    >
                      {this.props.time}
                    </span>
                  </Tag>
                ) : (
                  ""
                )}
              </span>
            </div>
          </Col>

          <Col span={24}>
            <div
              style={{
                background: "rgba(255,255,255,1)",
                boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
                height: "180px"
              }}
            >
              <Row>
                <Col span={24}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "rgba(0,0,0,1)",
                      margin: "0 15px 0 15px",
                      paddingTop: 10,
                      lineHeight: "24px"
                    }}
                  >
                    {this.props.title1 ? this.props.title1 : ""}
                    <span style={{ color: "#FF1367" }}>
                      {this.props.title2 ? this.props.title2 : ""}
                    </span>
                    {this.props.title3 ? this.props.title3 : ""}
                  </div>
                </Col>

                <Col span={24}>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#BCBCBC",
                      margin: "6px 15px",
                      fontWeight: 400,
                      lineHeight: "12px"
                    }}
                  >
                    <span style={{ float: "left" }}>2018-12-22</span>
                    <span style={{ float: "right" }}>
                      <MyIcon type={"icon-browse"} /> 9,999{" "}
                      <MyIcon type={"icon-praise"} /> 10万
                    </span>
                  </div>
                </Col>

                <Col span={24}>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#BCBCBC",
                      margin: "6px 15px",
                      fontWeight: 400
                    }}
                  >
                    <img
                      src={img10}
                      alt=""
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "24px"
                      }}
                    />
                    <span style={{ margin: "0 0 0 15px" }}>
                      用户名<span style={{ color: "#FF1367" }}>关键字</span>变粉
                    </span>
                    <Divider style={{ margin: "6px 0 0 0" }} />
                  </div>
                </Col>

                <Col span={24}>
                  <div style={{ margin: "0 15px" }}>
                    <span
                      style={{
                        margin: "0 0px 0 2px",
                        color: "#85A5FF",
                        fontSize: 12
                      }}
                    >
                      {this.props.type1 ? (
                        <Tag
                          color="#85A5FF"
                          style={{
                            borderRadius: "10px",
                            maxHeight: 20,
                            color: "#FFFFFF"
                          }}
                        >
                          {this.props.type1}
                        </Tag>
                      ) : (
                        ""
                      )}
                    </span>
                    <span
                      style={{
                        margin: "0 0px 0 2px",
                        color: "#9B9B9B",
                        fontSize: 12
                      }}
                    >
                      {this.props.type1 ? (
                        <Tag
                          color="#FFC53D"
                          style={{
                            borderRadius: "10px",
                            maxHeight: 20,
                            color: "#FFFFFF"
                          }}
                        >
                          {this.props.type1}
                        </Tag>
                      ) : (
                        ""
                      )}
                    </span>
                    <span
                      style={{
                        margin: "0 0px 0 2px",
                        color: "#9B9B9B",
                        fontSize: 12
                      }}
                    >
                      {this.props.type1 ? (
                        <Tag
                          color="#5CDBD3"
                          style={{
                            borderRadius: "10px",
                            maxHeight: 20,
                            color: "#FFFFFF"
                          }}
                        >
                          {this.props.type1}
                        </Tag>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MovieCards;
