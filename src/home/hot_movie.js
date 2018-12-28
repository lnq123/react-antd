import React from "react";
import { Carousel } from "antd";

import HotMovieList from "./hot_movie_list";

export default () => (
  <div
    style={{
      maxWidth: 1440,
      margin: "0 0",
      minWidth: 1200
    }}
  >
    <Carousel>
      <div>
        <HotMovieList />
      </div>
      <div>
        <HotMovieList />
      </div>
      <div>
        <HotMovieList />
      </div>
      <div>
        <HotMovieList />
      </div>
      <div>
        <HotMovieList />
      </div>
    </Carousel>
  </div>
);
