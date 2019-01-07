import React, { Component, Fragment } from "react";
import TopHeader from "../topheader";
class Home extends Component {
  render() {
    return (
      <Fragment>
        <TopHeader index={1} />
        <div>Home Page</div>
      </Fragment>
    );
  }
}

export default Home;
