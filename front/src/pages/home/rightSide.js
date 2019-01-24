import React, { Component } from 'react'
import { List, Icon, Carousel, Row, Col } from 'antd';
import './style.css'
import { newsService } from '../../_services'

class RightSide extends Component {

    state = {
        hotNewsList: []
    }

    async componentDidMount() {
        
        let retNews = await newsService.getHot()

        if (!retNews) {
            retNews = []
        }
        this.setState({
            hotNewsList: retNews.news
        })

    }

    render() {
        const { hotNewsList } = this.state
        const emptyImg = "https://acheterbitcoin.pro/wp-content/uploads/2018/01/quest-ec-que-la-blockchain.jpg"
        return (
            <Col span={8} className="">
                {/* <Row style={{ marginBottom: '25px' }}>
                    <Col span={18} style={{ fontSize: '28px', color: 'black' }}>
                        实时快讯
                    </Col>
                    <Col span={6} style={{ color: '#999999', fontSize: '20px', marginTop: '8px' }}>
                        更多 <Icon type="right" />
                    </Col>
                </Row> */}
                <Row>
                    <Col style={{ marginBottom: '45px' }}>
                        <Row>
                            <Col span={18} style={{ fontSize: '28px', color: 'black' }}>
                                热点资讯
                            </Col>
                            <Col span={6} style={{ color: '#999999', fontSize: '20px', marginTop: '8px' }}>
                                更多 <Icon type="right" />
                            </Col>
                            <Col span={24}>
                                <List
                                    itemLayout="vertical"
                                    size="small"
                                    dataSource={hotNewsList}
                                    renderItem={item => (
                                        <List.Item
                                            key={item.title}
                                        >
                                            <List.Item.Meta
                                                avatar={<img width={146} height={86} alt="logo" src={item.titleImg ? item.titleImg : emptyImg} />}
                                                title={<span style={{ color: 'black', fontSize: '20px' }} onClick={()=>{ this.props.history.push('/news/' + item.id)} } >{item.title}</span>}
                                                description={
                                                    <Row>
                                                        <Col>
                                                            昨天
                                                        </Col>
                                                    </Row>
                                                }
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Col>
                        </Row>
                    </Col>
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
        )
    }
}

export default RightSide
