import React from "react";
import { Row, Col, Button,} from "antd";
import { Divider } from 'antd';

import { Tooltip, Progress } from 'antd';
import { Tag } from 'antd';


const Right =(props) =>{
    return(
        <Row >
            <Col span={24}>
                <div style={{
                    fontSize:26,
                    fontWeight:500,
                    color:'rgba(0,0,0,1)',
                    lineHeight:'37px',
                    margin:'28px 0 14px',
                }}> 
                    这个项目的标题这个项目的标题
                </div>
            </Col>
            <Col span={24}>
            <Tag style={{
                    margin:"0 5px",
                    color:"#FFFFFF",
                    width:55,
                    height:20,
                    background:'#FFC53D',
                    borderRadius:'10px',
                    textAlign: 'center',
                }}>动画</Tag>
                <Tag style={{
                    margin:"0 5px",
                    color:"#FFFFFF",
                    width:55,
                    height:20,
                    background:'#FFC53D',
                    borderRadius:'10px',
                    textAlign: 'center',
                }}>视频</Tag>
                <Tag style={{
                    margin:"0 5px",
                    color:"#FFFFFF",
                    width:55,
                    height:20,
                    background:'#FFC53D',
                    borderRadius:'10px',
                    textAlign: 'center',
                }}>原创</Tag>
            </Col>
            <Col span={4}>
                {props.percent==0?(<div style={{
                    margin:'23px 0 26px',
                    fontSize:'25px',
                    fontWeight:500,
                    color:props.fontcolor,
                    lineHeight:'40px',
                }}>预热中</div>):(
                    props.percent==100?(
                        <div style={{
                            margin:'23px 0 26px',
                            fontSize:'25px',
                            fontWeight:500,
                            color:props.fontcolor,
                            lineHeight:'40px',
                        }}>项目成功</div>
                    ):(
                        <div style={{
                            margin:'23px 0 26px',
                            fontSize:'40px',
                            fontWeight:500,
                            color:'#FAAD14',
                            lineHeight:'40px',
                        }}>{props.percent}<span style={{fontSize:'24px',}}>%</span></div>
                    )
                )}

                
            </Col>
            <Col span={14}>
                <div style={{
                    margin:'35px 0 26px',
                }}>
                    <Progress 
                    percent={props.percent} 
                    status="active"
                    strokeColor={props.color}
                    showInfo={false}
                    />
                </div> 
            </Col>
            <Col span={24}>
                <Row >
                    <Col span={4}>
                    <div style={{
                    color:'#FF1367',
                    fontSize:'30px',
                    fontWeight:400,
                    lineHeight:'28px',
                    }}>
                        20,000 
                    </div> 
                    <div style={{
                        color:'#9B9B9B',
                        fontSize:'14px',
                        fontWeight:400,
                        lineHeight:'20px',
                    }}>
                        目标资金 (糖分)
                    </div>
                    </Col>
                    <Col span={1}>
                    <Divider type="vertical" 
                        style={{width:'1px',
                            height:'40px',
                            background:'rgba(216,216,216,1)',}}
                    />

                    </Col>
                    
                    <Col  span={4}>
                    <div style={{
                    color: props.money==0?'#9B9B9B':props.fontcolor,
                    fontSize:'30px',
                    fontWeight:400,
                    lineHeight:'28px',
                    textAlign:'center',
                    }}>
                        {props.money}  
                    </div> 
                    <div style={{
                        color:'#9B9B9B',
                        fontSize:'14px',
                        fontWeight:400,
                        lineHeight:'20px',
                        textAlign:'center',
                    }}>
                        已募集资金 (糖分)
                    </div>
                    </Col>
                    <Col span={1}>
                    <Divider type="vertical" 
                        style={{width:'1px',
                            height:'40px',
                            background:'rgba(216,216,216,1)',}}
                    /></Col>
                    <Col  span={5}>
                    <div style={{
                    color:'#9B9B9B',
                    fontSize:'30px',
                    fontWeight:400,
                    lineHeight:'28px',
                    textAlign:'center',
                    }}>
                        2018.09.11  
                    </div> 
                    <div style={{
                        color:'#9B9B9B',
                        fontSize:'14px',
                        fontWeight:400,
                        lineHeight:'20px',
                        textAlign:'center',
                    }}>
                        开始日期
                    </div>
                    </Col>
                    <Col span={1}>
                    <Divider type="vertical" 
                        style={{width:'1px',
                            height:'40px',
                            background:'rgba(216,216,216,1)',}}
                    />
                    </Col>
                    <Col span={6}>
                    <div style={{
                    color:'#9B9B9B',
                    fontSize:'30px',
                    fontWeight:400,
                    lineHeight:'28px',
                    textAlign:'center',
                    }}>
                        2018.09.20  
                    </div> 
                    <div style={{
                        color:'#9B9B9B',
                        fontSize:'14px',
                        fontWeight:400,
                        lineHeight:'20px',
                        textAlign:'center',
                    }}>
                        截止日期
                    </div>
                    </Col>

                </Row>
                
            </Col>
            

        </Row>
    )
}
 
export default Right;
                