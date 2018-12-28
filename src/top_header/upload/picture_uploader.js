import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, Input, Select, Tag, InputNumber, Button } from 'antd'
import MyIcon from '../../my_icon'
import { Title, CountableInput, CountableTextArea, Classification, AlbumSelector } from './common'
import { defaultPictureInfo } from '../../stores/pictures_info'

const FormItem = Form.Item

class PictureUploader_ extends Component {

  state = {
    pictures: this.props.pictures,
    curIdx: 0,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //Check validation one by one
    let idx = 0, valid = true
    for (let i = 0; i < this.state.pictures.length; i++) {
      if (!valid) {
        //Scroll to upper half or lower half
        if (i > this.state.pictures.length / 2) {
          this.refs.cover.scrollTop = 300
        } else {
          this.refs.cover.scrollTop = 0
        }
        break
      }
      idx = i
      this.props.form.setFieldsValue({
        title: this.state.pictures[idx].title,
        classification: this.state.pictures[idx].classification,
        price: this.state.pictures[idx].price,
      })
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Receive values of form: ', values)
        } else {
          valid = false
        }
      })
    }
    //After validation checking
    if (!valid) {
      this.setState({ curIdx: idx })
    }
  }

  handleFileSelected (idx) {
    this.setState((state) => {return { curIdx: idx }})
    this.props.form.setFieldsValue({
      title: this.state.pictures[idx].title,
      classification: this.state.pictures[idx].classification,
      price: this.state.pictures[idx].price,
    })
  }

  handlePictureRemove (e, i) {
    setTimeout(() => {
      let allPics = Object.assign([], this.state.pictures)
      allPics.splice(i, 1)
      this.setState({ pictures: allPics, curIdx: 0 })
      this.props.remove(i)
    }, 50)
  }

  handlePictureSelect (e) {
    let files = e.target.files
    if (files.length < 1) {
      // console.log('no file selected.')
      return
    }

    //Read image files from local
    const maxL = files.length > 10 ? 10 : files.length
    for (let i = 0; i < maxL; i++) {
      const reader = new FileReader()
      reader.onload = (file => {
        return onloadEvent => {
          let thumbUrl = onloadEvent.target.result
          let picture = Object.assign({}, defaultPictureInfo)
          picture.content = {
            file: file,
            thumbUrl: thumbUrl,
          }
          let morePics = Object.assign([], this.state.pictures)
          picture.id = i
          morePics.push(picture)
          this.setState((state) => {return { pictures: morePics }})
          this.props.push(picture)
        }
      })(files[i])
      reader.readAsDataURL(files[i])
    }
  }

  handleClassificationChange (p) {
    let allPic = Object.assign([], this.state.pictures)
    allPic[this.state.curIdx].classification = p
    this.setState({ pictures: allPic })
    this.props.form.setFieldsValue({ classification: p })
  }

  classificationValidator = (rule, value, callback) => {
    let classes = this.props.form.getFieldValue('classification')
    if (classes) {
      let keys = Object.keys(classes)
      let empty = true
      for (let k = 0; k < keys.length; k++) {
        if (classes[keys[k]]) {
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

  handleAlbumChange (p) {
    let allPic = Object.assign([], this.state.pictures)
    allPic[this.state.curIdx].album = p
    this.setState({ pictures: allPic })
  }

  handlePriceChange (p) {
    let allPic = Object.assign([], this.state.pictures)
    allPic[this.state.curIdx].price = p
    this.setState({ pictures: allPic })
  }

  handleTagsChange (p) {
    let allPic = Object.assign([], this.state.pictures)
    allPic[this.state.curIdx].tags = p.target.value
    this.setState({ pictures: allPic })
  }

  render () {
    const { getFieldDecorator } = this.props.form

    let covers = (
      <div style={{
        position: 'relative',
        marginTop: '27px',
        width: '390px',
        height: '439px',
        padding: '0 80px 0 80px',
        background: 'rgba(248,248,248,1)',
        borderRadius: '8px',
        textAlign: 'center',
      }}>
        <input
          type="file"
          name="pic"
          accept=".png,.jpg,.jpeg,.gif,.svg"
          multiple="multiple"
          onChange={ this.handlePictureSelect.bind(this) }
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
        <MyIcon className="gradient-icon" type="icon-picture" style={{
          marginTop: '138px',
          fontSize: '41px',
        }} />
        <div style={{
          marginTop: '18px',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '22px',
          color: '#4A4A4A',
        }}>
          { '选择图片上传（png/jpeg/jpg）建议尺寸大于 735*420' }
        </div>
      </div>
    )
    if (this.state.pictures.length > 0) {
      let pics = this.state.pictures.map((p, i) => {
        return (
          <div
            key={ p.id }
            onClick={ () => this.handleFileSelected(i) }
            style={{
              background: '#fff',
              margin: '15px 0',
              padding: '19px',
              boxShadow: '0px 2px 20px 0px rgba(0,0,0,0.06)',
              borderRadius: '16px',
              border: this.state.curIdx === i ? '1px solid #FF1367' : 0,
            }}
          >
            <Row type="flex" justify="start">
              <Col span={3}>
                <MyIcon type="icon-picture" style={{
                  color: 'rgba(74,74,74,1)',
                  fontSize: '30px',
                }} />
              </Col>
              <Col span={9}>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  wordBreak: 'break-all',
                }}>{ p.content.file.name }</div>
              </Col>
              <Col span={4} offset={1}>
                { '等待上传' }
              </Col>
              <Col span={4}>
                { '0%' }
              </Col>
              <Col span={3}>
                <MyIcon
                  type="icon-close"
                  onClick={ (e) => this.handlePictureRemove(e, i) }
                  style={{
                    color: 'rgba(74,74,74,1)',
                    fontSize: '25px',
                  }}
                />
              </Col>
            </Row>
          </div>
        )
      })
      covers = (
        <div ref="cover" style={{
          height: '400px',
          marginRight: '40px',
          paddingRight: '20px',
          overflowY: 'scroll',
        }}>{ pics }</div>
      )
    }
    return (
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
          <Form onSubmit={ this.handleSubmit }>
            <Row type="flex" justify="start">
              <Col span={24}>
                <div style={{
                  lineHeight: '24px',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'rgba(74,74,74,1)',
                }}>
                  { '上传图片' }
                </div>
              </Col>
            </Row>
            <Row type="flex" justify="start" style={{ marginTop: '30px' }}>
              <Col span={12}>
                <Title must={true} text="标题（30字内）" />
                <CountableInput
                  placeholder="请输入作品标题"
                  maxLen={30}
                  disabled={ this.state.pictures.length < 1 }
                  value={ this.state.pictures.length > 0 ? this.state.pictures[this.state.curIdx].title : '' }
                  handleChange={ (p) => {
                    this.props.form.setFieldsValue({ title: p })
                    let ps = Object.assign([], this.state.pictures)
                    ps[this.state.curIdx].title = p
                    this.setState((state) => {return { pictures: ps }})
                  }}
                  style={{
                    width: '390px',
                    marginTop: '10px',
                  }}
                />
                <FormItem>
                  {getFieldDecorator('title', {
                    rules: [
                      {
                        required: true,
                        message: '请填写标题',
                      },
                    ],
                  })(<span></span>)}
                </FormItem>
                { covers }
              </Col>
              <Col span={12}>
                <Title must={false} text="作品简介 (300字内)" />
                <CountableTextArea
                  rows={4}
                  placeholder="请输入作品简介"
                  maxLen={300}
                  disabled={ this.state.pictures.length < 1 }
                  value={ this.state.pictures.length > 0 ? this.state.pictures[this.state.curIdx].introduction : '' }
                  handleChange={ (p) => {
                    let ps = Object.assign([], this.state.pictures)
                    ps[this.state.curIdx].introduction = p
                    this.setState((state) => {return { pictures: ps }})
                  }}
                  style={{
                    width: '366px',
                    marginTop: '10px',
                  }}
                />
                <Title must={true} text="分类（至少一个）" margin="16px 0 0 0"/>
                <Classification
                  classes={ ['新闻', '动画', '综艺', '电影', '纪录片', '美食', '旅行', '自然'] }
                  disabled={ this.state.pictures.length < 1 }
                  value={ this.state.pictures.length > 0 ? this.state.pictures[this.state.curIdx].classification : {} }
                  handleChange={ (p) => this.handleClassificationChange(p) }
                  selectStyle={{
                    width: '300px',
                    marginTop: '10px',
                    backgroundColor: '#F8F8F8',
                    borderRadius: '4px',
                  }}
                  radioPartStyle={{
                    width: '400px',
                    margin: '10px 0',
                    lineHeight: '30px',
                  }}
                />
                <FormItem>
                  {getFieldDecorator('classification', {
                    rules: [
                      {
                        required: true,
                        message: '请选择分类',
                      },
                      {
                        validator: this.classificationValidator,
                      },
                    ],
                  })(<span></span>)}
                </FormItem>
                <Title must={false} text="列表归属" margin="20px 0 0 0" />
                <AlbumSelector
                  disabled={ this.state.pictures.length < 1 }
                  albums={ ['新闻360', '人与自然', '科教频道', '财经第一线', '喜洋洋'] }
                  value={ this.state.pictures.length > 0 ? this.state.pictures[this.state.curIdx].album : '' }
                  handleChange={ (p) => this.handleAlbumChange(p) }
                />
                <Title must={true} text="定价￥" margin="20px 0 0 0" />
                <InputNumber
                  min={0}
                  max={Infinity}
                  step={1}
                  precision={2}
                  placeholder="输入金额"
                  disabled={ this.state.pictures.length < 1 }
                  value={ this.state.pictures.length > 0 ? this.state.pictures[this.state.curIdx].price : '' }
                  onChange={ (p) => this.handlePriceChange(p) }
                  style={{
                    width: '280px',
                    marginTop: '10px',
                    backgroundColor: '#F8F8F8',
                    borderRadius: '4px',
                    border: 0,
                  }}
                />
                <FormItem>
                  {getFieldDecorator('price', {
                    rules: [
                      {
                        required: true,
                        message: '请设定价格',
                      },
                    ],
                  })(<span></span>)}
                </FormItem>
                <Title must={false} text="添加自定义标签（最多5个）" margin="20px 0 0 0" />
                <Input
                  placeholder="例：#搞笑；#原创"
                  disabled={ this.state.pictures.length < 1 }
                  value={ this.state.pictures.length > 0 ? this.state.pictures[this.state.curIdx].tags : '' }
                  onChange={ (p) => this.handleTagsChange(p) }
                  style={{ marginTop: '10px', width: '348px' }}
                />
              </Col>
            </Row>
            <Row type="flex" justify="end" style={{ marginTop: '25px' }}>
              <Col span={24} style={{ textAlign: 'right' }}>
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
          </Form>
        </div>
      </Col>
    )
  }
}

const PictureUploader__ = Form.create()(PictureUploader_)

const mapStateToProps = (state, ownProps) => {
  return {
    pictures: state.uploadInfo.picturesInfo.pictures,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    set: (idx, key, value) => {
      dispatch({
        type: 'SET_PICTURE',
        idx: idx,
        key: key,
        value: value,
      })
    },
    push: (picture) => {
      dispatch({
        type: 'PUSH_PICTURE',
        picture: picture,
      })
    },
    remove: (idx) => {
      dispatch({
        type: 'REMOVE_PICTURE',
        idx: idx,
      })
    },
  }
}

const PictureUploader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PictureUploader__)

export default PictureUploader
