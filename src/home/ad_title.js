import React from "react";
import { Carousel, Button } from "antd";
import img1 from "../image/001.jpeg";
import img2 from "../image/003.jpg";
import img3 from "../image/004.jpeg";
import img4 from "../image/005.jpg";
import img5 from "../image/006.jpg";
import img9 from "../image/009.jpg";
import "./hot.less";

const ad1 = (
  <div style={{ background: "#0058D1" }}>
    <div
      style={{
        marginLeft: 190,
        height: 570,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        overflow: "hidden",
        backgroundSize: "contain",
        backgroundImage: `url(${img1})`
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          width: 890,
          height: 570,
          background:
            "linear-gradient(270deg,rgba(0,94,255,0) 0%,rgba(35,93,173,0.5) 28%,rgba(0,88,209,1) 75%)"
        }}
      />
    </div>
    <div
      style={{
        position: "absolute",
        top: 135,
        left: "15%",
        width: 405
      }}
    >
      <div
        style={{
          lineHeight: "50px",
          fontWeight: 600,
          color: "rgba(255,255,255,1)",
          fontSize: "36px"
        }}
      >
        这幅广告图的正标题
      </div>
      <br />
      <div
        style={{
          fontWeight: 500,
          lineHeight: "33px",
          color: "rgba(255,255,255,1)",
          fontSize: 24
        }}
      >
        这幅广告图的副标题
      </div>
      <br />
      <div
        style={{
          fontWeight: 400,
          color: "rgba(255,255,255,1)",
          fontSize: 16,
          lineHeight: "22px"
        }}
      >
        同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
      </div>
      <br />
      <br />
      <br />
      <br />
      <Button
        style={{
          width: 150,
          height: 40,
          background:
            "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
          borderRadius: 20,
          border: "none",
          color: "#FFFFFF",
          lineHeight: "22px",
          fontSize: 16,
          fontWeight: 400
        }}
      >
        <span>播&nbsp;&nbsp;&nbsp;&nbsp;放</span>
      </Button>

      <Button
        style={{
          width: 150,
          height: 40,
          background: "none",
          borderRadius: 22,
          border: "2px solid",
          color: "#FFFFFF",
          lineHeight: "22px",
          fontSize: 16,
          fontWeight: 400,
          marginLeft: 30
        }}
      >
        <span>收&nbsp;&nbsp;&nbsp;&nbsp;藏</span>
      </Button>
    </div>
  </div>
);
const ad9 = (
  <div style={{ background: "#0058D1" }}>
    <div
      style={{
        marginLeft: 190,
        width: 1250,
        height: 570,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        overflow: "hidden",
        backgroundSize: "contain",
        backgroundImage: `url(${img9})`
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          width: 890,
          height: 570,
          background:
            "linear-gradient(270deg,rgba(0,94,255,0) 0%,rgba(35,93,173,0.5) 28%,rgba(0,88,209,1) 75%)"
        }}
      />
    </div>
    <div
      style={{
        position: "absolute",
        top: 135,
        left: 95,
        width: 405
      }}
    >
      <div
        style={{
          lineHeight: "50px",
          fontWeight: 600,
          color: "rgba(255,255,255,1)",
          fontSize: "36px"
        }}
      >
        这幅广告图的正标题
      </div>
      <br />
      <div
        style={{
          fontWeight: 500,
          lineHeight: "33px",
          color: "rgba(255,255,255,1)",
          fontSize: 24
        }}
      >
        这幅广告图的副标题
      </div>
      <br />
      <div
        style={{
          fontWeight: 400,
          color: "rgba(255,255,255,1)",
          fontSize: 16,
          lineHeight: "22px"
        }}
      >
        同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
      </div>
      <br />
      <br />
      <br />
      <br />
      <Button
        style={{
          width: 150,
          height: 40,
          background:
            "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
          borderRadius: 20,
          border: "none",
          color: "#FFFFFF",
          lineHeight: "22px",
          fontSize: 16,
          fontWeight: 400
        }}
      >
        <span>播&nbsp;&nbsp;&nbsp;&nbsp;放</span>
      </Button>

      <Button
        style={{
          width: 150,
          height: 40,
          background: "none",
          borderRadius: 22,
          border: "2px solid",
          color: "#FFFFFF",
          lineHeight: "22px",
          fontSize: 16,
          fontWeight: 400,
          marginLeft: 30
        }}
      >
        <span>收&nbsp;&nbsp;&nbsp;&nbsp;藏</span>
      </Button>
    </div>
  </div>
);

export default () => (
  <div style={{}}>
    <Carousel effect="fade">
      <div>{ad1}</div>
      <div>{ad9}</div>
      <div>{ad1}</div>
      <div>{ad9}</div>
      <div>{ad1}</div>
    </Carousel>
  </div>
);
