import React, { Component } from 'react'
import { Row, Col, Input, Select, Tag, InputNumber, Button, Slider } from 'antd'
import AvatarEditor from 'react-avatar-editor'
import MyIcon from '../../my_icon'

const TextArea = Input.TextArea
const Option = Select.Option
const CheckableTag = Tag.CheckableTag

export class Title extends Component {
  constructor (props) {
    super(props)
    if (this.props.batch) {
      if (!(this.props.handleChecked && this.props.handleUnchecked)) {
        throw new Error('If you want to use batch, you must listen to check state change.')
      }
    }
  }

  render () {
    let must = null
    if (this.props.must) {
      must = (
        <span style={{
          color: '#FF1367',
        }}>
          { '* ' }
        </span>
      )
    }
    let batch = null
    if (this.props.batch) {
      batch = (
        <MyCheckableBox
          handleChecked={ () => this.props.handleChecked() }
          handleUnchecked={ () => this.props.handleUnchecked() }
          text="批量应用"
        />
      )
    }
    return (
      <div style={{
        margin: this.props.margin,
        lineHeight: '22px',
        fontSize: '16px',
        fontWeight: 400,
        color: '#4A4A4A',
      }}>
        { must }
        <span>
          { this.props.text }
        </span>
        { batch }
      </div>
    )
  }
}

class MyCheckableBox extends Component {
  state = {
    checked: false,
  }

  handleClick = (e) => {
    let curChecked = this.state.checked
    this.setState({ checked: !curChecked })

    //Report checked state to parent react-node
    if (this.props.handleChecked && this.props.handleUnchecked) {
      if (curChecked) {
        this.props.handleUnchecked()
      } else {
        this.props.handleChecked()
      }
    }
  }

  render () {
    let checkBox = (
      <MyIcon type="icon-square" />
    )
    if (this.state.checked) {
      checkBox = (
        <MyIcon type="icon-squaretick" />
      )
    }
    return (
      <span
        onClick={ this.handleClick }
        style={{
          margin: '0 5px',
          fontSize: '14px',
          color: '#0058D1',
        }}
      >
        { checkBox }
        <span>
          { this.props.text }
        </span>
      </span>
    )
  }
}

export class CountableInput extends Component {
  constructor (props) {
    super(props)
    if (!this.props.maxLen) throw new Error('Countable input must define max length.')
  }

  handleChange (e) {
    // console.log(e.target.value)
    if (e.target.value.length > this.props.maxLen) return
    this.props.handleChange(e.target.value)
  }

  render () {
    let selfStyle = Object.assign({}, this.props.style)
    selfStyle.position = 'relative'
    return (
      <div style={ selfStyle }>
        <Input
          placeholder={this.props.placeholder}
          value={ (this.props.value || '') }
          disabled={ this.props.disabled || false }
          onChange={ this.handleChange.bind(this) }
        />
        <span style={{
          position: 'absolute',
          height: '100%',
          right: '10px',
        }}>
          { (this.props.value || '').length + '/' + this.props.maxLen }
        </span>
      </div>
    )
  }
}

export class MyCoverEditor extends Component {
  state = {
    scale: 1,
    rotate: 0,
  }

  componentDidMount () {
    this.props.onRef(this)
  }

  saveCrop () {
    const canvas = this.refs.avatarEditor.getImage()
    this.props.handleSave(canvas.toDataURL())
  }

