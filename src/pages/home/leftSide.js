import React, { Component } from 'react'
import { List, Icon, Carousel, Row, Col, Menu, Skeleton, Button } from 'antd';
import './style.css'

const count = 10;
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const listData = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `Title ${i + 1}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    user: 'liuliuliu 7小时前'
  });
}

class LeftSide extends Component {

    state = {
        current: '头条',
        initLoading: true,
        loading: false,
        data: [],
        list: [],
      }
    
      componentDidMount() {
        this.setState({
          initLoading: false,
          data: listData,
          list: listData,
        });
      }
    
      onLoadMore = () => {
        this.setState({
          loading: true,
          list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        const self = this
        setTimeout(function () {
          const data = self.state.data.concat(listData);
          self.setState({
            data,
            list: data,
            loading: false,
          }, () => {
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
          });
        }, 500);
      }
    
      handleClick = (e) => {
        this.setState({
          current: e.key,
        });
      }

    render() {
        const { initLoading, loading, list } = this.state;

        const loadMore = !initLoading && !loading ? (
          <div style={{
            textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px'
          }}
          >
            <Button onClick={this.onLoadMore}><Icon type="down" />查看更多</Button>
          </div>
        ) : null;

        return (
            <Col span={16}>
                <Row>
                    <Col span={16} className="homepageMainCarousel">
                        <Carousel autoplay>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </Col>
                    <Col span={5} className="mainHomepageImage">
                        <img className="mainHomepageSmallImage" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="" />
                        <img className="mainHomepageSmallImage" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="" />
                    </Col>
                </Row>
                <Row className="mainHomepageNews">
                    <Col span={24}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="头条">
                                头条
                            </Menu.Item>
                            <Menu.Item key="新闻">
                                新闻
                            </Menu.Item>
                            <Menu.Item key="政策">
                                政策
                            </Menu.Item>
                            <Menu.Item key="人物">
                                人物
                            </Menu.Item>
                            <Menu.Item key="行情">
                                行情
                            </Menu.Item>
                            <Menu.Item key="技术">
                                技术
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={24} className="mainHomepageNewsList">
                        <List
                            itemLayout="vertical"
                            size="large"
                            loading={initLoading}
                            loadMore={loadMore}
                            dataSource={list}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                >
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            avatar={<img width={275} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                                            title={<a href={item.href}>{item.title}</a>}
                                            description={
                                                <Row>
                                                    <Col>
                                                        {item.description}
                                                    </Col>
                                                    <br />
                                                    <br />
                                                    <Col>
                                                        <Row>
                                                            <Col span={20}>
                                                                {item.user}
                                                            </Col>
                                                            <Col span={4}>
                                                                <IconText type="eye" text="4568" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            }
                                        />
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Col>

        )
    }
}

export default LeftSide
