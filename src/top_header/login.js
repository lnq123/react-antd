import React, { Component } from 'react'
import { Modal, Row, Col, Icon, Input, Button, Tabs } from 'antd'
import MyIcon from '../my_icon'

const TabPane = Tabs.TabPane

export default class LoginPanel extends Component {

  handleLogin () {
    this.props.onCloseLogin('Login')
  }

  handleSignup () {
    this.props.onCloseLogin('Signup')
  }

  render () {
    return (
      <Modal
        visible={ this.props.display }
        closable={ false }
        keyboard={ false }
        maskClosable={ false }
        footer={ null }
        width="410px"
        style={{
          padding: 0,
        }}
        bodyStyle={{
          background: '#fff',
          padding: 0,
          borderRadius: '16px',
        }}
        maskStyle={{
          background: 'linear-gradient(360deg,rgba(63,0,74,0.75) 0%,rgba(32,32,124,0.85) 100%)',
        }}
      >
        <div
          onClick={ () => this.props.onCloseLogin('Close') }
          style={{
            position: 'fixed',
            top: '30px',
            right: '40px',
            color: 'white',
            fontSize: '30px',
            float: 'right',
            marginRight: '6px',
            textAlign: 'center',
          }}
        >
          <MyIcon type="icon-close" />
        </div>
        <Row>
          <Col span={24}>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={24} style={{ textAlign: 'center' }}>
            <img
              src={ require('../image/logo_login.png') }
              style={{
                width: '176px',
                height: '167px',
                margin: '-49px 0 0 0'
              }}
            />
          </Col>
        </Row>
        <LoginForm
          onLogin={ this.handleLogin.bind(this) }
          onSignup={ this.handleSignup.bind(this) }
        />
        <div style={{ clear: 'both' }}></div>
      </Modal>
    )
  }
}

class MyTabBar extends Component {
  render () {
    let tabs = this.props.names.map((value, idx) => {
      return (
        <Col key={value} span={Math.floor(24 / this.props.names.length)}>
          <div
            style={{
              color: idx + 1 === this.props.active ? '#000' : '#BCBCBC',
              fontSize: '16px',
              fontWeight: idx + 1 === this.props.active ? '500' : '400',
              padding: '19px',
              borderBottom: idx + 1 === this.props.active ? '5px solid' : '0',
              borderImage: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%) 1',
            }}
            onClick={ () => this.props.handleChange(idx + 1) }
          >
            <div dangerouslySetInnerHTML={{ __html: value }}></div>
          </div>
        </Col>
      )
    })
    return (
      <div style={{
        display: 'flex',
        width: '100%',
        textAlign: 'center',
      }}>
        <Row style={{ width: '100%' }}>
          { tabs }
        </Row>
      </div>
    )
  }
}

class LoginForm extends Component {
  state = {
    activeKey: 1,
    visual: false,
  }

  handleChange (k) {
    this.setState((state) => {
      return { activeKey: parseInt(k) }
    })
  }

  toggleVisual () {
    this.setState((state) => {
      return { visual: !state.visual }
    })
  }

  render () {
    const names = ['登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录', '注&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp册']
    return (
      <Row type="flex" justify="center" style={{ margin: '16px 0 0 0' }}>
        <Col span={16}>
          <Tabs
            activeKey={ this.state.activeKey + '' }
            renderTabBar={
              () => {
                return (
                  <MyTabBar
                    active={ this.state.activeKey }
                    names={ names }
                    handleChange={ this.handleChange.bind(this) }
                  />
                )
              }
            }
            style={{ overflow: 'visible' }}
          >
            <TabPane key="1">
              <Row type="flex" justify="center" style={{ marginTop: '26px' }}>
                <Col span={24}>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="请输入邮箱地址"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '30px' }}>
                <Col span={24}>
                  <Input
                    type={ this.state.visual ? 'text' : 'password' }
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    suffix={<MyIcon type="icon-browse" style={{ fontSize: '20px', color: '#222222' }} onClick={() => this.toggleVisual()} />}
                    placeholder="密码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '30px' }}>
                <Col span={24}>
                  <Button
                    onClick={ () => this.props.onLogin() }
                    type="primary"
                    style={{
                      color: '#fff',
                      width: '100%',
                      height: '40px',
                      border: 0,
                      borderRadius: '18px',
                      background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                      boxShadow: '0px 5px 10px 0px rgba(255,79,81,0.66)',
                      fontSize: '16px',
                      fontWeight: '500',
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: '登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录' }}></div>
                  </Button>
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '20px', marginBottom: '40px' }}>
                <Col span={24}>
                  <div style={{
                    color: '#0058D1',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    fontSize: '14px',
                    fontWeight: '400',
                  }}>忘记密码？</div>
                </Col>
              </Row>
            </TabPane>
            <TabPane key="2">
              <Row type="flex" justify="center" style={{ marginTop: '25px' }}>
                <Col span={24}>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="请输入邮箱地址"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '25px' }}>
                <Col span={24}>
                  <Input
                    type="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="设置密码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '25px' }}>
                <Col span={24}>
                  <Input
                    type="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="重复确认密码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '30px', marginBottom: '60px' }}>
                <Col span={24}>
                  <Button
                    onClick={ () => this.props.onSignup() }
                    type="primary"
                    style={{
                      color: '#fff',
                      width: '100%',
                      height: '40px',
                      border: 0,
                      borderRadius: '18px',
                      background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                      boxShadow: '0px 5px 10px 0px rgba(255,79,81,0.66)',
                      fontSize: '16px',
                      fontWeight: '500',
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: '注&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp册' }}></div>
                  </Button>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    )
  }
}
