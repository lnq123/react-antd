import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Modal, Input, Select, Tag, InputNumber, Button, DatePicker, Progress } from 'antd'
import MyIcon from '../../my_icon'
import { Title, CountableInput, MyCoverEditor, CountableTextArea, Classification, AlbumSelector } from './common'
import './my_style.css'

const Option = Select.Option
const CheckableTag = Tag.CheckableTag

class FundingEditor extends Component {
  state = {
    title: '',
    classification: {},
    targetAmount: '',
    content: '',
  }

  render () {
    return (
      <Modal
        visible={ this.props.display }
        closable={ false }
        keyboard={ false }
        maskClosable={ false }
        footer={ null }
        width="1200px"
        style={{
          padding: 0,
          background: 'transparent',
        }}
        bodyStyle={{
          background: 'transparent',
          padding: 0,
        }}
        maskStyle={{
          background: 'linear-gradient(360deg,rgba(63,0,74,0.75) 0%,rgba(32,32,124,0.85) 100%)',
        }}
      >
        <div
          onClick={ () => this.props.onCloseFundingUpload('Close') }
          style={{
            position: 'fixed',
            top: '31px',
            right: '41px',
            color: '#BCBCBC',
            fontSize: '32px',
          }}
        >
          <MyIcon type="icon-close" />
        </div>
        <Row type="flex" justify="center">
          <Col span={24} style={{
            width: '1090px',
          }}>
            <div style={{
              paddingTop: '30px',
              paddingBottom: '45px',
              paddingLeft: '56px',
              paddingRight: '56px',
              background: '#fff',
              borderRadius: '15px',
              boxShadow: '0px 2px 15px 0px rgba(0,0,0,0.05)',
            }}>
              <Row type="flex" justify="start">
                <Col span={24}>
                  <div style={{
                    lineHeight: '24px',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: 'rgba(74,74,74,1)',
                  }}>
                    { '上传众筹项目' }
                  </div>
                </Col>
              </Row>
              <Row type="flex" justify="start" style={{ marginTop: '25px' }}>
                <Col span={24}>
                  <Title must={true} text="项目名（30字内）" />
                  <CountableInput
                    placeholder="请输入项目名"
                    maxLen={30}
                    value={ this.state.title }
                    handleChange={ (p) => {this.setState({ title: p })} }
                    style={{
                      width: '560px',
                      marginTop: '10px',
                    }}
                  />
                </Col>
              </Row>
              <Row type="flex" justify="start" style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <Title must={true} text="分类（至少一个）" />
                  <Classification
                    classes={ ['新闻', '动画', '综艺', '电影', '纪录片', '美食', '旅行', '自然'] }
                    value={ this.state.classification }
                    handleChange={ (p) => {this.setState({classification: p})} }
                    selectStyle={{
                      width: '300px',
                      marginTop: '10px',
                      backgroundColor: '#F8F8F8',
                      borderRadius: '4px',
                    }}
                    radioPartStyle={{
                      width: '300px',
                      margin: '10px 0',
                      lineHeight: '30px',
                    }}
                  />
                </Col>
                <Col span={24}>
                  <Row type="flex" justify="start">
                    <Col span={12}>
                      <Title must={true} text="目标金额￥" margin="20px 0 0 0" />
                      <InputNumber
                        min={0}
                        max={Infinity}
                        step={1}
                        precision={2}
                        placeholder="最少1000"
                        value={ this.state.targetAmount }
                        onChange={ (p) => {this.setState({targetAmount: p})} }
                        style={{
                          width: '280px',
                          marginTop: '10px',
                          backgroundColor: '#F8F8F8',
                          borderRadius: '4px',
                          border: 0,
                        }}
                      />
                    </Col>
                    <Col span={12}>
                      <Title must={false} text="最后限期" margin="20px 0 0 0" />
                      <DatePicker
                        placeholder='众筹结束限期，最长2年'
                        style={{
                          width: '260px',
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Title must={true} text="目标金额￥" margin="20px 0 0 0" />
                  <div style={{
                    position: 'relative',
                    width: '370px',
                    padding: '18px',
                    boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.06)',
                    borderRadius: '16px',
                  }}>
                    <div style={{ height: '32px', display: 'flex' }}>
                      <MyIcon className="gradient-icon" type="icon-money" style={{ fontSize: '32px' }} />
                      <div style={{
                        fontSize: '14px',
                        color: '#4A4A4A',
                        lineHeight: '32px',
                        marginLeft: '11px',
                      }}>
                        { '增加权益回报选项' }
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={24} style={{ margin: '10px 0 0 0' }}>
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    padding: '18px',
                    boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.06)',
                    borderRadius: '16px',
                  }}>
                    <Row type="flex" justify="start">
                      <Col span={2}>
                        <Title must={true} text="金额" margin="20px 0 0 0" />
                      </Col>
                      <Col span={8}>
                        <InputNumber
                          min={0}
                          max={Infinity}
                          step={1}
                          precision={2}
                          placeholder="最少1"
                          value={ '' }
                          onChange={ (p) => {} }
                          style={{
                            width: '100%',
                            marginTop: '20px',
                            backgroundColor: '#F8F8F8',
                            borderRadius: '4px',
                            border: 0,
                          }}
                        />
                      </Col>
                      <Col offset={2} span={2}>
                        <Title must={false} text="限额" margin="20px 0 0 0" />
                      </Col>
                      <Col span={8}>
                        <InputNumber
                          min={0}
                          max={Infinity}
                          step={1}
                          precision={2}
                          placeholder="最少1，不填为无限额"
                          value={ '' }
                          onChange={ (p) => {} }
                          style={{
                            width: '100%',
                            marginTop: '20px',
                            backgroundColor: '#F8F8F8',
                            borderRadius: '4px',
                            border: 0,
                          }}
                        />
                      </Col>
                    </Row>
                    <Row type="flex" justify="start">
                      <Col span={2}>
                        <Title must={true} text="期限" margin="20px 0 0 0" />
                      </Col>
                      <Col span={8}>
                        <DatePicker
                          placeholder='权益交付日期'
                          style={{
                            width: '100%',
                            margin: '20px 0 0 0',
                          }}
                        />
                      </Col>
                    </Row>
                    <Row type="flex" justify="start">
                      <Col span={2}>
                        <Title must={false} text="图片" margin="20px 0 0 0" />
                      </Col>
                      <Col span={22} style={{ display: 'flex' }}>
                        <div style={{
                          margin: '20px 0 0 0',
                          width: '90px',
                          height: '90px',
                          backgroundColor: '#F8F8F8',
                          borderRadius: '4px',
                          textAlign: 'center',
                          lineHeight: '100px',
                        }}>
                          <MyIcon type="icon-add" style={{ fontSize: '40px', color: '#BCBCBC' }} />
                        </div>
                        <div style={{
                          margin: '20px 0 0 10px',
                          width: '90px',
                          height: '90px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}>
                          <img
                            src={ require('../../image/004.jpeg') }
                            style={{ width: '100%' }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row type="flex" justify="start">
                      <Col span={2}>
                        <Title must={true} text="描述" margin="20px 0 0 0" />
                      </Col>
                      <Col span={22}>
                        <CountableTextArea
                          placeholder="请简述用户能得到的权益或商品"
                          maxLen={200}
                          value={ '' }
                          handleChange={ (p) => {} }
                          style={{
                            width: '100%',
                            marginTop: '20px',
                          }}
                        />
                      </Col>
                    </Row>
                    <Row type="flex" justify="end">
                      <Col span={24} style={{ margin: '20px 0 0 0', textAlign: 'right' }}>
                        <Button
                          type="primary"
                          style={{
                            color: '#fff',
                            width: '140px',
                            height: '40px',
                            marginRight: '16px',
                            border: 0,
                            borderRadius: '20px',
                            background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                            boxShadow: '0px 5px 10px 0px rgba(255,79,81,0.66)',
                            fontSize: '16px',
                            fontWeight: '400',
                          }}
                        >
                          <div>{ '保存' }</div>
                        </Button>
                        <Button
                          type="primary"
                          style={{
                            color: '#FF1367',
                            width: '140px',
                            height: '40px',
                            border: '1px solid #FF1367',
                            borderRadius: '20px',
                            background: '#fff',
                            fontSize: '16px',
                            fontWeight: '400',
                          }}
                        >
                          <div>{ '删除' }</div>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col span={24} style={{ margin: '20px 0 0 0', display: 'flex' }}>
                  <div style={{
                    position: 'relative',
                    width: '265px',
                    padding: '18px',
                    boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.06)',
                    borderRadius: '16px',
                  }}>
                    <Row type="flex" justify="start">
                      <Col span={8}>
                        <Title must={false} text="￥69" />
                      </Col>
                      <Col span={16} style={{ textAlign: 'right' }}>
                        <span style={{ color: '#BCBCBC', fontSize: '14px' }}>{ '限额2,000名' }</span>
                        <MyIcon type="icon-close" style={{ fontSize: '16px', color: '#BCBCBC' }} />
                      </Col>
                      <Col span={24} style={{ borderBottom: '1px solid #BCBCBC' }}>
                      </Col>
                      <Col span={24} style={{ display: 'flex' }}>
                        <div style={{
                          margin: '13px 5px 0 5px',
                          width: '70px',
                          height: '70px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}>
                          <img
                            src={ require('../../image/013.jpg') }
                            style={{ width: '100%' }}
                          />
                        </div>
                        <div style={{
                          margin: '13px 5px 0 5px',
                          width: '70px',
                          height: '70px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}>
                          <img
                            src={ require('../../image/004.jpeg') }
                            style={{ width: '100%' }}
                          />
                        </div>
                        <div style={{
                          margin: '13px 5px 0 5px',
                          width: '70px',
                          height: '70px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}>
                          <img
                            src={ require('../../image/004.jpeg') }
                            style={{ width: '100%' }}
                          />
                        </div>
                      </Col>
                      <Col span={24} style={{ margin: '10px 0 0 0' }}>
                        <span>{ '的條別然所日怕了影近意，生言有我感際英面，別一他草；社團時任光地？住情半電地裡看畫朋我我室劇。樂不外我我室劇 ...' }</span>
                      </Col>
                      <Col span={24} style={{ margin: '10px 0 0 0' }}>
                        <span>{ '交付期限：项目成功后' }</span>
                        <span style={{ color: '#FF1367' }}>{ '100天' }</span>
                        <span>{ '内' }</span>
                      </Col>
                    </Row>
                  </div>
                  <div style={{
                    position: 'relative',
                    width: '265px',
                    padding: '18px',
                    boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.06)',
                    borderRadius: '16px',
                  }}>
                    <Row type="flex" justify="start">
                      <Col span={8}>
                        <Title must={false} text="￥20,000" />
                      </Col>
                      <Col span={16} style={{ textAlign: 'right' }}>
                        <span style={{ color: '#BCBCBC', fontSize: '14px' }}>{ '限额2,000名' }</span>
                        <MyIcon type="icon-close" style={{ fontSize: '16px', color: '#BCBCBC' }} />
                      </Col>
                      <Col span={24} style={{ borderBottom: '1px solid #BCBCBC' }}>
                      </Col>
                      <Col span={24} style={{ margin: '10px 0 0 0' }}>
                        <span>{ '的條別然所日怕了影近意，生言有我感際英面，別一他草；社團時任光地？住情半電地裡看畫朋我我室劇。樂不外我我室劇的條別然所日怕了影近意，生言有我感際英面，別一他草；社團 ...生言有我感際英面，別一他草。' }</span>
                      </Col>
                      <Col span={24} style={{ margin: '10px 0 0 0' }}>
                        <span>{ '交付期限：项目成功后' }</span>
                        <span style={{ color: '#FF1367' }}>{ '100天' }</span>
                        <span>{ '内' }</span>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col span={24}>
                  <Title must={true} text="上传文件" margin="20px 0 0 0" />
                  <div style={{
                    position: 'relative',
                    width: '370px',
                    padding: '18px',
                    boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.06)',
                    borderRadius: '16px',
                  }}>
                    <div style={{ height: '32px', display: 'flex' }}>
                      <MyIcon className="gradient-icon" type="icon-video" style={{ fontSize: '32px' }} />
                      <div style={{
                        fontSize: '14px',
                        color: '#4A4A4A',
                        lineHeight: '32px',
                        marginLeft: '11px',
                      }}>
                        { '选择图片或视频文件 (支持批量)' }
                      </div>
                    </div>
                  </div>
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    margin: '10px 0 0 0',
                    padding: '18px',
                    boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.06)',
                    borderRadius: '16px',
                  }}>
                    <Row type="flex" justify="start">
                      <Col span={1}>
                        <MyIcon type="icon-loading" style={{ fontSize: '32px' }} />
                      </Col>
                      <Col span={5}>
                        <div style={{
                          fontSize: '14px',
                          color: '#4A4A4A',
                          lineHeight: '32px',
                          marginLeft: '11px',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          textOverflow: 'ellipsis',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                        }}>
                          { '文件名文件文件名文...件名文件.mp4' }
                        </div>
                      </Col>
                      <Col span={13}>
                        <Progress
                          type="line"
                          percent={43}
                          strokeColor="linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)"
                        />
                      </Col>
                      <Col span={4} style={{ color: '#FF1367' }}>
                        { '1,000 M/s 50%' }
                      </Col>
                      <Col span={1}>
                        <MyIcon
                          type="icon-close"
                          style={{ fontSize: '25px' }}
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col span={24}>
                  <Title must={false} text="正文内容 (20,000字内)" margin="20px 0 0 0" />
                  <div style={{
                    width: '100%',
                    marginTop: '10px',
                    padding: '13px',
                    backgroundColor: '#F8F8F8',
                  }}>
                    <MyIcon type="icon-Smile" style={{ fontSize: '24px', color: '#4A4A4A' }} />
                    <MyIcon type="icon-at" style={{ fontSize: '24px', color: '#4A4A4A', marginLeft: '20px' }} />
                    <MyIcon type="icon-picture" style={{ fontSize: '24px', color: '#4A4A4A', marginLeft: '20px' }} />
                  </div>
                  <CountableTextArea
                    maxLen={20000}
                    rows={20}
                    value={ this.state.content }
                    handleChange={ (p) => {this.setState({content: p})} }
                    placeholder="请输入正文内容"
                    bgColor="#fff"
                    style={{ width: '100%' }}
                  />
                </Col>
              </Row>
              <Row type="flex" justify="end" style={{ marginTop: '35px' }}>
                <Col span={24} style={{ textAlign: 'right' }}>
                  <Button
                    type="primary"
                    style={{
                      color: '#FF1367',
                      width: '140px',
                      height: '40px',
                      marginRight: '30px',
                      border: '1px solid #FF1367',
                      borderRadius: '20px',
                      background: '#fff',
                      fontSize: '16px',
                      fontWeight: '400',
                    }}
                  >
                    <div>{ '保存草稿' }</div>
                  </Button>
                  <Button
                    type="primary"
                    style={{
                      color: '#fff',
                      width: '140px',
                      height: '40px',
                      border: 0,
                      borderRadius: '20px',
                      background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                      boxShadow: '0px 5px 10px 0px rgba(255,79,81,0.66)',
                      fontSize: '16px',
                      fontWeight: '400',
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: '提&nbsp&nbsp&nbsp交' }}></div>
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Modal>
    )
  }
}

export default FundingEditor
