import React from "react";
import { Row, Col } from "antd";
import faker from "faker";
import { Pagination } from "antd";
import { Tabs } from "antd";
import { Input } from "antd";
import Comment from "../modal/comment/comment_editor";
import MyIcon from "../my_icon";
import DDate from "../search/dropdown_date";
import DProject from "../search/dropdown_project";
import MovieCard from "./movie_cards";
// import img1 from "../image/001.jpeg";
// import img3 from "../image/003.jpg";
// import img4 from "../image/004.jpeg";
// import img5 from "../image/005.jpg";
// import img6 from "../image/006.jpg";
// import img7 from "../image/007.jpg";
// import img8 from "../image/008.jpg";
import img9 from "../image/009.jpg";
// import img10 from "../image/010.jpg";
// import img11 from "../image/011.jpg";
// import img12 from "../image/012.jpg";
import img13 from "../image/013.jpg";
import { Select } from "antd";

const Option = Select.Option;
const TabPane = Tabs.TabPane;
export default () => (
  <Row type="flex" justify="center" style={{ background: "#F8F8F8" }}>
    <Col
      span={24}
      style={{
        height: "42px",
        background:
          "linear-gradient(135deg,rgba(48,35,174,1) 0%,rgba(200,109,215,1) 100%)"
      }}
    />
    <Col
      span={24}
      style={{
        marginTop: "15px",
        width: "1280px",
        background: "rgba(255,255,255,1)",
        boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
        borderRadius: "16px",
        position: "relative"
      }}
    >
      <img alt=""
        src={img9}
        style={{
          width: "1280px",
          height: "101px",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px"
        }}
      />
      <img alt=""
        src={faker.image.avatar()}
        style={{
          width: "100px",
          height: "100px",
          border: "5px solid rgba(255,255,255,1)",
          borderRadius: "50px",
          position: "absolute",
          left: "46%",
          top: "35px"
        }}
      />

      <div
        style={{
          width: "72px",
          height: "25px",
          fontSize: "18px",
          fontWeight: 500,
          color: "rgba(74,74,74,1)",
          lineHeight: "25px",
          margin: "44px auto 9px auto"
        }}
      >
        导演老安
      </div>
      <div
        style={{
          fontSize: 12,
          color: "#4A4A4A",
          lineHeight: "18px",
          textAlign: "center"
        }}
      >
        <span style={{ color: "#FF1367" }}>100 </span>作品{" "}
        <span style={{ color: "#FF1367" }}>202.33 </span>万 粉丝
      </div>
      <div
        style={{
          width: "35%",
          height: "36px",
          fontSize: "12px",
          fontWeight: 400,
          color: "rgba(155,155,155,1)",
          lineHeight: "18px",
          textAlign: "center",
          margin: "8px auto 11px auto"
        }}
      >
        {" "}
        近意，生言有我感際英面，別一他草；社團時任光地？住情半電地裡看畫朋我我室劇。
        颠倒是非水电费水电费水电费
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            width: "75px",
            height: "24px",
            background:
              "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
            borderRadius: "18px",
            color: "#FFFFFF",
            border: "none",
            marginRight: "18px"
          }}
        >
          关&nbsp;注
        </button>
        <button
          style={{
            width: "75px",
            height: "24px",
            color: "#FF1367",
            background: "#FFFFFF",
            borderRadius: "18px",
            border: "1px solid rgba(255,19,103,1)"
          }}
        >
          私&nbsp;信
        </button>
      </div>
      <div>
        <Tabs defaultActiveKey="1" tabBarStyle={{ textAlign: "center" }}>
          <TabPane tab="视频&nbsp;89" key="1" />
          <TabPane tab="文学&nbsp;10" key="2" />
          <TabPane tab="音乐&nbsp;1" key="3" />
          <TabPane tab="图片" key="4" />
        </Tabs>
      </div>
      <div style={{ marginLeft: "360px", display: "flex", marginTop: "10px" }}>
        <Input
          style={{ width: 280 }}
          placeholder="搜索列表 "
          prefix={
            <MyIcon
              type="icon-search"
              style={{ fontSize: 20, color: "rgba(0,0,0,.25)" }}
            />
          }
        />
        <span style={{ margin: "0 30px" }}>
          <DDate />
        </span>
        <DProject style={{ marginLeft: "360px" }} />
      </div>
      <Row
        gutter={8}
        style={{ margin: "15px auto", width: 1250 }}
        type="flex"
        justify="space-around"
      >
        <Col span={4}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4} style={{ marginTop: 15 }}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4} style={{ marginTop: 15 }}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4} style={{ marginTop: 15 }}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4} style={{ marginTop: 15 }}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4} style={{ marginTop: 15 }}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
        <Col span={4} style={{ marginTop: 15 }}>
          <MovieCard
            img={img13}
            title1={"自媒体《独白》团队访问徐峥：药神"}
            type1={"视频"}
            type2={"访谈"}
            time={"1460:59"}
          />
        </Col>
      </Row>

      <div style={{ margin: "40px 0 18px", textAlign: "center" }}>
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </Col>
    <Col
      span={6}
      style={{
        width: "285px",
        height: "380px",
        background: "rgba(255,255,255,1)",
        boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
        borderRadius: "16px",
        margin: "20px 16px 0 0"
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 400,
          color: "rgba(74,74,74,1)",
          lineHeight: "28px",
          padding: 20
        }}
      >
        最近访客
      </div>
      <div style={{ display: "flex", textAlign: "center",padding: 10, }}>
        <div>
          <img
            src={faker.image.avatar()}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px"
            }}
          />
          <div>演员丽娜朱 …</div>
        </div>
        <div>
          <img
            src={faker.image.avatar()}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px"
            }}
          />
          <div>演员丽娜朱 …</div>
        </div>
        <div>
          <img
            src={faker.image.avatar()}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px"
            }}
          />
          <div>演员丽娜朱 …</div>
        </div>
      </div>
      <div style={{padding: 10, display: "flex", textAlign: "center" }}>
        <div>
          <img
            src={faker.image.avatar()}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px"
            }}
          />
          <div>演员丽娜朱 …</div>
        </div>
        <div>
          <img
            src={faker.image.avatar()}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px"
            }}
          />
          <div>演员丽娜朱 …</div>
        </div>
        <div>
          <img
            src={faker.image.avatar()}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px"
            }}
          />
          <div>演员丽娜朱 …</div>
        </div>
      </div>
      <div style={{ padding: 10,display: "flex", textAlign: "center" }}>
        <div>
          <img
            src={faker.image.avatar()}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px"
            }}
          />
          <div>演员丽娜朱 …</div>
        </div>
        <div>
          <img
            src={faker.image.avatar()}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px"
            }}
          />
          <div>演员丽娜朱 …</div>
        </div>
        <div>
          <img
            src={faker.image.avatar()}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px"
            }}
          />
          <div>演员丽娜朱 …</div>
        </div>
      </div>
    </Col>
    <Col
      span={18}
      style={{
        width: "980px",
        background: "rgba(255,255,255,1)",
        boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
        borderRadius: "18px",
        margin: "20px 0 20px 0",
        
      }}
    >
      <Comment />
      <div style={{ margin: "40px 0 18px", textAlign: "right" }}>
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </Col>
  </Row>
);
