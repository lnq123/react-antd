import React, { Component } from "react";
//import { HeaderWrapper, } from "./style";
import { Icon } from "antd";
import "./header.css";
import { Row, Col } from "antd";
import ModalLogin from "./modalLogin";
import { connect } from 'react-redux'
import { withRouter } from "react-router";

let path = window.location.pathname;
class TopHeader extends Component {
  state = {
    modalLoginOpen: false
  }

  onClickLogin = () => {
    if (this.props.userData) {
      return
    }
    this.setState({
      modalLoginOpen: true
    })
  }

  componentWillReceiveProps(nextProps) {
    path = window.location.pathname;
    console.log(nextProps);
    if (nextProps.userData) {
      this.setState({
        modalLoginOpen: false
      })
    }
  }

  onCloseLoginModal = () => {
    this.setState({
      modalLoginOpen: false
    })
  }

  render() {
    return (
      <div className="headerWrapper ">
        {
          <ModalLogin modalLoginOpen={this.state.modalLoginOpen} onCloseLoginModal={this.onCloseLoginModal} />
        }
        <Row className="HeaderTitleWidth" gutter={10}>
          <Col span={5}>
            <img className="TitleImg" src="/image/6.png" alt="" />
          </Col>
          <Col span={19}>
            <span
              className={path === '/' ? "HeaderTitleA clickable" : "HeaderTitle clickable"}
              onClick={() => { this.props.history.push('/') }}
            >
              <span style={{ position: "relative" }}>
                首页
                <span className={path === '/' ? "index1" : ""} />
              </span>
            </span>
            <span
              className={path === '/school' ? "HeaderTitleA clickable" : "HeaderTitle clickable"}
              onClick={() => { this.props.history.push('/school') }}
            >
              <span style={{ position: "relative" }}>
                阅链学校
                <span className={path === '/school' ? "index3" : ""} />
              </span>
            </span>
            <span
              className={path === '/activity' ? "HeaderTitleA clickable" : "HeaderTitle clickable"}
              onClick={() => { this.props.history.push('/activity') }}
            >
              <span style={{ position: "relative" }}>
                活动
                <span className={path === '/activity' ? "index4" : ""} />
              </span>
            </span>
            <span
              className={path === '/contact' ? "HeaderTitleA clickable" : "HeaderTitle clickable"}
              onClick={() => { this.props.history.push('/contact') }}
            >
              <span style={{ position: "relative" }}>
                联系我们
                <span className={path === '/contact' ? "index5" : ""} />
              </span>
            </span>
            <span className="HeaderSearchIcon">
              <span>
                <Icon type="search" style={{ fontSize: 24 }} />
              </span>
            </span>
            <span className="HeaderLogin clickable" onClick={this.onClickLogin}>
              <span>
                {
                  this.props.userData ? '你好 ' + this.props.userData.phone : '登录/注册'
                }
              </span>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userData } = state
  return {
    userData,
  }
}

export default withRouter(connect(
  mapStateToProps,
)(TopHeader))