import React, { Component } from "react";
import { Timeline } from "antd";
import faker from "faker";
import Mock from 'mockjs';
const text =
  "许多小伙伴会有疑问，古法红糖的食品安全问题。红糖由制糖人手工熬制、手工切割，虽不用机器加工，但也能保证生态健康。我们将红糖做了质检，可以放心食用。我们希望把原生态的原汁糖，带给更多的人。 许多小伙伴会有疑问，古法红糖的食品安全问题。红糖由制糖人手工熬制、手工切割。";
export default props => (
  <div style={{ borderTop: "1px solid #EEEEEE" }}>
  <div style={{ margin: "35px 44px 30px 107px"}}>
    <Timeline>
      <Timeline.Item
        color="#FF1367"
        style={{ fontSize: 15, fontseight: 400, lineHeight: "21px" }}
      >
        {text}
        <div>
          <img
            src={faker.image.food()} alt={Mock.Random.image('200x100', '#50B347', '#FFF', '有图')}
            style={{ height: 90, width: 90, margin:'10px 10px 10px 0', }}
          />
          <img
            src={faker.image.sports()} alt={Mock.Random.image('200x100', '#50B347', '#FFF', '有图')}
            style={{ height: 90, width: 90,  }}
          />
        </div>
        <div>
          <img
            src={faker.image.nightlife()} alt={Mock.Random.image('200x100', '#50B347', '#FFF', '有图')}
            style={{ height: 90, width: 90, marginBottom:'10px',}}
          />
        </div>
      </Timeline.Item>
      <Timeline.Item color="#FF1367">{text}</Timeline.Item>
      <Timeline.Item color="#FF1367">{text}</Timeline.Item>
      <Timeline.Item color="#FF1367">{text}</Timeline.Item>
    </Timeline>
    <div
      style={{
        position: "absolute",
        top: "85px",
        left: "45px"
      }}
    >
      2小时前
    </div>
    <div
      style={{
        position: "absolute",
        top: "375px",
        left: "45px"
      }}
    >
      1天前
    </div>
    <div
      style={{
        position: "absolute",
        top: "458px",
        left: "45px"
      }}
    >
      59天前
    </div>
    <div
      style={{
        position: "absolute",
        top: "540px",
        left: "18px"
      }}
    >
      2018-09-28
    </div>
  </div></div>
);
