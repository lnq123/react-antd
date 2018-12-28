import React, { Component } from 'react'
import { Icon, Modal, Row, Col } from 'antd'
import { documentIcon, pdfIcon, videoIcon } from './iconB64'
import FilePreview from './filepreview.js'

export default class PicWall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: '',
      coverIdx: 0,
      inputFile: '',
      fileList: [
        // {
        //   uid: '-1',
        //   name: 'xxx.png',
        //   status: 'done',
        //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        //   type: 'image',
        // },
        // {
        //   uid: '-2',
        //   name: 'xxx.png',
        //   url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541061619&di=4c8c50f1fd761ba37f347504fb157138&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.bydq.com%2FupFile%2F201117857160.gif',
        //   type: 'image',
        // },
        // {
        //   uid: '-3',
        //   name: 'xxx.png',
        //   url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541061682&di=2db5503de3b27c96e0cdd981bc83c04b&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20121206%2Fguangzhouzhujiangxinchenghean_1391381_small.jpg',
        //   type: 'image',
        // },
        // {
        //   uid: '-4',
        //   name: 'xxx.png',
        //   url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541061703&di=d96e8b2f4a67db3240e19542664262dc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20160712%2Fguangzhoudianshitazhujiangxinchengyejing_6664839_small.jpg',
        //   type: 'image',
        // },
        // {
        //   uid: '-5',
        //   name: 'xxx.png',
        //   url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541061619&di=4c8c50f1fd761ba37f347504fb157138&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.bydq.com%2FupFile%2F201117857160.gif',
        //   type: 'image',
        // },
      ],
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCover = this.handleCover.bind(this)
    this.determineFileType = this.determineFileType.bind(this)
    this.generateUid = this.generateUid.bind(this)
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  determineFileType (type) {
    let fileType = 'UNKNOW'
    if (type.indexOf('application') > -1) {
      if (type.indexOf('application/pdf') > -1) {
        fileType = 'PDF'
      }
    } else if (type.indexOf('video') > -1) {
      fileType = 'VIDEO'
    } else if (type.indexOf('image') > -1) {
      fileType = 'IMG'
    }
    return fileType
  }

  generateUid () {
    const now = new Date()
    const r = Math.ceil(Math.random() * 10)
    return `ft-upload-${now.getTime()}-${r}`
  }

  handleSelect (e) {
    // console.log('handleSelected...')
    const file = e.target.files[0]
    if (!file) {
      // console.log('no file selected.')
      return
    }
    for (let i = 0; i < this.state.fileList.length; i++) {
      if (file.name === this.state.fileList[i].name) {
        // File has been selected
        // console.log('file exists in list.')
        return
      }
    }
    // console.log(file)
    const fileType = this.determineFileType(file.type)
    const reader = new FileReader()
    reader.onload = (file => {
      return ev => {
        // console.log(ev.target.result)
        let thumbUrl = 'data:image/png;base64,'
        switch(fileType) {
          case 'PDF': {
            thumbUrl = pdfIcon
            break
          }
          case 'VIDEO': {
            thumbUrl = videoIcon
            break
          }
          case 'IMG': {
            thumbUrl = ev.target.result
            break
          }
          default: {
            thumbUrl = documentIcon
          }
        }
        let newFileList = this.state.fileList.slice()
        newFileList.push({
          uid: this.generateUid(),
          name: file.name,
          thumbUrl: thumbUrl,
          type: fileType,
          file: file,
        })
        this.setState((state) => {
          return {
            fileList: newFileList,
          }
        })
      }
    })(file)
    reader.readAsDataURL(file)
    // Clear input value to fix ignoring bug
    this.setState((state) => {
      return {
        inputFile: '',
      }
    })
  }

  handleDelete (idx, e) {
    // console.log('handleDelete...', idx)
    if (idx < this.state.fileList.length) {
      let newFileList = this.state.fileList.slice()
      newFileList.splice(idx, 1)
      this.setState((state) => {
        return {
          fileList: newFileList,
          coverIdx: 0,
        }
      })
    }
  }

  handleCover (idx) {
    // console.log('handleCover...')
    this.setState((state) => {
      return {
        coverIdx: idx,
      }
    })
  }

  render() {
    const w = '160px', h = '120px'
    const { previewVisible, previewImage, fileList } = this.state
    const files = fileList.map((file, idx) => {
      let cover = null
      if (idx === this.state.coverIdx) {
        cover = (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(45, 46, 45, 0.3)',
              color: 'white',
            }}
          >
            <Icon type="picture" theme="outlined" style={{ marginTop: '30px', fontSize: '30px' }} />
            <p>封面</p>
          </div>
        )
      }
      return (
        <Col key={ file.uid } span={4} style={{ margin: '10px 0' }}>
          <FilePreview
            w={ w }
            h={ h }
            cover={ cover }
            file={ file }
            idx={ idx }
            handleCover={ this.handleCover }
            handleDelete={ this.handleDelete }
          ></FilePreview>
        </Col>
      )
    })
    return (
      <div style={{
        padding: '30px',
      }}>
        <div style={{
          borderRadius: '10px',
          background: '#515251',
          display: 'flex',
          padding: '0 10px',
        }}>
          <Row type="flex" justify="start" style={{ width: '100%' }}>
            { files }
            <Col span={4}>
              <div style={{
                position: 'relative',
                padding: '10px 10px',
                margin: '10px 0',
                width: w,
                height: h,
                border: '1px dashed #ddd',
                borderRadius: '5px',
                background: '#2D2E2D',
                textAlign: 'center',
              }}>
                <Icon type="plus" style={{
                  color: 'white',
                  fontSize: '30px',
                  marginTop: '20px',
                }} />
                <input
                  type="file"
                  name="aaa"
                  accept=".pdf,.mp4,.png,.jpg,.jpeg,.gif,.svg"
                  value={ this.state.inputFile }
                  onChange={ this.handleSelect }
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
                <h3 style={{
                  color: 'white',
                }}>
                  { '点击添加文件' }
                </h3>
              </div>
            </Col>
          </Row>
        </div>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}
