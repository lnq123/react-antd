import React, { Component } from "react";
// import { Tag } from "antd";
// import MyIcon from "../my_icon";
import faker from "faker";
import { Row, Col } from "antd";
// import PlayModal from "../modal/play_modal";
//const img1 ="https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";
// import img1 from "../image/001.jpeg";
// import img3 from "../image/003.jpg";
import img4 from "../image/004.jpeg";
import img5 from "../image/005.jpg";
// import img6 from "../image/006.jpg";
import img7 from "../image/007.jpg";
// import img8 from "../image/008.jpg";
// import img9 from "../image/009.jpg";
// import img10 from "../image/010.jpg";
// import img11 from "../image/011.jpg";
// import img12 from "../image/012.jpg";
// import img13 from "../image/013.jpg";

class UserCard extends Component {
  render() {
    return (
      <Row
        style={{
          width: "1250px",
          height: "209px",
          background: "rgba(255,255,255,1)",
          boxShadow: "0px 2px 20px 0px rgba(0,0,0,0.06)",
          borderRadius: "16px",
          marginBottom:35,
        }}
      >
        <Col span={3}>
          <img
            src={faker.image.avatar()}
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "45px",
              margin: "19px 29px 19px 42px"
            }}
          />
          <button
            style={{
              width: "87px",
              height: "26px",
              background:
                "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
              borderRadius: "18px",
              border: "none",
              color: "#FFFFFF",
              margin: "0 0 0 43px",
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(255,255,255,1)",
              lineHeight: "14px"
            }}
          >
            关&nbsp;&nbsp;&nbsp;&nbsp;注
          </button>
          <button
            style={{
              width: "87px",
              height: "26px",
              background: "#FFFFFF",
              borderRadius: "18px",
              border: "none",
              color: "#FF1367",
              margin: "15px 0 0 43px",
              border: "1px solid rgba(255,19,103,1)"
            }}
          >
            私&nbsp;&nbsp;&nbsp;&nbsp;信
          </button>
        </Col>
        <Col span={6} style={{ maxWidth: 248, textAlign: "center" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "rgba(0,0,0,1)",
              lineHeight: "18px",
              margin: "20px 0 27px 0"
            }}
          >
            演员朱丽叶
            <span
              style={{
                fontSize: "12px",
                fontWeight: 400,
                color: "#4A4A4A",
                lineHeight: "18px",
                marginLeft: 10
              }}
            >
              <span style={{ color: "#FF1367" }}>100</span>作品&nbsp;&nbsp;
              <span style={{ color: "#FF1367" }}>202.3</span>万粉丝
            </span>
          </div>

