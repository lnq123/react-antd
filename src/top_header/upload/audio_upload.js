import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, Input, Select, Tag, InputNumber, Button, Progress } from 'antd'
import MyIcon from '../../my_icon'
import { Title, CountableInput, CountableTextArea, Classification, AlbumSelector } from './common'
import { defaultAVInfo } from '../../stores/audios_videos_info'

const FormItem = Form.Item

class AudioUploader_ extends Component {
  state = {
    audios: [],
  }

  handleFileSelect (e) {
    let files = e.target.files
    if (files.length < 1) {
      // console.log('no file selected.')
      return
    }

    //Record files in state and redux
    const maxL = files.length > 10 ? 10 : files.length
    let moreAudios = Object.assign([], this.state.audios)
    for (let i = 0; i < maxL; i++) {
      let audio = Object.assign({}, defaultAVInfo)
      audio.content = {
        file: files[i],
      }
      audio.id = i
      moreAudios.push(audio)
      this.props.pushAudio(audio)
    }
    this.setState({ audios: moreAudios })
  }

  handleFileRemove (i) {
    let audios = Object.assign([], this.state.audios)
    audios.splice(i, 1)
    this.setState({ audios: audios })
  }

  handleInputChange (i, k, v) {
    let audios = Object.assign([], this.state.audios)
    audios[i][k] = v
    this.setState({ audios: audios })

    //Update form value
    this.props.form.setFieldsValue({ [k + i]: v })
  }

  handleCoverSelect (e, i) {
    const file = e.target.files[0]
    if (!file) {
      // console.log('no file selected.')
      return
    }
    //Read image file from local
    const reader = new FileReader()
    reader.onload = (file => {
      return onloadEvent => {
        let audios = Object.assign([], this.state.audios)
        let cover = {
          selected: true,
          file: file,
          thumbUrl: onloadEvent.target.result,
        }
        audios[i].cover = cover
        this.setState({ audios: audios })
        this.props.form.setFieldsValue({ ['cover' + i]: cover })
      }
    })(file)
    reader.readAsDataURL(file)
  }

  handleCoverUnselect (i) {
    let audios = Object.assign([], this.state.audios)
    let emptyCover = {
      selected: false,
      file: null,
      thumbUrl: '',
    }
    audios[i].cover = emptyCover
    this.setState({ audios: audios })
    this.props.form.setFieldsValue({ ['cover' + i]: emptyCover })
  }

