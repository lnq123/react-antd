import React from "react";
import MovieCards from "./movie_cards";

import { Row, Col, Button } from "antd";

import img1 from "../image/001.jpeg";
import img3 from "../image/003.jpg";
import img4 from "../image/004.jpeg";
import img5 from "../image/005.jpg";
import img6 from "../image/006.jpg";
import img7 from "../image/007.jpg";
import img8 from "../image/008.jpg";
import img9 from "../image/009.jpg";
import img10 from "../image/010.jpg";
import img11 from "../image/011.jpg";
import img12 from "../image/012.jpg";
import img13 from "../image/013.jpg";
import MyIcon from "../my_icon";

export default () => (
  <div style={{ margin: "1% 0" }}>
    <Row>
      <Col offset={1} span={22}>
        <Row>
          <Col span={12}>
            <div
              style={{
                margin: "50px 0 30px 0",
                borderLeft: "8px solid #FF1367"
              }}
            >
              <span
                style={{ fontWeight: 600, fontSize: "36px", color: "#222222" }}
              >
                &nbsp;&nbsp;我的关注
              </span>
              <span
                style={{ fontWeight: 600, fontSize: "36px", color: "#BCBCBC" }}
              >
                &nbsp;&nbsp;FAVOURATE
              </span>
              <span
                style={{ fontWeight: 400, fontSize: "20px", color: "#BCBCBC" }}
              >
                &nbsp;&nbsp;查看更多 》
              </span>
            </div>
          </Col>
          <Col span={12} />
        </Row>

        <Row gutter={12}>
          <Col span={7}>
            <MovieCards
              img={img13}
              title1={"自媒体《独白》团队访问徐峥：药神不是药神,徐峥还是徐峥"}
              type1={"视频"}
              type2={"访谈"}
              time={"1460:59"}
            />
          </Col>
          <Col span={4}>
            <MovieCards
              img={img10}
              title1={"穿越清朝智斗妃嫔成皇后一统后宫"}
              type1={"文学"}
              type2={"言情"}
              time={"长篇小说"}
            />
          </Col>
          <Col span={6}>
            <MovieCards
              img={img7}
              title1={"BABEL"}
              title2={"Mumford & Sons"}
              type1={"音乐"}
              type2={"独立摇滚"}
              time={"10:59"}
            />
          </Col>
          <Col span={7}>
            <MovieCards
              img={img4}
              title1={"自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"}
              type1={"其他"}
              type2={"编舞"}
              time={"1460:59"}
            />
          </Col>
        </Row>

        <Row gutter={12}>
          <Col span={24}>
            <div style={{ margin: "1% 0 1%" }}>
              <Row gutter={12}>
                <Col span={4}>
                  <MovieCards
                    img={img12}
                    title1={"穿越清朝智斗妃嫔成皇后一统后宫"}
                    type1={"文学"}
                    type2={"言情"}
                    time={"长篇小说"}
                  />
                </Col>
                <Col span={7}>
                  <MovieCards
                    img={img9}
                    title1={
                      "自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"
                    }
                    type1={"其他"}
                    type2={"访谈"}
                    time={"1460:59"}
                  />
                </Col>
                <Col span={7}>
                  <MovieCards
                    img={img1}
                    title1={
                      "自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"
                    }
                    type1={"视频"}
                    type2={"访谈"}
                    time={"1460:59"}
                  />
                </Col>
                <Col span={6}>
                  <MovieCards
                    img={img5}
                    title1={"BABEL"}
                    time={"10:59"}
                    title2={"Mumford & Sons"}
                    type1={"音乐"}
                    type2={"独立摇滚"}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
