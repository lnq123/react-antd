import React, { Component, Fragment } from "react";
import { Tag, Row, Col } from "antd";
import { Card, Pagination } from "antd";

const { Meta } = Card;
const { CheckableTag } = Tag;

class MyTag extends React.Component {
  state = { checked: false };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <CheckableTag
        {...this.props}
        checked={this.state.checked}
        onChange={this.handleChange}
      />
    );
  }
}
const cardTitle = (
  <div className="cardTitle">
    <div>区块链线下培训—创业之路如何</div>
    <div>越走越稳健</div>
  </div>
);
const cardDescription = (
  <div className="cardDescription">
    <span>中国·上海</span>
    <span>2019.2.12</span>
  </div>
);
const title1 = (
  <Card
    hoverable
    style={{ width: 373 }}
    cover={<div style={{position:'relative'}}>
      <img
        alt="example"
        src="/image/activity/1.png"
      />
        <span className="card_applying">报名中</span>
        </div>
    }
  >
    <Meta title={cardTitle} description={cardDescription} />
  </Card>
);
const title2 = (
    <Card
      hoverable
      style={{ width: 373 }}
      cover={<div style={{position:'relative'}}>
        <img
          alt="example"
          src="/image/activity/2.png"
        />
          <span className="card_applying">报名中</span>
          </div>
      }
    >
      <Meta title={cardTitle} description={cardDescription} />
    </Card>
  );
  const title3 = (
    <Card
      hoverable
      style={{ width: 373 }}
      cover={<div style={{position:'relative'}}>
        <img
          alt="example"
          src="/image/activity/3.png"
        />
          <span className="card_ending">已结束</span>
          </div>
      }
    >
      <Meta title={cardTitle} description={cardDescription} />
    </Card>
  );
  const cards=(<Row style={{ marginTop: 37 }}>
    <Col span={8}>{title1}</Col>
    <Col span={8}>{title2}</Col>
    <Col span={8}>{title3}</Col>
  </Row>)
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>上一页</a>;
    } if (type === 'next') {
      return <a>下一页</a>;
    }
    return originalElement;
  }
export default () => (
  <Fragment>
    <Row style={{ borderTop: "2px solid #E5E5E5", padding: "13px 0" }}>
      <Col span={2}>
        <div>时间</div>
      </Col>
      <Col span={1} />
      <Col span={1}>
        <MyTag>
          <div>全部</div>
        </MyTag>
      </Col>
      <Col span={1}>
        <MyTag>
          <div>本周</div>
        </MyTag>
      </Col>
      <Col span={1}>
        <MyTag>
          <div>本月</div>
        </MyTag>
      </Col>
    </Row>
    <Row
      style={{
        borderTop: "2px solid #E5E5E5",
        borderBottom: "2px solid #E5E5E5",
        padding: "13px 0"
      }}
    >
      <Col span={2}>
        <div>地点</div>
      </Col>
      <Col span={1} />
      <Col span={1}>
        <MyTag>
          <div>全部</div>
        </MyTag>
      </Col>
      <Col span={1}>
        <MyTag>
          <div>北京</div>
        </MyTag>
      </Col>
      <Col span={1}>
        <MyTag>
          <div>上海</div>
        </MyTag>
      </Col>
      <Col span={1}>
        <MyTag>
          <div>广州</div>
        </MyTag>
      </Col>
      <Col span={1}>
        <MyTag>
          <div>深圳</div>
        </MyTag>
      </Col>
      <Col span={1}>
        <MyTag>
          <div>香港</div>
        </MyTag>
      </Col>
      <Col span={1}>
        <MyTag>
          <div>澳门</div>
        </MyTag>
      </Col>
      <Col span={1}>
        <MyTag>
          <div>成都</div>
        </MyTag>
      </Col>
      <Col span={1}>
        <MyTag>
          <div>厦门</div>
        </MyTag>
      </Col>
    </Row>
    {cards}
    {cards}
    {cards}
    {cards}
    <Row style={{margin:'60px 0'}}>
        <Col span={24}>
        <Pagination defaultCurrent={2} total={500} itemRender={itemRender} />
        </Col>
    </Row>

    
  </Fragment>
);
