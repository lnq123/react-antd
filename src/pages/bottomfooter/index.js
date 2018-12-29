import React, { Component } from 'react'
import { Row, Col } from "antd";
import IMG1 from '../../image/5.png'
import IMG2 from '../../image/4.png'
import IMG3 from '../../image/7.png'
import './bottom.css'
import IMG4 from '../../image/1.png'
import IMG5 from '../../image/2.png'
import IMG6 from '../../image/3.png'

class BottomFooter extends Component {
  render () {
    return (
      <div className='BottomWrapper'>
       <Row className='BottomWidth'>
        <Col span={5}  >
          <div className='BottomLeftTitle'>
            关于我们
          </div>
          <div className='BottomLeftTitle'>
            广告服务
          </div>
          <div className='BottomLeftTitle'>
            意见反馈
          </div>
          <div className='BottomLeftTitle'>
            联系我们
          </div>
        </Col>
        <Col span={10} style={{position:'relative'}}>
            <div className='BottomBrand'>品牌</div>
            <img className='BottomBrandImg1' alt='' src={IMG1}></img>
            <img className='BottomBrandImg2' alt='' src={IMG2}></img>
            <img className='BottomBrandImg3' alt='' src={IMG3}></img>
        </Col>
        <Col span={9}>
        <div className='BottomLeftTitle'>关注我们</div>
            <img  alt='' src={IMG4} />
            <img  alt='' src={IMG5} style={{margin:'0 20px'}} />
            <img  alt='' src={IMG6} />
        </Col>
       </Row>
        
      </div>
    )
  }
}

export default BottomFooter
