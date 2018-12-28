import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import TopHeader from './topheader/topheader.js'
import Home from './home/home.js'
import Search from './search/search.js'
import BottomFooter from './bottomfooter/bottomfooter.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopHeader></TopHeader>
          <Route exact path="/" component={ Home } />
          <Route exact path="/search" component={ Search } />
          <BottomFooter></BottomFooter>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
