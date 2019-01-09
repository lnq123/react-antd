import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Search from "./pages/search";
import BottomFooter from "./pages/bottomfooter";
import School from "./pages/school";
import News from "./pages/news";
import Activity from "./pages/activity";
import Contact from "./pages/contact";
import ContactAD from "./pages/contact/ad";
import ContactFeedback from "./pages/contact/feedback";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/school" component={School} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact/ad" component={ContactAD} />
          <Route exact path="/contact/feedback" component={ContactFeedback} />
          <Route exact path="/search" component={Search} />
          <BottomFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