  coverValidator = (rule, value, callback) => {
    if (value || false) {
      if (value.selected) {
        callback()
      } else {
        callback('请选择封面图片')
      }
    } else {
      callback('请选择封面图片')
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Receive values of form: ', values)
      }
    })
  }

  classificationValidator = (rule, value, callback) => {
    if (value) {
      let keys = Object.keys(value)
      let empty = true
      for (let k = 0; k < keys.length; k++) {
        if (value[keys[k]]) {
          empty = false
          break
        }
      }
      if (empty) {
        callback('请至少选择一个分类')
      } else {
        callback()
      }
    } else {
      callback('请至少选择一个分类')
    }
  }

  handleBatchChecked = (key) => {
    let allAudios = Object.assign([], this.state.audios)
    for (let i = 1; i < allAudios.length; i++) {
      allAudios[i][key] = allAudios[0][key]
      this.props.form.setFieldsValue({ [key + i]: allAudios[0][key] })
    }
    this.setState({ audios: allAudios })
  }

  render () {
    const { getFieldDecorator } = this.props.form

    let formPanel = (
      <MockForm
        handleChange={ this.handleFileSelect.bind(this) }
      />
    )
    if (this.state.audios.length > 0) {
      let formList = this.state.audios.map((audio, i) => {
        let cover = (
          <div style={{
            position: 'relative',
            marginTop: '10px',
            width: '400px',
            padding: '30px 90px',
            background: 'rgba(248,248,248,1)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <input
              type="file"
              name="cover"
              accept=".png,.jpg,.jpeg,.gif,.svg"
              onChange={ (e) => this.handleCoverSelect(e, i) }
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                opacity: 0,
                filter: 'alpha(opacity=0)',
                cursor: 'pointer',
              }}
            />
            <MyIcon type="icon-picture" style={{
              fontSize: '41px',
              color: 'rgba(188,188,188,1)',
            }} />
            <div style={{
              marginTop: '18px',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '22px',
              color: 'rgba(188,188,188,1)',
            }}>
              { '选择图片上传（png/jpeg/jpg）建议尺寸大于 735*420' }
            </div>
          </div>
        )
        if (this.state.audios[i].cover.selected) {
          cover = (
            <div style={{
              position: 'relative',
              marginTop: '13px',
              width: '400px',
              height: '200px',
              padding: '10px',
              background: 'rgba(248,248,248,1)',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              <MyIcon
                type="icon-close"
                onClick={ () => this.handleCoverUnselect(i) }
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  fontSize: '25px',
                }}
              />
              <img
                src={ this.props.audios[i].cover.thumbUrl }
                style={{
                  height: '100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                }}
              />
            </div>
          )
        }
        return (
          <Row
            key={audio.id}
            type="flex"
            justify="start"
            style={{ marginTop: '20px' }}
          >
            <Col span={24}>
              <div style={{
                position: 'relative',
                width: '100%',
                padding: '18px',
                boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.06)',
                borderRadius: '16px',
              }}>
                <Row type="flex" justify="start">
                  <Col span={1}>
                    <MyIcon type="icon-music" style={{ fontSize: '32px' }} />
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
                      { this.state.audios[i].content.file.name }
                    </div>
                  </Col>
                  <Col span={13}>
                    <Progress
                      type="line"
                      percent={0}
                      strokeColor="linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)"
                    />
                  </Col>
                  <Col span={4}>
                    { '等待上传' }
                  </Col>
                  <Col span={1}>
                    <MyIcon
                      type="icon-close"
                      onClick={ () => this.handleFileRemove(i) }
                      style={{ fontSize: '25px' }}
                    />
                  </Col>
                </Row>
                <Row type="flex" justify="start" style={{ marginTop: '20px' }}>
                  <Col span={12}>
                    <Title
                      must={true}
                      text="标题（30字内）"
                      batch={0 === i && this.state.audios.length > 1}
                      handleChecked={ () => this.handleBatchChecked('title') }
                      handleUnchecked={ () => {} }
                    />
                    <CountableInput
                      placeholder="请输入作品标题"
                      maxLen={30}
                      value={ this.state.audios[i].title }
                      handleChange={ (p) => this.handleInputChange(i, 'title', p) }
                      style={{
                        width: '400px',
                        marginTop: '10px',
                      }}
                    />
                    <FormItem>
                      {getFieldDecorator('title' + i, {
                        rules: [
                          {
                            required: true,
                            message: '请输入标题'
                          },
                        ],
                      })(<span></span>)}
                    </FormItem>
                    <Title
                      must={true}
                      text="封面"
                      margin="20px 0 0 0"
                      batch={0 === i && this.state.audios.length > 1}
                      handleChecked={ () => this.handleBatchChecked('cover') }
                      handleUnchecked={ () => {} }
                    />
                    { cover }
                    <FormItem>
                      {getFieldDecorator('cover' + i, {
                        rules: [
                          {
                            validator: this.coverValidator,
                          },
                        ],
                      })(<span></span>)}
                    </FormItem>
                    <Title
                      must={false}
                      text="作品简介 (300字内)"
                      margin="20px 0 0 0"
                      batch={0 === i && this.state.audios.length > 1}
                      handleChecked={ () => this.handleBatchChecked('introduction') }
                      handleUnchecked={ () => {} }
                    />
                    <CountableTextArea
                      rows={4}
                      placeholder="请输入作品简介"
                      maxLen={300}
                      value={ this.state.audios[i].introduction }
                      handleChange={ (p) => this.handleInputChange(i, 'introduction', p) }
                      style={{
                        width: '400px',
                        marginTop: '10px',
                      }}
                    />
                    <FormItem>
                      {getFieldDecorator('introduction' + i, {})(<span></span>)}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <Title
                      must={true}
                      text="分类（至少一个）"
                      batch={0 === i && this.state.audios.length > 1}
                      handleChecked={ () => this.handleBatchChecked('classification') }
                      handleUnchecked={ () => {} }
                    />
                    <Classification
                      value={ this.state.audios[i].classification }
                      handleChange={ (p) => this.handleInputChange(i, 'classification', p) }
                      classes={ ['新闻', '动画', '综艺', '电影', '纪录片', '美食', '旅行', '自然'] }
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
                    <FormItem>
                      {getFieldDecorator('classification' + i, {
                        rules: [
                          {
                            validator: this.classificationValidator,
                          },
                        ],
                      })(<span></span>)}
                    </FormItem>
                    <Title
                      must={false}
                      text="列表归属"
                      margin="20px 0 0 0"
                      batch={0 === i && this.state.audios.length > 1}
                      handleChecked={ () => this.handleBatchChecked('album') }
                      handleUnchecked={ () => {} }
                    />
                    <AlbumSelector
                      value={ this.state.audios[i].album }
                      handleChange={ (p) => this.handleInputChange(i, 'album', p) }
                      albums={ ['新闻360', '人与自然', '科教频道', '财经第一线', '喜洋洋'] }
                    />
                    <FormItem>
                      {getFieldDecorator('album' + i, {})(<span></span>)}
                    </FormItem>
                    <Title
                      must={true}
                      text="定价￥"
                      margin="20px 0 0 0"
                      batch={0 === i && this.state.audios.length > 1}
                      handleChecked={ () => this.handleBatchChecked('price') }
                      handleUnchecked={ () => {} }
                    />
                    <InputNumber
                      min={0}
                      max={Infinity}
                      step={1}
                      precision={2}
                      placeholder="输入金额"
                      value={ this.state.audios[i].price }
                      onChange={ (p) => this.handleInputChange(i, 'price', p) }
                      style={{
                        width: '280px',
                        marginTop: '10px',
                        backgroundColor: '#F8F8F8',
                        borderRadius: '4px',
                        border: 0,
                      }}
                    />
                    <FormItem>
                      {getFieldDecorator('price' + i, {
                        rules: [
                          {
                            required: true,
                            message: '请输入定价金额'
                          },
                        ],
                      })(<span></span>)}
                    </FormItem>
                    <Title
                      must={false}
                      text="添加自定义标签（最多5个）"
                      margin="20px 0 0 0"
                      batch={0 === i && this.state.audios.length > 1}
                      handleChecked={ () => this.handleBatchChecked('tags') }
                      handleUnchecked={ () => {} }
                    />
                    <Input
                      placeholder="例：#搞笑；#原创"
                      value={ this.state.audios[i].tags }
                      onChange={ (p) => this.handleInputChange(i, 'tags', p.target.value) }
                      style={{ marginTop: '10px', width: '348px' }}
                    />
                    <FormItem>
                      {getFieldDecorator('tags' + i, {})(<span></span>)}
                    </FormItem>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        )
      })
      formPanel = (
        <div>
          <Row type="flex" justify="start">
            <Col span={24}>
              <div style={{
                lineHeight: '24px',
                fontSize: '24px',
                fontWeight: 400,
                color: 'rgba(74,74,74,1)',
              }}>
                { '音频上传' }
              </div>
            </Col>
          </Row>
          { formList }
        </div>
      )
    }

    return (
      <Col span={24} style={{
        width: '1100px',
      }}>
        <Form onSubmit={ this.handleSubmit }>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '80px',
            background: '#fff',
            boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.06)',
            zIndex: 99,
          }}>
            <Row type="flex" justify="start" style={{ marginTop: '20px' }}>
              <Col span={12}></Col>
              <Col span={8} style={{ textAlign: 'right' }}>
                <Button
                  type="primary"
                  onClick={ () => this.props.handleGoBack() }
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
                  <div>{ '上一步' }</div>
                </Button>
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
                  htmlType="submit"
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
          <div
            onClick={ () => this.props.onCloseUpload('Close') }
            style={{
              position: 'fixed',
              top: '112px',
              right: '41px',
              color: '#BCBCBC',
              fontSize: '32px',
            }}
          >
            <MyIcon type="icon-close" />
          </div>
          <div style={{
            marginTop: '10px',
            paddingTop: '30px',
            paddingBottom: '45px',
            paddingLeft: '56px',
            paddingRight: '56px',
            background: '#fff',
            borderRadius: '15px',
            boxShadow: '0px 2px 15px 0px rgba(0,0,0,0.05)',
          }}>
            { formPanel }
          </div>
        </Form>
      </Col>
    )
  }
}

