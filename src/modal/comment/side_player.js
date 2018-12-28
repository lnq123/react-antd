import React from "react";
import { Row, Col } from "antd";
import MovieList from "../movie/movie_list";
import img1 from "../../image/001.jpeg";
import img3 from "../../image/003.jpg";
import img4 from "../../image/004.jpeg";
import img5 from "../../image/005.jpg";
import img6 from "../../image/006.jpg";
import img7 from "../../image/007.jpg";
import img8 from "../../image/008.jpg";
import img9 from "../../image/009.jpg";
import img10 from "../../image/010.jpg";
import img11 from "../../image/011.jpg";
import img12 from "../../image/012.jpg";
import img13 from "../../image/013.jpg";
const time = "1460:59";

export default () => (
  <div style={{ height: 720 }}>
    <div
      style={{
        margin: "2% 0  0",
        background: "#FFFFFF",
        borderTopRightRadius: "18px",
        borderTopLeftRadius: "18px",
        padding: "4%",
        fontWeight: 500
      }}
    >
      视频表列
    </div>

    <div
      style={{
        backgroundColor: "#EEEEEE",
        borderBottomRightRadius: "18px",
        borderBottomLeftRadius: "18px",
        height: "500px"
      }}
    >
      <div
        style={{
          height: "482px",
          overflow: "auto"
        }}
      >
        <Row>
          <Col span={1} />
          <Col span={22}>
            <Row>
              <Col span={24}>
                <div style={{ margin: "6% 0 3%" }}>
                  <MovieList title1={"相关视频1"} img={img6} time={time} />
                </div>
              </Col>
              <Col span={24}>
                <div style={{ margin: "3% 0" }}>
                  <MovieList title1={"相关视频1"} img={img3} time={time} />
                </div>
              </Col>
              <Col span={24}>
                <div style={{ margin: "3% 0" }}>
                  <MovieList title1={"相关视频1"} img={img4} time={time} />
                </div>
              </Col>
              <Col span={24}>
                <div style={{ margin: "3% 0" }}>
                  <MovieList title1={"相关视频1"} img={img7} time={time} />
                </div>
              </Col>
              <Col span={24}>
                <div style={{ margin: "3% 0" }}>
                  <MovieList title1={"相关视频1"} img={img8} time={time} />
                </div>
              </Col>
              <Col span={24}>
                <div style={{ margin: "3% 0" }}>
                  <MovieList title1={"相关视频1"} img={img9} time={time} />
                </div>
              </Col>
              <Col span={24}>
                <div style={{ margin: "3% 0" }}>
                  <MovieList title1={"相关视频1"} img={img10} time={time} />
                </div>
              </Col>
              <Col span={24}>
                <div style={{ margin: "3% 0" }}>
                  <MovieList title1={"相关视频1"} img={img11} time={time} />
                </div>
              </Col>
              <Col span={24}>
                <div style={{ margin: "3% 0" }}>
                  <MovieList title1={"相关视频1"} img={img12} time={time} />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={1} />
        </Row>
      </div>
    </div>
  </div>
);