          <div
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#9B9B9B",
              lineHeight: "20px"
            }}
          >
            近意，生言有我感際英面，別一他草；社團時任光地？住情半電地裡看畫朋我我室劇。生言有就对赌否到近意，生言有我感際英面，別一他草；社團時任光地？住情半電对赌否到
            ...
          </div>
          <button
            style={{
              width: "55px",
              height: "20px",
              background: "#55DBBD",
              borderRadius: "10px",
              border: "none",
              color: "#FFFFFF",
              fontSize: 12,
              lineHeight: "12px"
            }}
          >
            分类
          </button>
          <button
            style={{
              width: "55px",
              height: "20px",
              background: "#FFC53D",
              borderRadius: "10px",
              border: "none",
              color: "#FFFFFF",
              margin: "0 5px",
              fontSize: 12,
              lineHeight: "12px"
            }}
          >
            分类
          </button>
          <button
            style={{
              width: "55px",
              height: "20px",
              background: "#86A5FF",
              borderRadius: "10px",
              border: "none",
              color: "#FFFFFF",
              margin: "0  0px",
              fontSize: 12,
              lineHeight: "12px"
            }}
          >
            分类
          </button>
        </Col>
        <Col span={5}>
          <div
            style={{
              width: "240px",
              height: "178px",
              background: "rgba(255,255,255,1)",
              boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
              borderRadius: "16px",
              margin: "15px auto"
            }}
          >
            <img
              src={img7}
              style={{
                width: "240px",
                height: "136px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px"
              }}
            />
            <div
              style={{
                padding: "10px",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(0,0,0,1)",
                lineHeight: "24px"
              }}
            >
              相关视频1
            </div>
          </div>
        </Col>
        <Col span={5}>
          <div
            style={{
              width: "240px",
              height: "178px",
              background: "rgba(255,255,255,1)",
              boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
              borderRadius: "16px",
              margin: "15px auto"
            }}
          >
            <img
              src={img4}
              style={{
                width: "240px",
                height: "136px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px"
              }}
            />
            <div
              style={{
                padding: "10px",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(0,0,0,1)",
                lineHeight: "24px"
              }}
            >
              相关视频1
            </div>
          </div>
        </Col>
        <Col span={5}>
          <div
            style={{
              width: "240px",
              height: "178px",
              background: "rgba(255,255,255,1)",
              boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
              borderRadius: "16px",
              margin: "15px auto"
            }}
          >
            <img
              src={img5}
              style={{
                width: "240px",
                height: "136px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px"
              }}
            />
            <div
              style={{
                padding: "10px",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(0,0,0,1)",
                lineHeight: "24px"
              }}
            >
              相关视频1
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default UserCard;
{
  /* <Col
          span={16}
          style={{
            margin: "24px 0 0 20px",
            width: 158
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 400,
              color: "rgba(0,0,0,1)",
              lineHeight: "18px"
            }}
          >
            演员朱丽叶
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#4A4A4A",
              lineHeight: "24px"
            }}
          >
            <span style={{ color: "#FF1367" }}>100</span>作品&nbsp;&nbsp;
            <span style={{ color: "#FF1367" }}>202.3</span>万粉丝
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#9B9B9B",
              lineHeight: "20px"
            }}
          >
            近意，生言有我感際近意，生言有有我感際...
          </div>
        </Col>
        <Col span={24}>
          <button
            style={{
              width: "92px",
              height: "30px",
              background:
                "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
              borderRadius: "18px",
              border: "none",
              color: "#FFFFFF",
              margin: "0 0 0 28px"
            }}
          >
            关&nbsp;&nbsp;&nbsp;&nbsp;注
          </button>
          <button
            style={{
              width: "55px",
              height: "20px",
              background: "#FFC53D",
              borderRadius: "10px",
              border: "none",
              color: "#FFFFFF",
              margin: "0 0 0 14px",
              position: "relative",
              bottom: "-5px"
            }}
          >
            分类
          </button>
          <button
            style={{
              width: "55px",
              height: "20px",
              background: "#86A5FF",
              borderRadius: "10px",
              border: "none",
              color: "#FFFFFF",
              margin: "0 0 0 5px",
              position: "relative",
              bottom: "-5px"
            }}
          >
            分类
          </button>
        </Col>
        <Col span={24} style={{ marginTop: "15px" }}>
          <div
            style={{
              width: "240px",
              height: "178px",
              background: "rgba(255,255,255,1)",
              boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
              borderRadius: "16px",
              margin: "15px auto"
            }}
          >
            <img
              src={img7}
              style={{
                width: "240px",
                height: "136px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px"
              }}
            />
            <div
              style={{
                padding: "10px",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(0,0,0,1)",
                lineHeight: "24px"
              }}
            >
              相关视频1
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div
            style={{
              width: "240px",
              height: "178px",
              background: "rgba(255,255,255,1)",
              boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
              borderRadius: "16px",
              margin: "0 auto"
            }}
          >
            <img
              src={img7}
              style={{
                width: "240px",
                height: "136px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px"
              }}
            />
            <div
              style={{
                padding: "10px",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(0,0,0,1)",
                lineHeight: "24px"
              }}
            >
              相关视频1
            </div>
          </div>
        </Col> */
}
