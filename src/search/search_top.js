import React, { Component } from "react";
import { Row, Col } from "antd";
import MyIcon from "../my_icon";
import { Input } from "antd";
import { Tabs, Button, Pagination } from "antd";
import { Tag } from "antd";
import DropdownHot from "./dropdown_hot";
import Dropdowning from "./dropdown_ing";
import DropdownFunding from "./dropdown_funding";
import SearchList from "./search_list";
import SmallSearch from "./small_search";
import img1 from "../image/001.jpeg";
import img2 from "../image/007.jpg";
import img3 from "../image/004.jpeg";
// import img4 from "../image/004.jpeg";
// import img5 from "../image/005.jpg";
// import img6 from "../image/006.jpg";
// import img7 from "../image/007.jpg";
// import img8 from "../image/008.jpg";
// import img9 from "../image/009.jpg";
// import img10 from "../image/010.jpg";
// import img11 from "../image/011.jpg";
// import img12 from "../image/012.jpg";
// import img13 from "../image/013.jpg";
import Title from "../funding/title";
import UserCard from "./user_card";
const color1 =
  "linear-gradient(270deg,rgba(250,217,97,1) 0%,rgba(249,163,63,1) 100%)";
const fontcolor1 = "#FAAD14";
const color2 =
  "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)";
const fontcolor2 = "#FF1367";
const color3 =
  "linear-gradient(270deg,rgba(197,222,49,1) 0%,rgba(67,245,219,1) 100%)";
const fontcolor3 = "#52C41A";
const TabPane = Tabs.TabPane;

const { CheckableTag } = Tag;

class MyTag extends React.Component {
  state = {
    checked: false
  };

  render() {
    return (
      <CheckableTag
        {...this.props}
        checked={this.state.checked}
        onChange={this.handleChange}
      />
    );
  }
}