  render () {
    return (
      <div style={ this.props.style }>
        <Row type="flex" justify="start">
          <Col span={12}>
            <AvatarEditor
              ref="avatarEditor"
              image={ this.props.thumbUrl }
              width={ this.props.width }
              height={ this.props.height }
              border={ this.props.border }
              color={[255, 255, 255, 0.5]} // RGBA
              scale={ this.state.scale }
              rotate={ this.state.rotate }
            />
          </Col>
          <Col span={12}>
            <div style={{ margin: '25px 0 0 0' }}>
              { 'Scale: ' }
              <Slider
                min={1}
                max={2}
                step={0.1}
                onChange={ (value) => this.setState({ scale: value }) }
              />
            </div>
            <div>
              { 'Rotation: ' }
              <Slider
                min={0}
                max={359}
                step={1}
                onChange={ (value) => this.setState({ rotate: value }) }
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export class CountableTextArea extends Component {
  constructor (props) {
    super(props)
    if (!this.props.maxLen) throw new Error('Countable text area must define max length.')
  }

  handleChange (e) {
    // console.log(e.target.value)
    if (e.target.value.length > this.props.maxLen) return
    this.props.handleChange(e.target.value)
  }

  render () {
    let selfStyle = Object.assign({}, this.props.style)
    selfStyle.position = 'relative'
    const rows = this.props.rows || 6
    return (
      <div style={ selfStyle }>
        <TextArea
          placeholder={this.props.placeholder}
          value={ this.props.value }
          rows={rows}
          disabled={ this.props.disabled || false }
          onChange={ this.handleChange.bind(this) }
          style={{ backgroundColor: this.props.bgColor }}
        />
        <span style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
        }}>
          { this.props.value.length }/{ this.props.maxLen }
        </span>
      </div>
    )
  }
}

export class Classification extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (i) {
    let c = Object.assign({}, (this.props.value || {}))
    c[i] = !c[i]
    this.props.handleChange(c)
  }

  render () {
    const classes = this.props.classes
    let tags = classes.map((v, i) => {
      return (
        <CheckableTag
          key={ v }
          checked={ (this.props.value || {})[i] }
          onChange={ () => this.handleChange(i) }
          style={(this.props.value || {})[i] ? {} : { background: '#EEEEEE', color: '#9B9B9B' }}
        >
          { v }
        </CheckableTag>
      )
    })
    let options = classes.map((v, i) => {
      return (
        <Option key={ v } value={i}>
          { v }
        </Option>
      )
    })
    return (
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: (this.props.disabled || false) ? '' : 'none',
        }}></div>
        <Select
          showSearch
          placeholder="搜索分类"
          optionFilterProp="children"
          disabled={ this.props.disabled || false }
          onChange={ this.handleChange }
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          style={ this.props.selectStyle }
          dropdownStyle={{
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          suffixIcon={ <MyIcon type="icon-spread" /> }
        >
          { options }
        </Select>
        <div style={ this.props.radioPartStyle }>
          { tags }
        </div>
      </div>
    )
  }
}

export class AlbumSelector extends Component {
  render () {
    const albums = this.props.albums
    let options = albums.map((v, i) => {
      return (
        <Option key={ v } value={v}>
          { v }
        </Option>
      )
    })
    let select = (
      <Select
        showSearch
        placeholder="请选择归属列表"
        optionFilterProp="children"
        disabled={ this.props.disabled }
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        onChange={ (v) => this.props.handleChange(v) }
        style={{
          width: '280px',
          marginTop: '10px',
          backgroundColor: '#F8F8F8',
          borderRadius: '4px',
        }}
        dropdownStyle={{
          backgroundColor: '#F8F8F8',
          borderRadius: '4px',
        }}
        suffixIcon={ <MyIcon type="icon-spread" /> }
      >
        { options }
      </Select>
    )
    if (this.props.value) {
      select = (
        <Select
          showSearch
          placeholder="请选择归属列表"
          optionFilterProp="children"
          disabled={ this.props.disabled }
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          value={ this.props.value }
          onChange={ (v) => this.props.handleChange(v) }
          style={{
            width: '280px',
            marginTop: '10px',
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          dropdownStyle={{
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          suffixIcon={ <MyIcon type="icon-spread" /> }
        >
          { options }
        </Select>
      )
    }
    return (
      <div>
        { select }
      </div>
    )
  }
}
