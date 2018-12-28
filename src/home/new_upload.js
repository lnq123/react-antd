import React from "react";
import MovieCard from "./movie_cards";

import { Row, Col, Icon, Divider } from "antd";

import img1 from "../image/006.jpg";

export default () => (
  <div style={{}}>
    <Row gutter={4}>
      <Col span={24}>
        <div style={{}}>
          <Row>
            <Col span={1} />
            <Col span={11}>
              <div
                style={{
                  margin: "50px 0 30px 0",
                  borderLeft: "8px solid #FF1367"
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "36px",
                    color: "#222222"
                  }}
                >
                  &nbsp;&nbsp;最新上传
                </span>
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "36px",
                    color: "#BCBCBC"
                  }}
                >
                  &nbsp;&nbsp;LASTEST
                </span>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: "20px",
                    color: "#BCBCBC"
                  }}
                >
                  &nbsp;&nbsp;查看更多 》
                </span>
              </div>
            </Col>
            <Col span={0} />

            <Col span={11}>
              <div style={{ float: "right", fontSize: 21, margin: "10% 0 0" }}>
                <span style={{ fontWeight: 500 }}>视频</span>
                <Divider type="vertical" />
                <span>文学</span>
                <Divider type="vertical" />
                <span>音乐</span>
                <Divider type="vertical" />
                <span>其他</span>
              </div>
            </Col>
            <Col span={1} />
          </Row>
        </div>
      </Col>

      <Col span={24}>
        <Row>
          <Col span={1} />
          <Col span={22}>
            <Row gutter={12}>
              <Col span={6}>
                <MovieCard
                  img={img1}
                  title1={"自媒体《独白》团队访问徐峥：..."}
                  title2={<span>&nbsp;</span>}
                  type2={"访谈"}
                  time={"1460:59"}
                />
              </Col>
              <Col span={6}>
                <MovieCard
                  img={img1}
                  title1={"自媒体《独白》团队访问徐峥：..."}
                  title2={<span>&nbsp;</span>}
                  type2={"访谈"}
                  time={"1460:59"}
                />
              </Col>
              <Col span={6}>
                <MovieCard
                  img={img1}
                  title1={"自媒体《独白》团队访问徐峥：..."}
                  title2={<span>&nbsp;</span>}
                  type2={"访谈"}
                  time={"1460:59"}
                />
              </Col>
              <Col span={6}>
                <MovieCard
                  img={img1}
                  title1={"自媒体《独白》团队访问徐峥：..."}
                  title2={<span>&nbsp;</span>}
                  type2={"访谈"}
                  time={"1460:59"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={1} />
        </Row>
      </Col>
      <Col span={24}>
        <div style={{ margin: "1% 0" }}>
          <Row>
            <Col span={1} />
            <Col span={22}>
              <Row gutter={12}>
                <Col span={6}>
                  <MovieCard
                    img={img1}
                    title1={"自媒体《独白》团队访问徐峥：..."}
                    title2={<span>&nbsp;</span>}
                    type2={"访谈"}
                    time={"1460:59"}
                  />
                </Col>
                <Col span={6}>
                  <MovieCard
                    img={img1}
                    title1={"自媒体《独白》团队访问徐峥：..."}
                    title2={<span>&nbsp;</span>}
                    type2={"访谈"}
                    time={"1460:59"}
                  />
                </Col>
                <Col span={6}>
                  <MovieCard
                    img={img1}
                    title1={"自媒体《独白》团队访问徐峥：..."}
                    title2={<span>&nbsp;</span>}
                    type2={"访谈"}
                    time={"1460:59"}
                  />
                </Col>
                <Col span={6}>
                  <MovieCard
                    img={img1}
                    title1={"自媒体《独白》团队访问徐峥：..."}
                    title2={<span>&nbsp;</span>}
                    type2={"访谈"}
                    time={"1460:59"}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={1} />
          </Row>
        </div>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={1} />
          <Col span={22}>
            <Row gutter={12}>
              <Col span={6}>
                <MovieCard
                  img={img1}
                  title1={"自媒体《独白》团队访问徐峥：..."}
                  title2={<span>&nbsp;</span>}
                  type2={"访谈"}
                  time={"1460:59"}
                />
              </Col>
              <Col span={6}>
                <MovieCard
                  img={img1}
                  title1={"自媒体《独白》团队访问徐峥：..."}
                  title2={<span>&nbsp;</span>}
                  type2={"访谈"}
                  time={"1460:59"}
                />
              </Col>
              <Col span={6}>
                <MovieCard
                  img={img1}
                  title1={"自媒体《独白》团队访问徐峥：..."}
                  title2={<span>&nbsp;</span>}
                  type2={"访谈"}
                  time={"1460:59"}
                />
              </Col>
              <Col span={6}>
                <MovieCard
                  img={img1}
                  title1={"自媒体《独白》团队访问徐峥：..."}
                  title2={<span>&nbsp;</span>}
                  type2={"访谈"}
                  time={"1460:59"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={1} />
        </Row>
      </Col>
    </Row>
  </div>
);
