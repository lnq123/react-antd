import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import img1 from "../image/001.jpeg";
import MyIcon from "../my_icon";
import Right from "./title_right";
import PlayModal from "../modal/play_fund";

export default class Title extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    this.refs.subcomponents.showFund();
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: 1200,
          height: 273,
          background: "rgba(255,255,255,1)",
          boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
          borderRadius: 16,
          margin: "auto",
          position: "relative",
          marginTop: "30px"
        }}
      >
        <div
          style={{
            backgroundImage: `url(${this.props.img ? this.props.img : "black"})`,
            width: 395,
            height: 273,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 16
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "0 0 273px 155px",
              borderColor: " transparent transparent #fff transparent",
              float: "right"
            }}
          />
          <Button
            shape="circle"
            style={{
              position: "absolute",
              top: "106px",
              left: "283px",
              width: 71,
              height: 71,
              color: "#fff",
              background: this.props.color ? this.props.color : "black"
            }}
            onClick={this.handleClick.bind(this)}
          >
            <MyIcon type={"icon-play_fill"} style={{ fontSize: 40 }} />
          </Button>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 395
          }}
        >
          <Right
            fontcolor={this.props.fontcolor}
            color={this.props.color}
            percent={this.props.percent}
            money={this.props.money}
          />
        </div>
        <PlayModal ref="subcomponents" fontcolor={this.props.fontcolor} percent={this.props.percent} money={this.props.money}/>
      </div>
    );
  }
}