const AudioUploader__ = Form.create()(AudioUploader_)

const mapStateToProps = (state, ownProps) => {
  return {
    audios: state.uploadInfo.audiosInfo.audios,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setAudio: (idx, key, value) => {
      dispatch({
        type: 'SET_AUDIO',
        idx: idx,
        key: key,
        value: value,
      })
    },
    pushAudio: (audio) => {
      dispatch({
        type: 'PUSH_AUDIO',
        audio: audio,
      })
    },
    removeAudio: (idx) => {
      dispatch({
        type: 'REMOVE_AUDIO',
        idx: idx,
      })
    },
  }
}

const AudioUploader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioUploader__)

export default AudioUploader

class MockForm extends Component {
  render () {
    return (
      <div>
        <Row type="flex" justify="start">
          <Col span={24}>
            <div style={{
              lineHeight: '24px',
              fontSize: '24px',
              fontWeight: 400,
              color: 'rgba(74,74,74,1)',
            }}>
              { '音频上传' }
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="start" style={{ marginTop: '20px' }}>
          <Col span={24}>
            <div style={{
              position: 'relative',
              width: '300px',
              padding: '18px',
              boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.06)',
              borderRadius: '16px',
            }}>
              <input
                type="file"
                name="av"
                accept=".mp3,.wav,.wma,.ape"
                multiple="multiple"
                onChange={ this.props.handleChange }
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  left: 0,
                  top: 0,
                  opacity: 0,
                  filter: 'alpha(opacity=0)',
                  cursor: 'pointer',
                }}
              />
              <div style={{ height: '32px', display: 'flex' }}>
                <MyIcon className="gradient-icon" type="icon-video" style={{ fontSize: '32px' }} />
                <div style={{
                  fontSize: '14px',
                  color: '#4A4A4A',
                  lineHeight: '32px',
                  marginLeft: '11px',
                }}>
                  { '上传音频 (mp3/wav/wma/ape)' }
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="start" style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Title must={true} text="标题（30字内）" />
            <CountableInput
              placeholder="请输入作品标题"
              maxLen={30}
              value=""
              disabled={ true }
              style={{
                width: '400px',
                marginTop: '10px',
              }}
            />
            <Title must={true} text="封面" margin="20px 0 0 0" />
            <div style={{
              marginTop: '10px',
              width: '400px',
              padding: '30px 90px',
              background: 'rgba(248,248,248,1)',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              <MyIcon type="icon-picture" style={{
                fontSize: '41px',
                color: 'rgba(188,188,188,1)',
              }} />
              <div style={{
                marginTop: '18px',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '22px',
                color: 'rgba(188,188,188,1)',
              }}>
                { '选择图片上传（png/jpeg/jpg）建议尺寸大于 735*420' }
              </div>
            </div>
            <Title must={false} text="作品简介 (300字内)" margin="20px 0 0 0" />
            <CountableTextArea
              rows={4}
              placeholder="请输入作品简介"
              maxLen={300}
              value=""
              disabled={ true }
              style={{
                width: '400px',
                marginTop: '10px',
              }}
            />
          </Col>
          <Col span={12}>
            <Title must={true} text="分类（至少一个）" />
            <Classification
              value={ {} }
              disabled={ true }
              classes={ ['新闻', '动画', '综艺', '电影', '纪录片', '美食', '旅行', '自然'] }
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
            <Title must={false} text="列表归属" margin="20px 0 0 0" />
            <AlbumSelector
              value=""
              disabled={ true }
              albums={ ['新闻360', '人与自然', '科教频道', '财经第一线', '喜洋洋'] }
            />
            <Title must={true} text="定价￥" margin="20px 0 0 0" />
            <InputNumber
              min={0}
              max={Infinity}
              step={1}
              precision={2}
              placeholder="输入金额"
              disabled={ true }
              style={{
                width: '280px',
                marginTop: '10px',
                backgroundColor: '#F8F8F8',
                borderRadius: '4px',
                border: 0,
              }}
            />
            <Title must={false} text="添加自定义标签（最多5个）" margin="20px 0 0 0" />
            <Input
              placeholder="例：#搞笑；#原创"
              value=""
              disabled={ true }
              style={{ marginTop: '10px', width: '348px' }}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
