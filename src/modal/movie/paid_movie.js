import React from "react";
import {
  Player,
  BigPlayButton,
  ControlBar,
  VolumeMenuButton,
  LoadingSpinner
} from "video-react";
import "video-react/dist/video-react.css";
import MyIcon from "../../my_icon";
import { Row, Col, Tag } from "antd";
import img12 from "../../image/012.jpg";

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
      <Col span={24}>
        <Row>
          <Col span={24}>
            <div style={{}}>
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

          <Col span={24}>
            <div style={{ fontWeight: 500, fontSize: "120%" }}>
              这个视频标题这个视频标题
            </div>
          </Col>
          <Col span={24}>
            <div
              style={{
                fontWeight: 400,
                fontSize: "90%",
                color: "rgba(155,155,155,1)"
              }}
            >
              2018-10-30 12:59:22
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={6}>
            <div style={{}}>
              <Tag
                style={{
                  border: 0,
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)"
                }}
              >
                <span style={{ color: "#FFFFFF" }}>视频</span>
              </Tag>
              <Tag
                style={{
                  border: 0,
                  borderRadius: "10px",
                  background: "#FFC53D"
                }}
              >
                <span style={{ color: "#FFFFFF" }}>动画</span>
              </Tag>
              <Tag
                style={{
                  border: 0,
                  borderRadius: "10px",
                  background: "#5CDBD3"
                }}
              >
                <span style={{ color: "#FFFFFF" }}>原创</span>
              </Tag>
            </div>
          </Col>
          <Col span={6} />
          <Col span={12}>
            <div style={{ float: "right" }}>
              <span style={{ color: "rgba(188,188,188,1)" }}>
                <MyIcon type="icon-browse" />
                9,999 观看 &nbsp;&nbsp;
              </span>
              <span style={{ color: "rgba(255,19,103,1)" }}>
                <MyIcon type="icon-praise_fill" />
                9,999 赞 &nbsp;&nbsp;
              </span>
              <span style={{ color: "rgba(255,19,103,1)" }}>
                <MyIcon type="icon-collection_fill" />
                已收藏 &nbsp;&nbsp;
              </span>
              <span style={{ color: "rgba(188,188,188,1)" }}>
                <MyIcon type="icon-share" />
                分享
              </span>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
