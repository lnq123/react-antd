import React, { Component } from "react";
//import { HeaderWrapper, } from "./style";
import { Icon, Input } from "antd";
import "./style.css";
import { Row, Col } from "antd";
import ModalLogin from "./modalLogin";
import { connect } from 'react-redux'
import { withRouter } from "react-router";

let path = window.location.pathname;
class TopHeader extends Component {
  state = {
    modalLoginOpen: false,
    search: false
  }

  onClickLogin = () => {
    if (this.props.userData) {
      this.props.history.push('/admin/listarticles')
    }
    this.setState({
      modalLoginOpen: true,
    })
  }

  componentWillReceiveProps(nextProps) {
    path = window.location.pathname;
    // console.log(nextProps);
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
    const { search } = this.state
    return (
      <Row className="header">
        <ModalLogin modalLoginOpen={this.state.modalLoginOpen} onCloseLoginModal={this.onCloseLoginModal} />
        <Col span={24}>
          <Row className="headerWrapper">
            <Col span={5} className="test">
              <img onClick={() => { this.props.history.push('/') }} className="TitleImg" src="/image/6.png" alt="" />
            </Col>
            <Col className="test2" span={18}>
              <Row className="headerText">
                <Col className="test headerTextAlign" span={3}>
                  <span
                    className={path === '/' ? "HeaderTitleA clickable" : "HeaderTitle clickable"}
                    onClick={() => { this.props.history.push('/') }}
                  >
                    <span style={{ position: "relative" }}>
                      首页
                    <span className={path === '/' ? "index1" : ""} />
                    </span>
                  </span>
                </Col>
                <Col className="test headerTextAlign" span={3}>
                  <span
                    className={path === '/school' ? "HeaderTitleA clickable" : "HeaderTitle clickable"}
                    onClick={() => { this.props.history.push('/school') }}
                  >
                    <span style={{ position: "relative" }}>
                      阅链学校
                    <span className={path === '/school' ? "index3" : ""} />
                    </span>
                  </span>
                </Col>
                <Col className="test headerTextAlign" span={3}>
                  <span
                    className={path === '/activity' ? "HeaderTitleA clickable" : "HeaderTitle clickable"}
                    onClick={() => { this.props.history.push('/activity') }}
                  >
                    <span style={{ position: "relative" }}>
                      活动
                    <span className={path === '/activity' ? "index4" : ""} />
                    </span>
                  </span>
                </Col>
                <Col className="test headerTextAlign" span={3}>
                  <span
                    className={path === '/contact' ? "HeaderTitleA clickable" : "HeaderTitle clickable"}
                    onClick={() => { this.props.history.push('/contact') }}
                  >
                    <span style={{ position: "relative" }}>
                      联系我们
                    <span className={path === '/contact' ? "index5" : ""} />
                    </span>
                  </span>
                </Col>
                <Col span={7} className="test headerTextAlign">
                  {
                    search && <Input className="headerSearchBar" style={{ height: '25px' }} placeholder="" />
                  }
                </Col>
                <Col className="test headerTextAlign" span={1}>
                  <Icon className="clickable" onClick={() => this.setState({ search: true })} type="search" style={{ fontSize: 24, color: '#bcbcbc' }} />
                </Col>
                <Col span={4}>
                  <span className="HeaderLogin clickable" onClick={this.onClickLogin}>
                    <span>
                      {
                        this.props.userData ? '你好 ' + this.props.userData.phone : <Icon className="clickable" type="user" style={{ fontSize: 24, color: '#bcbcbc' }} />
                      }
                    </span>
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
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