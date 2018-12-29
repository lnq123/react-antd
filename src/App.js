import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import TopHeader from "./pages/topheader";
import Home from "./pages/home";
import Search from "./pages/search";
import BottomFooter from "./pages/bottomfooter";
import School from "./pages/school";
import News from "./pages/news";
import Activity from "./pages/activity";
import Contact from "./pages/contact";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopHeader />
          {/* have to keep #    */}
          <Route exact path="#/" component={Home} />
          <Route exact path="#/news" component={News} />
          <Route exact path="#/school" component={School} />
          <Route exact path="#/activity" component={Activity} />
          <Route exact path="#/contact" component={Contact} />
          <Route exact path="#/search" component={Search} />
          <BottomFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
