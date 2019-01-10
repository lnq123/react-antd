import React, { Component } from 'react'
import { Icon, Carousel, Row, Col, Timeline, Spin } from 'antd'
import './style.css'
import { quickNewsService } from '../../_services'
var moment = require('moment');


const imgBackground = "/image/school_backkground.png"

const loadingSpinner = <Icon type="loading" style={{ fontSize: 80 }} spin />

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const listData2 = [];
for (let i = 0; i < 5; i++) {
  listData2.push({
    title: `首枚 Block III GPS 衛星順利升空`,
    user: '昨天'
  });
}

class News extends Component {

  state = {
    newsList: []
  }

  async componentDidMount() {
    const ret = await quickNewsService.get()
    if (ret) {
      this.setState({
        newsList: ret
      })
    }
  }

  render() {
    const { newsList } = this.state
    let tmpDay = ''
    return (
      <div className="newsPage">
        <Row style={{ marginTop: '55px', marginLeft: '35px' }}>
          <Col span={16}>
            <Timeline>
              {
                newsList && newsList.length === 0 &&
                <div className="loadingSpinner"><Spin indicator={loadingSpinner} /></div>
              }
              {
                newsList && newsList.length > 0 &&
                newsList.map((item, index) => {
                  if (moment(item.createdAt).format('Do') !== tmpDay) {
                    tmpDay = moment(item.createdAt).format('Do')
                    return (
                      <React.Fragment>
                        <Timeline.Item className="newspageTimeline" dot={
                          <div>
                            <Row className="newspageDayDot">
                              <Col span={24} className="newspageDayDotGold">
                                {moment(item.createdAt).format('MMM')}.
                              </Col>
                              <Col span={24} className="newspageDayDotBlack">
                                {moment(item.createdAt).format('Do')}
                              </Col>
                            </Row>
                          </div>
                        }>
                        </Timeline.Item>
                        <Timeline.Item dot={<div className="newspageGoldDot"></div>}>
                          <span className="time" >
                            {moment(item.createdAt).format('LT')}
                          </span>
                          <span className="title" >
                            {item.title}
                          </span>
                          <div className="content" >
                            {item.content}
                          </div>
                          <div>
                            <Row className="newspageNewsItem" >
                              <Col span={3}>
                                <IconText type="like" text="23,999" />
                              </Col>
                              <Col span={17}>
                                <IconText type="eye" text="23,999" />
                              </Col>
                              <Col span={4}>
                                分享: <Icon type="qq" style={{ fontSize: 18 }} /> <Icon type="weibo-circle" style={{ fontSize: 18 }} />
                              </Col>
                            </Row>
                          </div>
                        </Timeline.Item>
                      </React.Fragment>
                    )
                  } else {
                    return (
                      <Timeline.Item dot={<div className="newspageGoldDot"></div>}>
                        <span className="time" >
                          {moment(item.createdAt).format('LT')}
                        </span>
                        <span className="title" >
                          {item.title}
                        </span>
                        <div className="content" >
                          {item.content}
                        </div>
                        <div>
                          <Row className="newspageNewsItem" >
                            <Col span={3}>
                              <IconText type="like" text="23,999" />
                            </Col>
                            <Col span={17}>
                              <IconText type="eye" text="23,999" />
                            </Col>
                            <Col span={4}>
                              分享: <Icon type="qq" style={{ fontSize: 18 }} /> <Icon type="weibo-circle" style={{ fontSize: 18 }} />
                            </Col>
                          </Row>
                        </div>
                      </Timeline.Item>
                    )
                  }
                }
                )
              }
              {/* <Timeline.Item dot={<div className="newspageGoldDot"></div>}>
                <span className="time" >
                  23:22
                </span>
                <span className="title" >
                  分析 | CoinBank分析师：数字资产市场已呈现出马太效应
                </span>
                <div className="content" >
                  近日，CoinBank的分析师Jack Gu表示：目前数字资产领域正处于周期尾声，距离新的周期起点还有段磨合的时间，在这期间市场已呈现出马太效应，即是指拥有资金储备的企业已开始新的布局和扩张，并为下一次浪潮做准备，而经历过资金流失或债务重组的企业，还在寻求着突破的机会，两者在目前时间节点下可能实力差距并不太大，但随着时间的推移和新的周期到来，差距将会变得尤为明显，并从共生、共存状态转变为残酷的共争。
                </div>
                <div>
                  <img className="imgBackground" src={imgBackground} alt="" />
                </div>
                <div>
                  <Row className="newspageNewsItem" >
                    <Col span={3}>
                      <IconText type="like" text="23,999" />
                    </Col>
                    <Col span={17}>
                      <IconText type="eye" text="23,999" />
                    </Col>
                    <Col span={4}>
                      分享: <Icon type="qq" style={{ fontSize: 18 }} /> <Icon type="weibo-circle" style={{ fontSize: 18 }} />
                    </Col>
                  </Row>
                </div>
              </Timeline.Item>
              <Timeline.Item dot={<div className="newspageNoDot"></div>}>
                <div>
                </div>
              </Timeline.Item> */}
            </Timeline>


          </Col>

          <Col span={8}>
            <Row>
              <Col style={{ marginBottom: '55px' }}>
                <Row style={{ marginBottom: '25px' }}>
                  <Col span={18} style={{ fontSize: '28px', color: 'black' }}>
                    阅链学院
                  </Col>
                  <Col span={6} style={{ color: '#999999', fontSize: '20px', marginTop: '8px' }}>
                    更多 <Icon type="right" />
                  </Col>
                </Row>
                <Carousel autoplay className="borderGrey">
                  <Row className="borderBlack homepageSchoolBlock">
                    <Col style={{ fontSize: '22px', color: 'black', marginBottom: '5px' }}>
                      第一期
                      </Col>
                    <Col style={{ fontSize: '24px', color: 'black', marginBottom: '5px' }}>
                      开启区块链创业之路
                      </Col>
                    <Col style={{ fontSize: '22px', color: '#EBC44D', marginBottom: '30px' }}>
                      ¥18888
                      </Col>
                    <Col span={11}>
                      <img width={142} height={142} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                    </Col>
                    <Col span={12}>
                      <Row>
                        <Col style={{ fontSize: '24px', color: 'black', marginBottom: '15px' }}>
                          优妮塔
                          </Col>
                        <Col style={{ fontSize: '16px', color: '#666666', marginBottom: '15px' }}>
                          阅链学院主讲人
                          </Col>
                        <Col style={{ fontSize: '16px', color: '#666666' }}>
                          “创业之路的迷思为你一 一解答”
                          </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="borderBlack homepageSchoolBlock">
                    <Col style={{ fontSize: '22px', color: 'black', marginBottom: '5px' }}>
                      第一期
                      </Col>
                    <Col style={{ fontSize: '24px', color: 'black', marginBottom: '5px' }}>
                      开启区块链创业之路
                      </Col>
                    <Col style={{ fontSize: '22px', color: '#EBC44D', marginBottom: '30px' }}>
                      ¥18888
                      </Col>
                    <Col span={11}>
                      <img width={142} height={142} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                    </Col>
                    <Col span={12}>
                      <Row>
                        <Col style={{ fontSize: '24px', color: 'black', marginBottom: '15px' }}>
                          优妮塔
                          </Col>
                        <Col style={{ fontSize: '16px', color: '#666666', marginBottom: '15px' }}>
                          阅链学院主讲人
                          </Col>
                        <Col style={{ fontSize: '16px', color: '#666666' }}>
                          “创业之路的迷思为你一 一解答”
                          </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="borderBlack homepageSchoolBlock">
                    <Col style={{ fontSize: '22px', color: 'black', marginBottom: '5px' }}>
                      第一期
                      </Col>
                    <Col style={{ fontSize: '24px', color: 'black', marginBottom: '5px' }}>
                      开启区块链创业之路
                      </Col>
                    <Col style={{ fontSize: '22px', color: '#EBC44D', marginBottom: '30px' }}>
                      ¥18888
                      </Col>
                    <Col span={11}>
                      <img width={142} height={142} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                    </Col>
                    <Col span={12}>
                      <Row>
                        <Col style={{ fontSize: '24px', color: 'black', marginBottom: '15px' }}>
                          优妮塔
                          </Col>
                        <Col style={{ fontSize: '16px', color: '#666666', marginBottom: '15px' }}>
                          阅链学院主讲人
                          </Col>
                        <Col style={{ fontSize: '16px', color: '#666666' }}>
                          “创业之路的迷思为你一 一解答”
                          </Col>
                      </Row>
                    </Col>
                  </Row>
                </Carousel>
              </Col>
              <Col>
                <Row style={{ marginBottom: '25px' }}>
                  <Col span={18} style={{ fontSize: '28px', color: 'black' }}>
                    活动
                  </Col>
                  <Col span={6} style={{ color: '#999999', fontSize: '20px', marginTop: '8px' }}>
                    更多 <Icon type="right" />
                  </Col>
                </Row>
                <Carousel autoplay className="borderGrey">
                  <Row className="homepageSchoolBlock">
                    <Col style={{ fontSize: '24px', color: 'black', marginBottom: '5px' }}>
                      开启区块链创业之路—首届线下交流会
                    </Col>
                    <Col style={{ fontSize: '16px', color: '#666666', marginBottom: '5px' }}>
                      上海
                    </Col>
                    <Col style={{ fontSize: '16px', color: '#666666', marginBottom: '30px' }}>
                      2019.1.21 星期一 10:00-17:00
                    </Col>
                    <Col span={11}>
                      <img width={338} height={160} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                    </Col>
                  </Row>
                  <Row className="homepageSchoolBlock">
                    <Col style={{ fontSize: '24px', color: 'black', marginBottom: '5px' }}>
                      开启区块链创业之路—首届线下交流会
                    </Col>
                    <Col style={{ fontSize: '16px', color: '#666666', marginBottom: '5px' }}>
                      上海
                    </Col>
                    <Col style={{ fontSize: '16px', color: '#666666', marginBottom: '30px' }}>
                      2019.1.21 星期一 10:00-17:00
                    </Col>
                    <Col span={11}>
                      <img width={338} height={160} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                    </Col>
                  </Row>
                  <Row className="homepageSchoolBlock">
                    <Col style={{ fontSize: '24px', color: 'black', marginBottom: '5px' }}>
                      开启区块链创业之路—首届线下交流会
                    </Col>
                    <Col style={{ fontSize: '16px', color: '#666666', marginBottom: '5px' }}>
                      上海
                    </Col>
                    <Col style={{ fontSize: '16px', color: '#666666', marginBottom: '30px' }}>
                      2019.1.21 星期一 10:00-17:00
                    </Col>
                    <Col span={11}>
                      <img width={338} height={160} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                    </Col>
                  </Row>
                </Carousel>
              </Col>
            </Row>
          </Col>
        </Row>

      </div>
    )
  }
}

export default News;
