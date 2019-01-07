import React from "react";
// import Carousel from "@brainhubeu/react-carousel";
import faker from "faker";
import { Carousel } from "antd";
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  effect:'fade',
  autoplay:true,
};
export default () => (
  <Carousel  {...settings} >
    <div>
      <img style={{width:'100%'}} alt='' src='/image/activity/banner1.png' />
    </div>
    <div>
      <img style={{width:'100%'}} alt='' src='/image/activity/banner2.png' />
    </div>
    <div>
      <img style={{width:'100%'}} alt='' src='/image/activity/banner3.png' />
    </div>
  </Carousel>
);
