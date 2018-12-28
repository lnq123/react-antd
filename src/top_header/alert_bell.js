import React, { Component } from 'react'
import { Row, Col, Icon, Badge, List } from 'antd'
import MyIcon from '../my_icon'

export default class AlertBell extends Component {
  state ={
    hover: false,
  }

  handleEnter (e) {
    // console.log('enter')
    this.setState((state) => {
      return {
        hover: true,
      }
    })
  }

  handleLeave (e) {
    // console.log('leave')
    this.setState((state) => {
      return {
        hover: false,
      }
    })
  }

  render () {
    let list = null
    if (this.state.hover) {
      const data = [
        {
          icon: 'icon-collection',
          text: '关注收藏',
          count: 100,
        },
        {
          icon: 'icon-praise',
          text: '点 赞',
          count: 6,
        },
        {
          icon: 'icon-interactive',
          text: '评 论',
        },
        {
          icon: 'icon-money',
          text: '糖分收益',
        },
      ]
      list = (
        <div>
          <div style={{
            marginTop: '-23px',
            marginLeft: '-9px',
            width: 0,
            height: 0,
            borderTop: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderBottom: '20px solid #fff',
            borderLeft: '20px solid transparent',
          }}></div>
          <div style={{
              position: 'absolute',
              top: '50px',
              left: '-85px',
              width: '190px',
              background: '#fff',
              borderRadius: '10px',
              overflow: 'hidden',
          }}>
            <List
              itemLayout="horizontal"
              dataSource={ data }
              renderItem={item => {
                let badge = null
                if (item.count) {
                  badge = (
                    <Col span={4}>
                      <Badge count={item.count} style={{
                        background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                        color: '#fff',
                      }}></Badge>
                    </Col>
                  )
                }
                return (
                  <ItemRow
                    item={ item }
                    badge={ badge }
                  />
                )
              }}
            />
          </div>
        </div>
      )
    }
    return (
      <div
        onMouseEnter={ this.handleEnter.bind(this) }
        onMouseLeave={ this.handleLeave.bind(this) }
        style={{ position: 'relative' }}
      >
        <Badge
          status="default"
          style={{
            width: '11px',
            height: '11px',
            right: '4px',
            background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
            boxShadow: '0 0 0',
          }}
        >
          <MyIcon type="icon-remind" style={{ fontSize: '22px' }} />
        </Badge>
        { list }
      </div>
    )
  }
}

class ItemRow extends Component {
  state ={
    hover: false,
  }

  handleEnter () {
    // console.log('enter')
    this.setState((state) => {
      return {
        hover: true,
      }
    })
  }

  handleLeave () {
    // console.log('leave')
    this.setState((state) => {
      return {
        hover: false,
      }
    })
  }

  render () {
    const item = this.props.item
    const badge = this.props.badge
    return (
      <List.Item style={{
        border: 0,
        background: this.state.hover ? 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)' : '',
      }}>
        <Row
          onMouseEnter={ this.handleEnter.bind(this) }
          onMouseLeave={ this.handleLeave.bind(this) }
          style={{
            color: this.state.hover ? '#fff' : '#4A4A4A',
            fontSize: '16px',
            fontWeight: 400,
            width: '100%',
          }}
        >
          <Col span={4} offset={2} style={{ fontSize: '19px' }}>
            <MyIcon type={ item.icon } />
          </Col>
          <Col span={12}>
            { item.text }
          </Col>
          { badge }
        </Row>
      </List.Item>
    )
  }
}
