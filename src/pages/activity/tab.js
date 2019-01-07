import React, { Component,Fragment } from "react";
import { Tag,Row,Col } from 'antd';
const { CheckableTag } = Tag;

class MyTag extends React.Component {
  state = { checked: false };

  handleChange = (checked) => {
    this.setState({ checked });
  }

  render() {
    return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
  }
}
export default () =>(
    <Fragment>
    <Row style={{borderTop:'2px solid #E5E5E5'}}>
        <Col span={2}>
        <div>时间</div>
        </Col>
        <Col span={1} />
        <Col span={1}>
        <MyTag><div>全部</div></MyTag>
        </Col>
        <Col span={1}>
        <MyTag><div>本周</div></MyTag>
        </Col>
        <Col span={1}>
        <MyTag><div>本月</div></MyTag>
        </Col>
    </Row>
    <Row style={{borderTop:'2px solid #E5E5E5', borderBottom:'2px solid #E5E5E5'}}>
        <Col span={2}>
        <div>地点</div>
        </Col>
        <Col span={1} />
        <Col span={1}>
        <MyTag><div>全部</div></MyTag>
        </Col>
        <Col span={1}>
        <MyTag><div>北京</div></MyTag>
        </Col>
        <Col span={1}>
        <MyTag><div>上海</div></MyTag>
        </Col>
        <Col span={1}>
        <MyTag><div>广州</div></MyTag>
        </Col>
        <Col span={1}>
        <MyTag><div>深圳</div></MyTag>
        </Col>
        <Col span={1}>
        <MyTag><div>香港</div></MyTag>
        </Col>
        <Col span={1}>
        <MyTag><div>澳门</div></MyTag>
        </Col>
        <Col span={1}>
        <MyTag><div>成都</div></MyTag>
        </Col>
        <Col span={1}>
        <MyTag><div>厦门</div></MyTag>
        </Col>
    </Row>
    </Fragment>
)