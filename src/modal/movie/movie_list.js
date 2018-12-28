import React, { Component } from "react";
import { Tag } from "antd";
import { Row, Col } from "antd";

class MovieCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <div
              style={{
                width: "100%",
                height: "127px",
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
                      bottom: "5px",
                      right: "-5px",
                      border: 0,
                      borderRadius: "10px",
                      background: "#222222"
                    }}
                  >
                    <span style={{ color: "#FFFFFF" }}>{this.props.time}</span>
                  </Tag>
                ) : (
                  ""
                )}
              </span>

              <span>
                {this.props.type1 ? (
                  <Tag
                    style={{
                      margin: "5px",
                      border: 0,
                      borderRadius: "10px",
                      background:
                        "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)"
                    }}
                  >
                    <span style={{ color: "#FFFFFF" }}>{this.props.type1}</span>
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
                height: "39px"
              }}
            >
              <Row>
                <Col span={24}>
                  <div
                    style={{
                      margin: "5px",
                      fontWight: "900",
                      color: "rgba(0,0,0,1)"
                    }}
                  >
                    {this.props.title1 ? this.props.title1 : ""}
                    <div style={{ color: "rgba(155,155,155,1)" }}>
                      {this.props.title2 ? this.props.title2 : ""}
                    </div>
                  </div>
                </Col>
                <Col span={9}>
                  <div
                    style={{
                      color: "#9B9B9B",
                      fontSize: "70%",
                      marginLeft: "2%"
                    }}
                  >
                    {this.props.type2 ? (
                      <Tag color="#EEEEEE" style={{ borderRadius: "10px" }}>
                        <span style={{ color: "#9B9B9B" }}>
                          {this.props.type2}
                        </span>{" "}
                      </Tag>
                    ) : (
                      ""
                    )}
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
