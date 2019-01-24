import React, { Component } from 'react'
import { Icon, Carousel, Row, Col } from 'antd'
import './style.css'
import { newsService } from '../../_services'
import { connect } from 'react-redux'

class OneNews extends Component {

  state = {
    newsList: []
  }

  async componentDidMount() {
    const { newsId } = this.props.params
    const ret = await newsService.getOne(newsId)
    if (ret) {
      this.setState({
        news: ret.news
      })
    }
  }

  onLike = async () => {
    const { newsId } = this.props.params
    const ret = await newsService.like(newsId)
    console.log(ret);
    
  }

  onDislike = async () => {
    const { newsId } = this.props.params
    const ret = await newsService.dislike(newsId)
    console.log(ret);
    
  }


  render() {
    const { news } = this.state
    console.log('NEWS', news);

    return (
      <div className="newsPage">
        <Row style={{ marginTop: '55px', marginLeft: '35px' }}>
          <Col span={16}>
            <Row>
              <Col>
                {
                  news && <div className="oneArticlePageMainArticle" dangerouslySetInnerHTML={{ __html: news.content }} />
                }
              </Col>
              <Col  span={24} style={{ marginTop: '25px', marginBottom: '25px' }}>
                <Icon onClick={this.onLike} style={{ fontSize: '20px', color: '#08c', marginLeft: '20px' }} type="like" /><Icon onClick={this.onDislike} style={{ fontSize: '20px', color: '#08c', marginLeft: '20px' }} type="dislike" />
              </Col>

            </Row>
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

const mapStateToProps = state => {
  const { userData } = state
  return {
    userData,
  }
}

export default connect(
  mapStateToProps,
)(OneNews)