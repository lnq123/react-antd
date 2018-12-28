import React, { Component } from "react";
import { Row, Col } from "antd";
import MyIcon from "../../my_icon";
const intro1 =
  "算几干油受来代主置心，需分家每争越组铁提，务林陕佣求F种圆。业光化难理办今者论，派存书半政快法据界，八5对战较辅肃。样手养成断状生眼林看济，性度石影8多林四。己下成便况而们，月年上入容飞而，称C也发证。干两格自东从这为京写了局，约子象信杏料来积全。组平起型次团她使农太位，走六通果值以及常后，很大求苗三变但合当。图很你断无由去收，建万半年除时，院改承步院利。的身三入马太解决思，省因象王因己积，该战GA值枕空。共马包利去先从或，清增土运划步，前系F确建覆。及取物只府型质部精，下则走水下外无半，别心屈争见助工。道取持主百市儿色平，千查油民对车布反，间格B证万局千。张又元济气手子选更进你，级点起结外因象支打，决气蠢思世两思问求。华格可统育使织式家认被传马油我类，做员时子识团孤形2自最求抓。层设众然没果始局来效便观，形长上月经打老种技定半较，物军6芳整特往率枕情。此热家验步无万学活上，离院果分放与使始进，任称杨县张样问志。节持基来置界素，会群束称。 必派多文厂今收育先，条连已不下或越真王，少杏知府走画定。商术王火说府些计龙增，心响类并术高少或区月，细政J清济秤V见Q。位同选思规很选大亲民，业米车合约要民开住然，事飞M动问和展批。众增全来成劳形特山条，运解克用米果科有装，派还豆两同大日段。级近别展包观划京，应圆那风事想求，制详C个干才。九总米劳权今断质采，即没厂求传志业史史，象询个记机心省。增强元飞色出最革，院土转些集每，采2呀图F。交具意体育已社织十意，条起大往专面飞风，质活束证赚县吼陕。严下色生别来，每较育究，开建委观。";
const str1 = intro1.slice(0, 150) + "...";
const intro = <span>&nbsp;&nbsp;&nbsp;&nbsp;{intro1}</span>;
const str = <span>&nbsp;&nbsp;&nbsp;&nbsp;{str1}</span>;
const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";

export default class Intro extends Component {
  state = { closeIntro: true, show: str };

  showModal = () => {
    this.setState({
      closeIntro: !this.state.closeIntro,
      show: this.state.closeIntro ? intro : str
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <div style={{ borderTop: "1px solid rgba(216,216,216,1)" }} />
            <div style={{ margin: "2% 0" }}>
              <Row>
                <Col span={4}>
                  <img src={img1} style={{ width: "100%" }} />
                </Col>
                <Col span={1} />
                <Col span={18}>
                  <Row>
                    <Col span={24}>
                      <div>{this.state.show}</div>
                    </Col>
                  </Row>
                </Col>
                <Col span={1} />
              </Row>
              <Row>
                <Col span={8} />
                <Col span={8}>
                  <br />
                  <div
                    style={{ color: "#FF1367", margin: "0 20%" }}
                    onClick={this.showModal}
                  >
                    {this.state.closeIntro ? (
                      <span>
                        <MyIcon type="icon-spread" />
                        展开全部
                      </span>
                    ) : (
                      <span>
                        <MyIcon type="icon-shrink" />
                        收起
                      </span>
                    )}
                  </div>
                </Col>
                <Col span={8} />
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
