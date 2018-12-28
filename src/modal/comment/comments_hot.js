import React from "react";
import { Divider } from "antd";
import { Row, Col } from "antd";
import img12 from "../../image/012.jpg";
import img1 from "../../image/001.jpeg";
import img10 from "../../image/010.jpg";
import MyIcon from "../../my_icon";

const user1 = "导演老安：";
const user2 = "演员丽娜·朱莉叶：";
const comment1 =
  "的條別然所日怕了影近意，生言有我感際英面，別一他草；社團時任光地？住情半電地裡看畫朋我我室劇。樂不外好頭沒然萬子農片創，作用麼約，她人這說行拉樂一一往，利界優下不，微可戰、學解好間：紀一著沒印充國要半的的起山毒足實人的望。給以法我部李保立不班多，之服有能下並健食於兩失什！怎候康農小數留度運器民起，保小靈保法可教什過：營亞流色利不感行的市球，山記對效由度光輕許人車能者化願議馬？";
const comment2 =
  "間禮的究電學行男那無當……近賽我在已得遊，老府清來有門鄉足在成提共半度它要：馬度意是孩影生急園再氣去工部家無一落劇這的。";
const time1 = "2018/10/12   21:30";

export default () => (
  <div style={{ color: "#9B9B9B" }}>
    <Row>
      <Divider />
      <Col span={2}>
        <div>
          <img
            src={img12}
            style={{ width: 60, height: 60, borderRadius: 30, float: "left" }}
          />
        </div>
      </Col>
      <Col span={1} />
      <Col span={21}>
        <Row>
          <Col span={24}>
            <div style={{ marginBottom: "1%" }}>
              <span style={{ color: "#0058D0" }}>{user1}</span>
              {comment1}
            </div>
          </Col>
          <Col span={12}>
            <div style={{ float: "left", marginBottom: "5%" }}>{time1}</div>
          </Col>
          <Col span={12}>
            <div style={{ float: "right", marginBottom: "5%" }}>
              <MyIcon type="icon-praise" />
              2,999 点赞|
              <MyIcon type="icon-interactive" />
              回复
            </div>
          </Col>
        </Row>
      </Col>
      <Divider />
      <Col span={2}>
        <div>
          <img
            src={img10}
            style={{ width: 60, height: 60, borderRadius: 30, float: "left" }}
          />
        </div>
      </Col>
      <Col span={1} />
      <Col span={21}>
        <Row>
          <Col span={24}>
            <div style={{ marginBottom: "1%" }}>
              <span style={{ color: "#0058D0" }}>{user2}</span>
              {comment2}
            </div>
          </Col>
          <Col span={24}>
            <div style={{ marginBottom: "1%" }}>
              <img src={img10} style={{ width: "20%" }} />
            </div>
          </Col>
          <Col span={12}>
            <div style={{ float: "left", marginBottom: "5%" }}>{time1}</div>
          </Col>
          <Col span={12}>
            <div style={{ float: "right", marginBottom: "5%" }}>
              <MyIcon type="icon-praise" />
              2,999 点赞|
              <MyIcon type="icon-interactive" />
              回复
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

// <Divider />
//   <div>

//     <img src={img1}  style={{width:60,height:60,borderRadius:30,float:'left',margin:'10px 5px  60px' }}/>
//     <span style={{color:'#0058D0'}}>导演老安</span>
//     :{str1}
//       </span>
//     <h3 style={{fontSize:'10px', margin:'10px 0px' }} >2018/10/12   21:30
//       <span style={{fontSize:'10px',float:'right'}}>
//        喜欢|回复
//       </span>
//     </h3>
//   </div>
//   <Divider />

//   <img src={img1}  style={{width:60,height:60,float:'left',margin:'10px 5px  60px' }}/>

//   <span style={{fontSize:'10px', }}>
//   <span style={{textDecoration:"underline"}}>演员娜丽</span>
//   :{str2}
//   <br/>
//   <img src={img1}  style={{width:'100%',height:180 }}/>
//   </span>
//   <h3 style={{fontSize:'10px', margin:'10px 0px' }} >2018/10/12   21:30
//     <span style={{fontSize:'10px', float:'right'}}>
//      喜欢|回复
//     </span>
//   </h3>
