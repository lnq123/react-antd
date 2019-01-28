import React, { Component } from 'react'
import { List, Icon, Row, Col, Menu, Skeleton, Button } from 'antd';
import { newsService } from '../../_services'
import './style.css'

const count = 10;
const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class ListArticles extends Component {


    state = {
        current: '头条',
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    }

    async componentDidMount() {
        let retNews = await newsService.getHomepage(10, 0)

        if (!retNews) {
            retNews = []
        }

        this.setState({
            initLoading: false,
            data: retNews.news,
            list: retNews.news,
        });
    }

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true }))),
        });
        const self = this
        setTimeout(async function () {
            const page = self.state.data.length / count
            let retNews = await newsService.getHomepage(10, page)
            
            const data = self.state.data.concat(retNews.news);
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

    render() {
        const { initLoading, loading, list } = this.state;
        const emptyImg = "https://acheterbitcoin.pro/wp-content/uploads/2018/01/quest-ec-que-la-blockchain.jpg"
        const loadMore = !initLoading && !loading ? (
            <div style={{
                textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px'
            }}
            >
                <Button onClick={this.onLoadMore}><Icon type="down" />查看更多</Button>
            </div>
        ) : null;
        return (
            <div className="adminCreateNewsList">
                <Row >
                    <Col span={6}>
                    
                    </Col>
                    <Col span={12} className="adminCreateNewsListBlock">
                        <Button type="primary" icon="file-add" size="large">New article</Button>
                        <List
                            itemLayout="vertical"
                            size="large"
                            loading={initLoading}
                            loadMore={loadMore}
                            dataSource={list}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    className="adminCreateNewsListBlockitem"
                                >
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            className="clickable"
                                            onClick={() => { this.props.history.push('/news/newarticle/' + item.id) }}
                                            avatar={<img width={137} height={84} alt="logo" src={item.titleImg ? item.titleImg : emptyImg} />}
                                            // title={<div className="mainpageTitleNewsBlock"><p className="mainpageTitleNews" >{item.title}</p></div>}
                                            description={
                                                <Row>
                                                    <Col>
                                                        <Row>
                                                            <Col className="blockTitleNewArticle" span={24}>
                                                                <div className="blockTitleNewArticleText" > {item.title} </div>
                                                            </Col>
                                                            <Col span={16}>
                                                                {item && item.author && item.author.phone.replace(item.author.phone.substring(4, 8), "****")}
                                                                {/* 7小时前 */}
                                                            </Col>
                                                            <Col span={4}>
                                                                <IconText type="eye" text={item.views} />
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
            </div>
        )
    }
}

export default ListArticles;