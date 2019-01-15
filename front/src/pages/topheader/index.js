import React, { Component } from "react";
//import { HeaderWrapper, } from "./style";
import { Icon } from "antd";
import "./header.css";
import { Row, Col } from "antd";
import ModalLogin from "./modalLogin";
const p = window.location.pathname;
var index = 1;
class TopHeader extends Component {
  state = {
    modalLoginOpen: true
  }

  componentWillMount() {
    p === "/news"
      ? (index = 2)
      : (p.indexOf("school")!==-1)
      ? (index = 3)
      : (p.indexOf("activity")!==-1)
      ? (index = 4)
      : (p.indexOf("contact")!==-1)
      ? (index = 5)
      : (index = 1);
  }

  onClickLogin = () => {
    this.setState({
      modalLoginOpen: true
    })
  }

  onCloseLoginModal = () => {
    this.setState({
      modalLoginOpen: false
    })
  }

  render() {
    return (
      <div className="headerWrapper ">
        <ModalLogin modalLoginOpen={this.state.modalLoginOpen} onCloseLoginModal={this.onCloseLoginModal}/>
        <Row className="HeaderTitleWidth" gutter={10}>
          <Col span={5}>
            <img className="TitleImg" src="/image/6.png" alt="" />
          </Col>
          <Col span={19}>
            <a
              className={index === 1 ? "HeaderTitleA" : "HeaderTitle"}
              href="/"
            >
              <span style={{ position: "relative" }}>
                首页
                <span className={index === 1 ? "index1" : ""} />
              </span>
            </a>
            <a
              className={index === 2 ? "HeaderTitleA" : "HeaderTitle"}
              href="/news"
            >
              <span style={{ position: "relative" }}>
                快讯
                <span className={index === 2 ? "index2" : ""} />
              </span>
            </a>
            <a
              className={index === 3 ? "HeaderTitleA" : "HeaderTitle"}
              href="/school"
            >
              <span style={{ position: "relative" }}>
                阅链学校
                <span className={index === 3 ? "index3" : ""} />
              </span>
            </a>
            <a
              className={index === 4 ? "HeaderTitleA" : "HeaderTitle"}
              href="/activity"
            >
              <span style={{ position: "relative" }}>
                活动
                <span className={index === 4 ? "index4" : ""} />
              </span>
            </a>
            <a
              className={index === 5 ? "HeaderTitleA" : "HeaderTitle"}
              href="/contact"
            >
              <span style={{ position: "relative" }}>
                联系我们
                <span className={index === 5 ? "index5" : ""} />
              </span>
            </a>
            <a className="HeaderSearchIcon" href="/contact">
              <span>
                <Icon type="search" style={{ fontSize: 24 }} />
              </span>
            </a>
            <a className="HeaderLogin" onClick={this.onClickLogin}>
              <span>登录/注册</span>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TopHeader;