export default class SearchTop extends Component {
  state = {
    scrollOut: false,
    scrollThreshold: 600,

    type: {
      video: ["动画", "MTV", "真人秀", "访问", "电影", "电视剧", "其他"],
      music: [
        "POP",
        "RAP",
        "Country",
        "Rock",
        "Jazz",
        "R&B",
        "Hip Hop",
        "Classical",
        "DJ",
        "Indie",
        "Punk",
        "其他"
      ],
      doc: ["音乐剧本", "言情小说", "非虚构类", "玄幻", "恐怖", "其他"],
      other: ["编舞", "科技", "图片", "设计", "创意"]
    },
    results: [
      {
        title: "",
        imgSrc: "",
        likes: "",
        watched: ""
      }
    ]
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll(e) {
    //console.log(document.documentElement.scrollTop)
    if (
      !this.state.scrollOut &&
      document.documentElement.scrollTop > this.state.scrollThreshold
    ) {
      this.setState(() => {
        return { scrollOut: true };
      });
    } else if (
      this.state.scrollOut &&
      document.documentElement.scrollTop < this.state.scrollThreshold
    ) {
      this.setState(() => {
        return { scrollOut: false };
      });
    }
  }

  handleChange = checked => {
    this.setState({ checked });
  };
  render() {
    let videos = this.state.type.video.map((v, k) => {
      return (
        <span style={{ margin: "0 10px 0 0" }} key={k}>
          <MyTag>{v}</MyTag>
        </span>
      );
    });
    let musics = this.state.type.music.map((v, k) => {
      return (
        <span key={k} style={{ margin: "0 10px 0 0" }}>
          <MyTag>{v}</MyTag>
        </span>
      );
    });
    let docs = this.state.type.doc.map((v, k) => {
      return (
        <span key={k} style={{ margin: "0 10px 0 0" }}>
          <MyTag>{v}</MyTag>
        </span>
      );
    });
    let others = this.state.type.other.map((v, k) => {
      return (
        <span key={k} style={{ margin: "0 10px 0 0" }}>
          <MyTag>{v}</MyTag>
        </span>
      );
    });
    const project = () => (
      <Row style={{ borderTop: "1px solid #D8D8D8" }}>
        <Col span={7}>
          <div style={{ margin: "2% 0" }}>
            <Input
              placeholder="输入关键字搜索作品、众筹项目或用户"
              prefix={
                <MyIcon
                  type="icon-search"
                  style={{
                    fontSize: 20,
                    color: "rgba(0,0,0,.25)"
                  }}
                />
              }
            />
          </div>
        </Col>
        <Col span={17}>
          <Button
            style={{
              margin: "1% 1%",
              borderRadius: "18px",
              background:
                "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 16,
              height: "36px",
              lineHeight: "16px"
            }}
          >
            搜索
          </Button>
        </Col>

        <Col span={22}>
          <div style={{ margin: "1% 0" }}>
            <Row>
              <Col span={2}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "rgba(74,74,74,1)",
                    lineHeight: "22px"
                  }}
                >
                  视频
                </div>
              </Col>
              <Col span={22}>
                <div
                  style={{
                    color: "#9B9B9B",
                    fontSize: 14,
                    lineHeight: "30px"
                  }}
                >
                  <MyTag>
                    <span style={{ margin: "0 10px 0 0" }}>全部</span>
                  </MyTag>
                  {videos}
                  {videos}
                  {videos}
                  {videos}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={2} />

        <Col span={22}>
          <div style={{ margin: "1% 0" }}>
            <Row>
              <Col span={2}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "rgba(74,74,74,1)",
                    lineHeight: "22px"
                  }}
                >
                  音乐
                </div>
              </Col>
              <Col span={22}>
                <div
                  style={{
                    color: "#9B9B9B",
                    fontSize: 14,
                    lineHeight: "30px"
                  }}
                >
                  <MyTag>
                    <span style={{ margin: "0 10px 0 0" }}>全部</span>
                  </MyTag>
                  {musics}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={2} />
        <Col span={22}>
          <div style={{ margin: "1% 0" }}>
            <Row>
              <Col span={2}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "rgba(74,74,74,1)",
                    lineHeight: "22px"
                  }}
                >
                  文学
                </div>
              </Col>
              <Col span={22}>
                <div
                  style={{
                    color: "#9B9B9B",
                    fontSize: 14,
                    lineHeight: "30px"
                  }}
                >
                  <MyTag>
                    <span style={{ margin: "0 10px 0 0" }}>全部</span>
                  </MyTag>{" "}
                  {docs}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={2} />
        <Col span={22}>
          <div style={{ margin: "1% 0" }}>
            <Row>
              <Col span={2}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "rgba(74,74,74,1)",
                    lineHeight: "22px"
                  }}
                >
                  其他
                </div>
              </Col>
              <Col span={22}>
                <div
                  style={{
                    color: "#9B9B9B",
                    fontSize: 14,
                    lineHeight: "30px"
                  }}
                >
                  <MyTag>
                    <span style={{ margin: "0 10px 0 0" }}>全部</span>
                  </MyTag>{" "}
                  {others}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={3}>
              <div style={{ margin: "20px 0 20px" }}>
                <MyIcon
                  type="icon-rank"
                  style={{
                    fontSize: 24,
                    float: "left",
                    color: "#FF1367"
                  }}
                />
                <DropdownHot />
              </div>
            </Col>
            <Col span={3}>
              <div style={{ margin: "20px 0 20px" }}>
                <MyIcon
                  type="icon-time"
                  style={{
                    fontSize: 24,
                    float: "left",
                    color: "#FF1367"
                  }}
                />
                <Dropdowning />
              </div>
            </Col>
            <Col span={2} />
          </Row>
        </Col>

        {this.state.scrollOut ? (
          <Col span={24}>
            <div
              style={{
                position: "fixed",
                top: "42px",
                width: "100%",
                height: 60,
                zIndex: 99,
                boxShadow: "0px 2px 31px 0px rgba(205,205,205,0.27)}",
                background: "#FFFFFF"
              }}
            >
              <SmallSearch />
            </div>
          </Col>
        ) : (
          ""
        )}
        <Col
          span={24}
          style={{
            boxShadow: "0px 2px 31px 0px rgba(205,205,205,0.27)",
            padding: "1px"
          }}
        >
          <SearchList />
        </Col>
      </Row>
    );
    const funding = () => (
      <Row style={{ borderTop: "1px solid #D8D8D8" }}>
        <Col span={7}>
          <div style={{ margin: "2% 0" }}>
            <Input
              placeholder="输入关键字搜索作品、众筹项目或用户"
              prefix={
                <MyIcon
                  type="icon-search"
                  style={{
                    fontSize: 20,
                    color: "rgba(0,0,0,.25)"
                  }}
                />
              }
            />
          </div>
        </Col>
        <Col span={3}>
          <Button
            style={{
              margin: "8px 15px",
              borderRadius: "18px",
              background:
                "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 16,
              height: "36px",
              lineHeight: "16px"
            }}
          >
            搜索
          </Button>
        </Col>
        <Col span={3} style={{ padding: "12px" }}>
          <MyIcon
            type="icon-rank"
            style={{
              fontSize: 24,
              float: "left",
              color: "#FF1367"
            }}
          />
          <DropdownHot />
        </Col>
        <Col span={3} style={{ padding: "12px" }}>
          <MyIcon
            type="icon-time"
            style={{
              fontSize: 24,
              float: "left",
              color: "#FF1367"
            }}
          />
          <DropdownFunding />
        </Col>
        <Col
          span={24}
          style={{
            margin: "50px 0 0"
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              minWidth: "1200px",
              margin: "auto"
            }}
          >
            <Title
              img={img1}
              color={color1}
              fontcolor={fontcolor1}
              percent={25}
              money={"16,000"}
            />
            <Title
              img={img2}
              color={color2}
              percent={0}
              fontcolor={fontcolor2}
              money={0}
            />
            <Title
              img={img3}
              fontcolor={fontcolor3}
              color={color3}
              percent={100}
              money={"20,000"}
            />
            <div style={{ margin: "48px 0px 80px 900px" }}>
              <Pagination defaultCurrent={2} total={200} />
            </div>
          </div>
        </Col>
      </Row>
    );
    const user = () => (
      <Row
        style={{
          borderTop: "1px solid #D8D8D8",
          color: "#CDCDCD"
        }}
      >
        <Col span={7}>
          <div style={{ margin: "2% 0" }}>
            <Input
              placeholder="输入关键字搜索作品、众筹项目或用户"
              prefix={
                <MyIcon
                  type="icon-search"
                  style={{
                    fontSize: 20,
                    color: "rgba(0,0,0,.25)"
                  }}
                />
              }
            />
          </div>
        </Col>
        <Col span={17}>
          <Button
            style={{
              margin: "1% 1%",
              borderRadius: "18px",
              background:
                "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: 16,
              height: "36px",
              lineHeight: "16px"
            }}
          >
            搜索
          </Button>
        </Col>

        <Col span={22}>
          <div style={{ margin: "1% 0" }}>
            <Row>
              <Col span={2}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "rgba(74,74,74,1)",
                    lineHeight: "22px"
                  }}
                >
                  视频类
                </div>
              </Col>
              <Col span={22}>
                <div
                  style={{
                    color: "#9B9B9B",
                    fontSize: 14,
                    lineHeight: "30px"
                  }}
                >
                  <MyTag>
                    <span style={{ margin: "0 10px 0 0" }}>全部</span>
                  </MyTag>
                  {videos}
                  {videos}
                  {videos}
                  {videos}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={2} />

        <Col span={22}>
          <div style={{ margin: "1% 0" }}>
            <Row>
              <Col span={2}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "rgba(74,74,74,1)",
                    lineHeight: "22px"
                  }}
                >
                  音乐类
                </div>
              </Col>
              <Col span={22}>
                <div
                  style={{
                    color: "#9B9B9B",
                    fontSize: 14,
                    lineHeight: "30px"
                  }}
                >
                  <MyTag>
                    <span style={{ margin: "0 10px 0 0" }}>全部</span>
                  </MyTag>
                  {musics}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={2} />
        <Col span={22}>
          <div style={{ margin: "1% 0" }}>
            <Row>
              <Col span={2}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "rgba(74,74,74,1)",
                    lineHeight: "22px"
                  }}
                >
                  文学类
                </div>
              </Col>
              <Col span={22}>
                <div
                  style={{
                    color: "#9B9B9B",
                    fontSize: 14,
                    lineHeight: "30px"
                  }}
                >
                  <MyTag>
                    <span style={{ margin: "0 10px 0 0" }}>全部</span>
                  </MyTag>{" "}
                  {docs}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={2} />
        <Col span={22}>
          <div style={{ margin: "1% 0" }}>
            <Row>
              <Col span={2}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "rgba(74,74,74,1)",
                    lineHeight: "22px"
                  }}
                >
                  其他
                </div>
              </Col>
              <Col span={22}>
                <div
                  style={{
                    color: "#9B9B9B",
                    fontSize: 14,
                    lineHeight: "30px"
                  }}
                >
                  <MyTag>
                    <span style={{ margin: "0 10px 0 0" }}>全部</span>
                  </MyTag>{" "}
                  {others}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={3}>
              <div style={{ margin: "20px 0 20px" }}>
                <MyIcon
                  type="icon-rank"
                  style={{
                    fontSize: 24,
                    float: "left",
                    color: "#FF1367"
                  }}
                />
                <DropdownHot />
              </div>
            </Col>
          </Row>
        </Col>

        <Col
          span={24}
          style={{
            padding: "1px",
            borderRadius: "16px",
            marginBottom: 18
          }}
        >
          <UserCard />
        </Col>
        <Col
          span={24}
          style={{
            padding: "1px",
            borderRadius: "16px",
            marginBottom: 18
          }}
        >
          <UserCard />
        </Col>
        <Col
          span={24}
          style={{
            padding: "1px",
            borderRadius: "16px",
            marginBottom: 18
          }}
        >
          <UserCard />
        </Col>
        <Col
          span={24}
          style={{
            padding: "1px",
            borderRadius: "16px",
            marginBottom: 18,
            textAlign: "right"
          }}
        >
          <Pagination defaultCurrent={2} total={200} />
        </Col>
      </Row>
    );
    return (
      <div>
        <Row>
          <Col span={24}>
            <div style={{ margin: "55px 0px 8px " }}>
              <Row>
                <Col span={2} />
                <Col span={20}>
                  <div style={{}}>
                    <Tabs defaultActiveKey="1" size={"large"}>
                      <TabPane tab="作&nbsp;&nbsp;品" key="1">
                        {project()}
                      </TabPane>

                      <TabPane tab="众&nbsp;&nbsp;筹" key="2">
                        {funding()}
                      </TabPane>
                      {/* 用户界面 */}
                      <TabPane tab="用&nbsp;&nbsp;户" key="3">
                        {user()}
                      </TabPane>
                      <TabPane tab="剧组服务" key="4" />
                    </Tabs>
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
