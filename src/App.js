import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import TopHeader from './pages/topheader/topheader'
import Home from './pages/home/home.js'
import Search from './pages/search/search.js'
import BottomFooter from './pages/bottomfooter/bottomfooter.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopHeader></TopHeader>
          <Route exact path="/" component={ Home } />
          <Route exact path="/news" component={ Search } />
          <Route exact path="/school" component={ Search } />
          <Route exact path="/activity" component={ Search } />
          <Route exact path="/contact" component={ Search } />
          <Route exact path="/search" component={ Search } />
          <BottomFooter></BottomFooter>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
