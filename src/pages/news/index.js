import React, { Component, Fragment } from "react";
import TopHeader from "../topheader";
class News extends Component {
  render() {
    return (
      <Fragment>
        <TopHeader index={2} />
        <div>News Page</div>
      </Fragment>
    );
  }
}

export default News;
