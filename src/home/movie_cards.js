import React, { Component } from "react";
import { Tag } from "antd";
import MyIcon from "../my_icon";
import { Row, Col } from "antd";
import PlayModal from "../modal/play_modal";
//const img1 ="https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";

class MovieCards extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <div
              style={{
                width: "100%",
                height: "210px",
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
                        fontSize: 12
                      }}
                    >
                      {this.props.time}
                    </span>
                  </Tag>
                ) : (
                  ""
                )}
              </span>

              <span>
                {this.props.type1 ? (
                  <Tag
                    style={{
                      margin: "10px",
                      border: 0,
                      maxHeight: 20,
                      borderRadius: "10px",
                      background:
                        "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)"
                    }}
                  >
                    <span style={{ fontSize: 12, color: "#FFFFFF" }}>
                      {this.props.type1}
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
                height: "110px"
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: "rgba(0,0,0,1)",
                  margin: "0 15px 0 15px",
                  paddingTop: 10,
                  lineHeight: "24px"
                }}
              >
                {this.props.title1 ? this.props.title1 : ""}
                <div style={{ color: "rgba(155,155,155,1)" }}>
                  {this.props.title2 ? this.props.title2 : ""}
                </div>
              </div>

              <div
                style={{
                  color: "#9B9B9B",
                  fontSize: 12,
                  position: "absolute",
                  left: 12,
                  bottom: 15
                }}
              >
                {this.props.type2 ? (
                  <Tag
                    color={this.props.type2=='访谈' ?'#85A5FF':
                    this.props.type2=='言情' ?'#FFC53D':
                    this.props.type2=='独立摇滚' ?'#5CDBD3':
                    this.props.type2=='编舞' ?'#BAE637':
                    "yellow"}
                    style={{
                      borderRadius: "10px",
                      maxHeight: 20,
                      color: "#FFFFFF"
                    }}
                  >
                    {this.props.type2}
                  </Tag>
                ) : (
                  ""
                )}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#9B9B9B",
                  position: "absolute",
                  right: 12,
                  bottom: 15,
                  fontWeight: 400,
                  lineHeight: "12px"
                }}
              >
                <MyIcon type={"icon-browse"} /> 9,999{" "}
                <MyIcon type={"icon-praise"} /> 10万
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MovieCards;
