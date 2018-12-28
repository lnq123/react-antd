import React, { Component } from 'react'

class Logo extends Component {
  render () {
    return (
      <a href="#/" style={{ color: '#fff' }}>
        <img
          src={ require('../image/logo_home.png') }
          style={{
            margin: '7px 0',
            background: 'transparent',
            width: '102px',
            height: '27px',
          }}
        />
      </a>
    )
  }
}

export default Logo
