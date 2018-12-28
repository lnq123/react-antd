# FT Chain front-end

## Develop framework

We use ReactJS to develop our first version of FT Chain's front-end.

## Project directory structure

```
FT Chain
├── public
│   └── index.html
├── src
│   └── bottom_footer
│   └── home
│   └── image # for static image
│   └── modal
│   └── search
│   └── top_header
│   └── App.js
│   └── index.js
│   └── serviceWorker.js
│   └── store.js
├── config-overrides.js
├── eslintrc.js
└── package.json
```

## Brief introduction and component code for the project

### public

`public/` folder contains basic static html web page and favicon.

index.html 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>FT Chain</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
      本App需要允许JavaScript运行才能正常运作。您见到本消息是由于您的浏览器禁止JavaScrip。请参考：http://360.bgu.edu.cn/help/openJsHelp.html
    </noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

### bottom_footer

Footer is the bottom component of the whole page.

bottom_footer.js

```javascript
import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class BottomFooter extends Component {
  render () {
    return (
      <div style={{
        width: '100%',
        background: '#3D316A',
      }}>
        <Row justify="start">
          <Col offset={6} span={12}>
            <Row type="flex" justify="space-around">
              <Col span={3}>
                <div style={{
                  color: '#fff',
                  fontSize: '24px',
                  padding: '30px 0',
                  marginTop: '28px',
                }}>FT 链</div>
              </Col>
              <Col span={3}>
                <Section
                  title="关于本站"
                  subtitles={[
                    '团队介绍',
                    '帮助',
                    '联系我们',
                  ]}
                />
              </Col>
              <Col span={3}>
                <Section
                  title="加入我们"
                  subtitles={[
                    '企业文化',
                    '招聘信息',
                    '联系邮箱',
                  ]}
                />
              </Col>
              <Col span={3}>
                <Section
                  title="商业合作"
                  subtitles={[
                    '业务范围',
                    '过往项目',
                    '合作洽谈',
                  ]}
                />
              </Col>
              <Col span={3}>
                <Section
                  title="社区服务"
                  subtitles={[
                    '内容申诉',
                    '上传规则',
                    '客服',
                  ]}
                />
              </Col>
              <Col span={3}>
                <Section
                  title="手机APP"
                  subtitles={[
                    '安卓下载',
                    'IOS下载',
                    '关注公众号',
                  ]}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={24}>
            <div style={{
              marginTop: '32px',
              marginBottom: '22px',
              color: '#9B9B9B',
              fontSize: '16px',
              textAlign: 'center',
            }}>
              &copy; 2018 UnityLabs &reg; All rights reserved.
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

class Section extends Component {
  render () {
    const subtitles = this.props.subtitles.map((item, idx) => {
      return (
        <div key={item} style={{ fontSize: '12px', lineHeight: '28px' }}>
          { item }
        </div>
      )
    })
    return (
      <div style={{ color: '#BBBCBB', marginTop: '28px' }}>
        <div style={{ fontSize: '16px', lineHeight: '28px' }}>
          { this.props.title }
        </div>
        { subtitles }
      </div>
    )
  }
}
```

### home

`home/` folder contains components for home page. Home page is made up of various components such as hot movie cards, new uploaded episodes and watch list.

home.js

```javascript
import React, { Component } from 'react'
import Ad from './ad_title'
import HotMovieList from './hot_movie_list'
import { Row, Col,Button,Icon,Carousel } from 'antd'
import WatchList from './watch_list'
import NewUpload from './new_upload'
import PlayModal from '../modal/play_modal'
import MyIcon from '../my_icon'
import { Tabs } from 'antd';
import './hot.less'

const TabPane = Tabs.TabPane;

class Home extends Component {
  render () {
    return (
      <div
        style={{
          backgroundColor:'#FEFEFE'
        }}
      >
      <Row gutter={12}>
        <Col span ={24}>
          <Ad />
        </Col>
        <Col span ={24}><div style={{
          backgroundColor:'#FFFFFF',boxShadow:'0px 2px 31px 0px rgba(205,205,205,0.27)'
        }}>
          <Row>
            <Col span ={1} />
              <Col span ={11}>
                <Tabs defaultActiveKey="1" >
                  <TabPane tab="推荐" key="1"></TabPane>
                  <TabPane tab="视频" key="2"></TabPane>
                  <TabPane tab="文学" key="3"></TabPane>
                  <TabPane tab="其他" key="4"></TabPane>
                </Tabs>
              </Col>
              <Col span ={12} />
          </Row>
        </div></Col>
        <Col span={24} ><div style={{marginTop:'1%'}}>
            <Row>
               <Carousel>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
              </Carousel>
            </Row>
        </div></Col>
        <Col span={24} >
            <Row>
               <Carousel>
                <div><WatchList /></div>
                <div><WatchList /></div>
                <div><WatchList /></div>
                <div><WatchList /></div>
                <div><WatchList /></div>
              </Carousel>
            </Row>
        </Col>
        <Col span={24} >
          <div><NewUpload /></div>
        </Col>
        <Col span ={24}>
          <Row>
            <Col span={9} />
            <Col span={6} >
              <div>
                <Button style={{
                  background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                  margin:'5% 10%',
                  width:'80%',
                  boxShadow:'0px 5px 10px 0px rgba(255,79,81,0.66)',
                  borderRadius:'41px',
                  border:'0px'
                }}> 
                <MyIcon type="icon-refresh" theme="outlined" style={{color:'#FFFFFF'}} />
                <span style={{color:'#FFFFFF'}}>加载更多</span>
                </Button>
              </div>
            </Col>
            <Col span={9} />
          </Row>
        </Col>
      </Row>
      <PlayModal />
      </div>
    )
  }
}

export default Home
```

hot_movie_list.js

```javascript
import React from 'react'
import MovieCards from './movie_cards'

import { Row, Col,Button } from 'antd';

import img1 from'../image/001.jpeg'
import img3 from'../image/003.jpg'
import img4 from'../image/004.jpeg'
import img5 from'../image/005.jpg'
import img6 from'../image/006.jpg'
import img7 from'../image/007.jpg'
import img8 from'../image/008.jpg'
import img9 from'../image/009.jpg'
import img10 from'../image/010.jpg'
import img11 from'../image/011.jpg'
import img12 from'../image/012.jpg'
import img13 from'../image/013.jpg'
import MyIcon from '../my_icon' 

  
export default () => (
        <div style={{margin:'1% 0'}}>
            <Row gutter={12}>
                <Col span={1}>
                    <div style={{maxWidth:60}}>
                        <Button style={{boxShadow:'none',color:'rgba(254,254,254,1)',borderRadius:'10px',border:0, position:'fixed', top:'33%',padding:0,height:'280px'    
                        }}>
                            <MyIcon type={ 'icon-enter-copy'} style={{fontSize:'300%', color:'#EEEEEE'}}/>
                        </Button>
                    </div>
                </Col>
                <Col span={22}>
                    <Row>
                        <Col span={12}>
                            <div style={{margin:'1% 0'}}>
                                <span
                                    style={{padding:'1%',background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)'}}
                                />
                                <span style={{fontWeight:600,fontSize:'150%',color:'#222222',}}>
                                    &nbsp;&nbsp;热门佳作
                                </span>
                                <span style={{fontWeight:600,fontSize:'150%',color:'#BCBCBC'}}>
                                    &nbsp;&nbsp;POPULAR
                                </span>
                                <span style={{fontWeight:400,fontSize:'100%',color:'#BCBCBC'}}>
                                    &nbsp;&nbsp;查看更多 》
                                </span>
                            </div>
                        </Col>
                        <Col span={12} />
                    </Row>
                        <Col span={24}><div style={{margin:'1% 0'}}>
                            <Row gutter={12}>
                                <Col span={7} >
                                    <MovieCards 
                                    img={img6} title1={"自媒体《独白》团队访问徐峥：药神不是药神,徐峥还是徐峥"}
                                    type1={'视频'} type2={'访谈'} time={'1460:59'}
                                    /></Col>
                                    <Col span={4} ><MovieCards 
                                    img={img4} title1={"穿越清朝智斗妃嫔成皇后一统后宫"}
                                    type1={'文学'} type2={'言情'} time={'长篇小说'}
                                    /></Col>
                                    <Col span={6} ><MovieCards 
                                    img={img13} title1={"BABEL"}
                                    title2={'Mumford & Sons'} type1={'音乐'} type2={'独立摇滚'} time={'10:59'}
                                    /></Col>
                                    <Col span={7} ><MovieCards 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"}
                                    type1={'其他'} type2={'编舞'} time={'1460:59'}
                                    /></Col>
                            </Row></div>
                        </Col>
                    <Row>
                    </Row>
                        <Col span={24}><div style={{margin:'1% 0 2%'}}>
                            <Row gutter={12}>
                                <Col span={4} ><MovieCards 
                                    img={img7} title1={"穿越清朝智斗妃嫔成皇后一统后宫"}
                                    type1={'文学'} type2={'言情'} time={'长篇小说'}
                                /></Col>
                                <Col span={7} ><MovieCards 
                                    img={img12} title1={"自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"}
                                    type1={'其他'} type2={'访谈'} time={'1460:59'}
                                /></Col>
                                <Col span={7} ><MovieCards
                                    img={img9} title1={"自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"}
                                    type1={'视频'} type2={'访谈'} time={'1460:59'}
                                /></Col>
                                <Col span={6} ><MovieCards 
                                    img={img10} title1={"BABEL"} time={'10:59'}
                                    title2={'Mumford & Sons'} type1={'音乐'} type2={'独立摇滚'}
                                /></Col>
                            </Row></div>
                        </Col>
                    <Row>
                    </Row>
                </Col>
                <Col span={1}>
                    <Button style={{boxShadow:'none',color:'rgba(254,254,254,1)',borderRadius:'10px',border:0, position:'fixed', top:'33%',padding:0,height:'280px'    
                        }}>
                            <MyIcon type={ 'icon-enter'} style={{fontSize:'300%', color:'#EEEEEE'}}/>
                    </Button>
                </Col>
            </Row>
        </div>
 )
```

watch_list.js

```javascript
import React from 'react'
import MovieCards from './movie_cards'

import { Row, Col,Button } from 'antd';

import img1 from'../image/001.jpeg'
import img3 from'../image/003.jpg'
import img4 from'../image/004.jpeg'
import img5 from'../image/005.jpg'
import img6 from'../image/006.jpg'
import img7 from'../image/007.jpg'
import img8 from'../image/008.jpg'
import img9 from'../image/009.jpg'
import img10 from'../image/010.jpg'
import img11 from'../image/011.jpg'
import img12 from'../image/012.jpg'
import img13 from'../image/013.jpg'
import MyIcon from '../my_icon' 

  
export default () => (
        <div style={{margin:'2% 0'}}>
            <Row gutter={12}>
                <Col span={1}>
                    <div style={{maxWidth:60}}>
                        <Button style={{boxShadow:'none',color:'rgba(254,254,254,1)',borderRadius:'10px',border:0, position:'fixed', top:'33%',padding:0,height:'280px'    
                        }}>
                            <MyIcon type={ 'icon-enter-copy'} style={{fontSize:'300%', color:'#EEEEEE'}}/>
                        </Button>
                    </div>
                </Col>
                <Col span={22}>
                    <Row>
                        <Col span={12}>
                            <div style={{margin:'1% 0'}}>
                                <span
                                    style={{padding:'1%',background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)'}}
                                />
                                <span style={{fontWeight:600,fontSize:'150%',color:'#222222',}}>
                                    &nbsp;&nbsp;我的关注
                                </span>
                                <span style={{fontWeight:600,fontSize:'150%',color:'#BCBCBC'}}>
                                    &nbsp;&nbsp;FAVOURATE
                                </span>
                                <span style={{fontWeight:400,fontSize:'100%',color:'#BCBCBC'}}>
                                    &nbsp;&nbsp;查看更多 》
                                </span>
                            </div>
                        </Col>
                        <Col span={12} />
                    </Row>
                        <Col span={24}><div style={{margin:'1% 0'}}>
                            <Row gutter={12}>
                                <Col span={7} >
                                    <MovieCards 
                                    img={img13} title1={"自媒体《独白》团队访问徐峥：药神不是药神,徐峥还是徐峥"}
                                    type1={'视频'} type2={'访谈'} time={'1460:59'}
                                    /></Col>
                                    <Col span={4} ><MovieCards 
                                    img={img10} title1={"穿越清朝智斗妃嫔成皇后一统后宫"}
                                    type1={'文学'} type2={'言情'} time={'长篇小说'}
                                    /></Col>
                                    <Col span={6} ><MovieCards 
                                    img={img7} title1={"BABEL"}
                                    title2={'Mumford & Sons'} type1={'音乐'} type2={'独立摇滚'} time={'10:59'}
                                    /></Col>
                                    <Col span={7} ><MovieCards 
                                    img={img4} title1={"自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"}
                                    type1={'其他'} type2={'编舞'} time={'1460:59'}
                                    /></Col>
                            </Row></div>
                        </Col>
                    <Row>
                    </Row>
                        <Col span={24}><div style={{margin:'1% 0 1%'}}>
                            <Row gutter={12}>
                                <Col span={4} ><MovieCards 
                                    img={img12} title1={"穿越清朝智斗妃嫔成皇后一统后宫"}
                                    type1={'文学'} type2={'言情'} time={'长篇小说'}
                                /></Col>
                                <Col span={7} ><MovieCards 
                                    img={img9} title1={"自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"}
                                    type1={'其他'} type2={'访谈'} time={'1460:59'}
                                /></Col>
                                <Col span={7} ><MovieCards
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"}
                                    type1={'视频'} type2={'访谈'} time={'1460:59'}
                                /></Col>
                                <Col span={6} ><MovieCards 
                                    img={img5} title1={"BABEL"} time={'10:59'}
                                    title2={'Mumford & Sons'} type1={'音乐'} type2={'独立摇滚'}
                                /></Col>
                            </Row></div>
                        </Col>
                    <Row>
                    </Row>
                </Col>
                <Col span={1}>
                    <Button style={{boxShadow:'none',color:'rgba(254,254,254,1)',borderRadius:'10px',border:0, position:'fixed', top:'33%',padding:0,height:'280px'    
                        }}>
                            <MyIcon type={ 'icon-enter'} style={{fontSize:'300%', color:'#EEEEEE'}}/>
                    </Button>
                </Col>
            </Row>
        </div>
 )
```

### modal

`modal/` folder is for content display dialog. When users want to look into the detail information for any items in FT Chain and interact with them, FT Chain web site will open this dialog for users.

play_modal.js

```javascript
import React, { Component } from 'react';
import { Modal } from "antd";
import SidePanel from './comment/side_panel';
import CommentBar from './comment/comment_bar';
import PaidMovie from './movie/paid_movie';
import Comments from './comment/comment_editor';
import { Row, Col,Button} from 'antd';
import MyIcon from '../my_icon'
class PlayModal extends Component{
  

  state = { visible: true }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }



  render(){
    return(
      <div >
        <button onClick={this.showModal} >弹窗</button>
        
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          centered={true}
          width={'90%'}
          bodyStyle={{padding:'0px',margin:'5% 0'}}
          
        >
        <div >
        <Row >
        
            <Col span={19}>
                <Row>
                    <Col>
                    <div id='top'>
                    <PaidMovie />
                    </div>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                    <CommentBar />
                    </Col>
                    
                </Row>
                <Row>
                    <Col><div id='comment'>
                    <Comments />
                    </div></Col>
                </Row>
            </Col>
            
            <Col span={5}>
                <Row>
                  <Col><SidePanel /></Col>
                  <Col>
                    <div style={{position:'fixed',top:'80%'}}>
                      <div style={{
                      }}><a href='#top' >&nbsp;<Button 
                        style={{width:'68px',height:'68px',
                        background:'rgba(238,238,238,1',
                        borderRadius:'17px'}}
                      ><MyIcon type='icon-totop' style={{fontSize:29,color:'#BCBCBC'}} /></Button></a></div>
                      <br />
                      <div style={{}}><a href='#comment' >&nbsp;<Button 
                        style={{width:'68px',height:'68px',
                        background:'rgba(238,238,238,1',
                        borderRadius:'17px'}}
                        ><MyIcon type='icon-interactive' style={{fontSize:40,color:'#BCBCBC'}}/></Button></a></div>
                    </div>
                  </Col>
                </Row>
                
            </Col>
            
        </Row>
        </div>
        
        </Modal>
        
      </div>
    );
  }
}

export default PlayModal;
```

comment_bar.js

```javascript
import React from 'react';
import { Tabs } from 'antd';
import Intro from './introduction';
import Staff from './staff';
import CopyRight from './copy_right';
const TabPane = Tabs.TabPane;


const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";


export default () => (
  
  <div style={{padding:'2% 2% 1% 2%', margin:'1% 1% 0% 1%',backgroundColor:'#FFFFFF',
  borderRadius:'16px'}} >
    <Tabs defaultActiveKey="1">
      <TabPane tab="简&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;介" key="1"><Intro /></TabPane>
      <TabPane tab="版权信息" key="2"><CopyRight /></TabPane>
    </Tabs>
    
  </div>
  )
```

comment_editor.js

```javascript
import React from 'react';
import CommentEditor from './comment_editor';
import HotComments from './comments_hot';
import NewComments from './comments_new';
import { Row, Col } from 'antd';
import MyIcon from '../../my_icon'

import { Input,Icon,Button } from 'antd';
const { TextArea } = Input;


export default () => (
  <div style={{padding:'2.5%', margin:'1% 1% 1% 1%',backgroundColor:'#FFFFFF',borderRadius:'16px'}}>
    
    <Row>
      <Col>
        <Row>
          <Col>
            <div style={{ margin: '1% 0' }}>
              <TextArea  placeholder="在此写下您的评论 …" autosize={{ minRows: 3, maxRows: 3 }} />
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col span={3}>
            <Row>
              <Col span={8}>
                <MyIcon type="icon-Smile"  style={{fontSize:'150%',marginLeft:'1%',marginRight: '1%'}}/>
              </Col >
              <Col span={8}>
                <MyIcon type="icon-at"  style={{fontSize:'150%',marginRight: '1%'}}/>
              </Col>
              <Col span={8}>
                <MyIcon type="icon-picture" style={{fontSize:'150%',marginRight: '1%'}} />
              </Col>
            </Row>
          </Col>
          
          <Col span={19} />
          <Col span={2}>
            <div>
              <Button style={{
                background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                float:'right',width:'200%',
                boxShadow:'0px 5px 10px 0px rgba(255,79,81,0.66)',
                borderRadius:'41px',
                border:'0px'
              }}> 
              <span style={{color:'#FFFFFF'}}>评论</span>
              </Button>
            </div>
          </Col>
        </Row>
        
        
        <Row>
          <Col>
            <Row>
              <Col span={24}>
                <div style={{fontSize:'100%',marginTop: '5%',fontWeight:500,color:'rgba(74,74,74,1)'}}>
                  热门评论
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <div><HotComments /></div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col span={24}>
                <div style={{fontSize:'100%',marginTop: '5%',fontWeight:500,color:'rgba(74,74,74,1)'}}>
                  最新评论 (1,999万)
                </div>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <div><NewComments /></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
```

side_panel.js

```javascript
import React from 'react';
import { Button,Tabs } from "antd";
import { Row, Col,BackTop } from 'antd';
import img1 from'../../image/001.jpeg'
import MyIcon from '../../my_icon'
import SidePlayer from './side_player'
const TabPane = Tabs.TabPane;
export default () => (
  <div >
    <Row>
      <Col>
        <div style={{padding:'2.5%', margin:'3% 3% 3% 1%',backgroundColor:'#FFFFFF',borderRadius:'16px'}}>
        <Row>
          
          <Col span={24}>
            <div style={{textAlign:'center'}}><img src={img1}  style={{width:130,height:130,borderRadius:65}}/></div>
          </Col>
          
        </Row>
        
        <Row>
          <Col>
            <div style={{textAlign:'center',margin:'2%',fontSize:'100%',fontWeight:400,color:'rgba(0,0,0,1)'}}>
              导演老李
            </div>
            <div style={{textAlign:'center',margin:'1%',fontSize:'90%',fontWeight:400,color:'rgba(74,74,74,1)'}}>
              100 作品  202.33万 粉丝
            </div >
            <div style={{margin:'2% 4% 8%',fontSize:'80%',fontWeight:400,color:'rgba(155,155,155,1)'}}>
             &nbsp;&nbsp;&nbsp;&nbsp;近意，生言有我感際英面，別一他草；社團時任光地？住情半電地裡看畫朋我我室劇。
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Row>
              <Col>
                <div style={{textAlign:'center'}}><Button  style={{background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                  boxShadow:'0px 5px 10px 0px rgba(255,79,81,0.66)',border:0,width:'60%',
                  borderRadius:'41px',color:'#FFFFFF'}}>
                  <MyIcon type='icon-money'/>打赏</Button></div>
              </Col>
            </Row>
             <Row>
              <Col>
                <div style={{textAlign:'center',margin:'5% 0'}}><Button  style={{background:'#FFFFFF',
                  border:'1px solid #FF1367',width:'60%',
                  borderRadius:'41px',color:'#FF1367'}}>
                  <MyIcon type='icon-add'/>关注</Button></div>
              </Col>
            </Row>
          </Col>
        </Row></div>
        
        <div style={{ margin:'3% 3% 3% 1%',borderRadius:'16px'}}>
        <Row>
          <Col>
            <SidePlayer />
          </Col>
        </Row>
        </div>
      </Col>
    </Row>
  </div>
);
```

side_player.js

```javascript
import React from 'react'
import { Row, Col } from 'antd';
import MovieList from '../movie/movie_list';
import img1 from'../../image/001.jpeg'
import img3 from'../../image/003.jpg'
import img4 from'../../image/004.jpeg'
import img5 from'../../image/005.jpg'
import img6 from'../../image/006.jpg'
import img7 from'../../image/007.jpg'
import img8 from'../../image/008.jpg'
import img9 from'../../image/009.jpg'
import img10 from'../../image/010.jpg'
import img11 from'../../image/011.jpg'
import img12 from'../../image/012.jpg'
import img13 from'../../image/013.jpg'
const time ='1460:59'

export default () => (
    <div style={{height:720}}>
        <div style={{margin:'2% 0  0',background:'#FFFFFF',
            borderTopRightRadius:'18px',borderTopLeftRadius:'18px',
            padding:'4%',fontWeight:500
        }}>视频表列</div>
        
        <div
            style={{backgroundColor:'#EEEEEE',
            borderBottomRightRadius:'18px',borderBottomLeftRadius:'18px',
            height:'500px'}}
        ><div style={{
            height:'482px',overflow:'auto',
        }}>
        <Row>
            <Col span ={1}/>
            <Col span ={22}>
                <Row>
                    <Col span ={24}>
                        <div style={{margin:'6% 0 3%'}}><MovieList img={img6} time={time}/></div>
                    </Col>
                    <Col span ={24}>
                        <div style={{margin:'3% 0'}}><MovieList img={img3} time={time}/></div>
                    </Col>
                    <Col span ={24}>
                        <div style={{margin:'3% 0'}}><MovieList img={img4} time={time}/></div>
                    </Col>
                    <Col span ={24}>
                        <div style={{margin:'3% 0'}}><MovieList img={img7} time={time} /></div>
                    </Col>
                    <Col span ={24}>
                        <div style={{margin:'3% 0'}}><MovieList img={img8} time={time}/></div>
                    </Col>
                    <Col span ={24}>
                        <div style={{margin:'3% 0'}}><MovieList img={img9} time={time}/></div>
                    </Col>
                    <Col span ={24}>
                        <div style={{margin:'3% 0'}}><MovieList img={img10} time={time}/></div>
                    </Col>
                    <Col span ={24}>
                        <div style={{margin:'3% 0'}}><MovieList img={img11} time={time}/></div>
                    </Col>
                    <Col span ={24}>
                        <div style={{margin:'3% 0'}}><MovieList img={img12} time={time}/></div>
                    </Col>
                </Row>
            </Col>
            <Col span ={1}/>
        </Row>
        </div></div>
    </div>
    )
```

### search

`search/` page is under construction.

### top_header

Header is the top component of home page and search page.

top_header.js

```javascript
import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'
import Logo from './logo'
import Category from './category'
import AlertBell from './alert_bell'
import MyIcon from '../my_icon'

export default class TopHeader extends Component {
  state ={
    scrollOut: false,
    clientWidth: 1000,
    height: 42,
  }

  componentDidMount () {
    this.setState((state) => {
      return {
        clientWidth: this.refs.topheader.clientWidth,
      }
    })
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll (e) {
    // console.log(document.documentElement.scrollTop)
    if (!this.state.scrollOut && document.documentElement.scrollTop > 40) {
      this.setState(() => {return { scrollOut: true }})
    } else if (this.state.scrollOut && document.documentElement.scrollTop < 40) {
      this.setState(() => {return { scrollOut: false }})
    }
  }

  handleHover (e) {
    this.setState((state) => {
      return {
        clientWidth: this.refs.topheader.clientWidth,
      }
    })
  }

  render () {
    return (
      <div
        ref="topheader"
        style={{
          position: 'fixed',
          width: '100%',
          height: `${this.state.height}px`,
          border: 0,
          // background: 'linear-gradient(rgba(45, 46, 45, 0.8), rgba(45, 46, 45, 0.01))',
          background: this.state.scrollOut ? 'rgba(56, 57, 56, 0.7)' : 'transparent',
          zIndex: '99',
          transition: 'all 0.3s',
        }}
      >
        <Row>
          <Col span={12}>
            <Row type="flex" justify="start">
              <Col span={4}></Col>
              <Col span={4}>
                <Logo></Logo>
              </Col>
              <Col span={4}>
                <Category
                  subheight={ this.state.height }
                  subwidth={ this.state.clientWidth }
                  handleHover={ this.handleHover.bind(this) }
                ></Category>
              </Col>
              <Col span={4}>
                <div style={{ height: '60px' }}>
                  <span style={{
                      position: 'absolute',
                      lineHeight: '22px',
                      marginTop: '10px',
                      fontSize: '16px',
                      color: '#BCBCBC',
                      fontWeight: 400,
                    }}>
                    <span dangerouslySetInnerHTML={{ __html: '众&nbsp&nbsp&nbsp&nbsp&nbsp筹' }}></span>
                  </span>
                </div>
              </Col>
              <Col span={4}>
                <div style={{ height: '60px' }}>
                  <span style={{
                      position: 'absolute',
                      lineHeight: '22px',
                      marginTop: '10px',
                      fontSize: '16px',
                      color: '#BCBCBC',
                      fontWeight: 400,
                    }}>
                    <span dangerouslySetInnerHTML={{ __html: '社&nbsp&nbsp&nbsp&nbsp&nbsp区' }}></span>
                  </span>
                </div>
              </Col>
              <Col span={4}>
                <div style={{ height: '60px' }}>
                  <span style={{
                      position: 'absolute',
                      lineHeight: '22px',
                      marginTop: '10px',
                      fontSize: '16px',
                      color: '#BCBCBC',
                      fontWeight: 400,
                    }}>
                    <span dangerouslySetInnerHTML={{ __html: '剧组服务' }}></span>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row type="flex" justify="end" style={{
              color: 'white',
              fontSize: '22px',
              marginTop: '4px',
            }}>
              <Col
                span={1}
                onClick={ () => this.props.handleOpenUpload() }
                style={{ marginRight: '15px' }}
              >
                <Icon type="upload" theme="outlined" />
              </Col>
              <Col span={1} style={{ marginRight: '15px' }}>
                <a href="/search" style={{ color: 'white' }}>
                  <MyIcon type="icon-search" />
                </a>
              </Col>
              <Col span={1} style={{ marginRight: '15px' }}>
                <AlertBell />
              </Col>
              <Col span={1} onClick={ () => this.props.handleOpenLogin() }>
                <MyIcon type="icon-people" />
              </Col>
              <Col span={3}></Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
```

login.js

```javascript
import React, { Component } from 'react'
import { Modal, Row, Col, Icon, Input, Button, Tabs } from 'antd'
import MyIcon from '../my_icon'

const TabPane = Tabs.TabPane

export default class LoginPanel extends Component {

  handleLogin () {
    this.props.onCloseLogin('Login')
  }

  handleSignup () {
    this.props.onCloseLogin('Signup')
  }

  render () {
    return (
      <Modal
        visible={ this.props.display }
        closable={ false }
        keyboard={ false }
        maskClosable={ false }
        footer={ null }
        width="410px"
        style={{
          padding: 0,
          borderRadius: '16px',
          overflow: 'hidden',
        }}
        bodyStyle={{
          background: '#fff',
          padding: 0,
        }}
        maskStyle={{
          background: 'linear-gradient(360deg,rgba(63,0,74,0.75) 0%,rgba(32,32,124,0.85) 100%)',
        }}
      >
        <div
          onClick={ () => this.props.onCloseLogin('Close') }
          style={{
            position: 'fixed',
            top: '30px',
            right: '40px',
            color: 'white',
            fontSize: '30px',
            float: 'right',
            marginRight: '6px',
            textAlign: 'center',
          }}
        >
          <MyIcon type="icon-close" />
        </div>
        <Row>
          <Col span={24}>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={12}>
            <div style={{
              marginTop: '28px',
              lineHeight: '100%',
              color: '#4A4A4A',
              fontSize: '36px',
              fontWeight: 600,
              textAlign: 'center',
            }}>FT 链</div>
          </Col>
        </Row>
        <LoginForm
          onLogin={ this.handleLogin.bind(this) }
          onSignup={ this.handleSignup.bind(this) }
        />
        <div style={{ clear: 'both' }}></div>
      </Modal>
    )
  }
}

class MyTabBar extends Component {
  render () {
    let tabs = this.props.names.map((value, idx) => {
      return (
        <Col key={value} span={Math.floor(24 / this.props.names.length)}>
          <div
            style={{
              color: idx + 1 === this.props.active ? '#000' : '#BCBCBC',
              fontSize: '16px',
              fontWeight: idx + 1 === this.props.active ? '500' : '400',
              padding: '19px',
              borderBottom: idx + 1 === this.props.active ? '5px solid' : '0',
              borderImage: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%) 1',
            }}
            onClick={ () => this.props.handleChange(idx + 1) }
          >
            <div dangerouslySetInnerHTML={{ __html: value }}></div>
          </div>
        </Col>
      )
    })
    return (
      <div style={{
        display: 'flex',
        width: '100%',
        textAlign: 'center',
      }}>
        <Row style={{ width: '100%' }}>
          { tabs }
        </Row>
      </div>
    )
  }
}

class LoginForm extends Component {
  state = {
    activeKey: 1,
    visual: false,
  }

  handleChange (k) {
    this.setState((state) => {
      return { activeKey: parseInt(k) }
    })
  }

  toggleVisual () {
    this.setState((state) => {
      return { visual: !state.visual }
    })
  }

  render () {
    const names = ['登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录', '注&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp册']
    return (
      <Row type="flex" justify="center">
        <Col span={16}>
          <Tabs
            activeKey={ this.state.activeKey + '' }
            renderTabBar={
              () => {
                return (
                  <MyTabBar
                    active={ this.state.activeKey }
                    names={ names }
                    handleChange={ this.handleChange.bind(this) }
                  />
                )
              }
            }
            style={{ overflow: 'visible' }}
          >
            <TabPane key="1">
              <Row type="flex" justify="center" style={{ marginTop: '26px' }}>
                <Col span={24}>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="请输入邮箱地址"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '30px' }}>
                <Col span={24}>
                  <Input
                    type={ this.state.visual ? 'text' : 'password' }
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    suffix={<MyIcon type="icon-browse" style={{ fontSize: '20px', color: '#222222' }} onClick={() => this.toggleVisual()} />}
                    placeholder="密码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '30px' }}>
                <Col span={24}>
                  <Button
                    onClick={ () => this.props.onLogin() }
                    type="primary"
                    style={{
                      color: '#fff',
                      width: '100%',
                      height: '40px',
                      border: 0,
                      borderRadius: '18px',
                      background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                      boxShadow: '0px 5px 10px 0px rgba(255,79,81,0.66)',
                      fontSize: '16px',
                      fontWeight: '500',
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: '登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录' }}></div>
                  </Button>
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '20px', marginBottom: '40px' }}>
                <Col span={24}>
                  <div style={{
                    color: '#0058D1',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    fontSize: '14px',
                    fontWeight: '400',
                  }}>忘记密码？</div>
                </Col>
              </Row>
            </TabPane>
            <TabPane key="2">
              <Row type="flex" justify="center" style={{ marginTop: '25px' }}>
                <Col span={24}>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="请输入邮箱地址"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '25px' }}>
                <Col span={24}>
                  <Input
                    type="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="设置密码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '25px' }}>
                <Col span={24}>
                  <Input
                    type="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="重复确认密码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '30px', marginBottom: '60px' }}>
                <Col span={24}>
                  <Button
                    onClick={ () => this.props.onSignup() }
                    type="primary"
                    style={{
                      color: '#fff',
                      width: '100%',
                      height: '40px',
                      border: 0,
                      borderRadius: '18px',
                      background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                      boxShadow: '0px 5px 10px 0px rgba(255,79,81,0.66)',
                      fontSize: '16px',
                      fontWeight: '500',
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: '注&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp册' }}></div>
                  </Button>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    )
  }
}
```

alert_bell.js

```javascript
import React, { Component } from 'react'
import { Row, Col, Icon, Badge, List } from 'antd'
import MyIcon from '../my_icon'

export default class AlertBell extends Component {
  state ={
    hover: false,
  }

  handleEnter (e) {
    // console.log('enter')
    this.setState((state) => {
      return {
        hover: true,
      }
    })
  }

  handleLeave (e) {
    // console.log('leave')
    this.setState((state) => {
      return {
        hover: false,
      }
    })
  }

  render () {
    let list = null
    if (this.state.hover) {
      const data = [
        {
          icon: 'icon-collection',
          text: '关注收藏',
          count: 100,
        },
        {
          icon: 'icon-praise',
          text: '点 赞',
          count: 6,
        },
        {
          icon: 'icon-interactive',
          text: '评 论',
        },
        {
          icon: 'icon-money',
          text: '糖分收益',
        },
      ]
      list = (
        <div>
          <div style={{
            marginTop: '-23px',
            marginLeft: '-9px',
            width: 0,
            height: 0,
            borderTop: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderBottom: '20px solid #fff',
            borderLeft: '20px solid transparent',
          }}></div>
          <div style={{
              position: 'absolute',
              top: '50px',
              left: '-85px',
              width: '190px',
              background: '#fff',
              borderRadius: '10px',
              overflow: 'hidden',
          }}>
            <List
              itemLayout="horizontal"
              dataSource={ data }
              renderItem={item => {
                let badge = null
                if (item.count) {
                  badge = (
                    <Col span={4}>
                      <Badge count={item.count} style={{
                        background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                        color: '#fff',
                      }}></Badge>
                    </Col>
                  )
                }
                return (
                  <ItemRow
                    item={ item }
                    badge={ badge }
                  />
                )
              }}
            />
          </div>
        </div>
      )
    }
    return (
      <div
        onMouseEnter={ this.handleEnter.bind(this) }
        onMouseLeave={ this.handleLeave.bind(this) }
        style={{ position: 'relative' }}
      >
        <Badge
          status="default"
          style={{
            width: '11px',
            height: '11px',
            right: '4px',
            background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
            boxShadow: '0 0 0',
          }}
        >
          <MyIcon type="icon-remind" style={{ fontSize: '22px' }} />
        </Badge>
        { list }
      </div>
    )
  }
}

class ItemRow extends Component {
  state ={
    hover: false,
  }

  handleEnter () {
    // console.log('enter')
    this.setState((state) => {
      return {
        hover: true,
      }
    })
  }

  handleLeave () {
    // console.log('leave')
    this.setState((state) => {
      return {
        hover: false,
      }
    })
  }

  render () {
    const item = this.props.item
    const badge = this.props.badge
    return (
      <List.Item style={{
        border: 0,
        background: this.state.hover ? 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)' : '',
      }}>
        <Row
          onMouseEnter={ this.handleEnter.bind(this) }
          onMouseLeave={ this.handleLeave.bind(this) }
          style={{
            color: this.state.hover ? '#fff' : '#4A4A4A',
            fontSize: '16px',
            fontWeight: 400,
            width: '100%',
          }}
        >
          <Col span={4} offset={2} style={{ fontSize: '19px' }}>
            <MyIcon type={ item.icon } />
          </Col>
          <Col span={12}>
            { item.text }
          </Col>
          { badge }
        </Row>
      </List.Item>
    )
  }
}
```

upload/upload.js

```javascript
import React, { Component } from 'react'
import { Modal, Row, Col } from 'antd'
import MyIcon from '../../my_icon'
import AVUploader from './av_upload'
import LiteratureEditor from './literature_editor'
import PictureUploader from './picture_uploader'

export default class UploadPanel extends Component {
  state = {
    step: 1,
    uploadType: 'unknow',
  }

  forwardStep () {
    this.setState((state) => {
      return { step: state.step + 1 }
    })
  }

  backwardStep () {
    this.setState((state) => {
      return { step: state.step - 1 }
    })
  }

  handleChooseType (t) {
    this.setState((state) => {return { uploadType: t }})
  }

  handleGoBack () {
    this.setState((state) => {return { uploadType: 'unknow' }})
  }

  render () {
    let content = null
    switch (this.state.uploadType) {
      case null:
      case '':
      case 'unknow': {
        content = (
          <Col span={12}>
            <Row>
              <Col span={24}>
                <div style={{
                  width: '100%',
                  fontSize: '20px',
                  color: '#EEEEEE',
                  textAlign: 'center',
                }}>
                  { '选择文件类型' }
                </div>
              </Col>
            </Row>
            <Row type="flex" justify="center" style={{ marginTop: '30px' }}>
              <Col span={6} style={{ marginRight: '25px' }}>
                <TypeButton icon="icon-video" text="视频" t="video" onChooseType={ this.handleChooseType.bind(this) } />
              </Col>
              <Col span={6}>
                <TypeButton icon="icon-music" text="音频" t="audio" onChooseType={ this.handleChooseType.bind(this) } />
              </Col>
            </Row>
            <Row type="flex" justify="center" style={{ marginTop: '30px' }}>
              <Col span={6} style={{ marginRight: '25px' }}>
                <TypeButton icon="icon-editor" text="文学" t="literature" onChooseType={ this.handleChooseType.bind(this) } />
              </Col>
              <Col span={6}>
                <TypeButton icon="icon-picture" text="其它(图片)" t="figure" onChooseType={ this.handleChooseType.bind(this) } />
              </Col>
            </Row>
          </Col>
        )
        break
      }
      case 'literature': {
        content = (
          <LiteratureEditor handleGoBack={ this.handleGoBack.bind(this) } />
        )
        break
      }
      case 'figure': {
        content = (
          <PictureUploader handleGoBack={ this.handleGoBack.bind(this) } />
        )
        break
      }
      case 'video': {
        content = (
          <AVUploader
            uploadType='video'
            onCloseUpload={ this.props.onCloseUpload }
            handleGoBack={ this.handleGoBack.bind(this) }
          />
        )
        break
      }
      case 'audio': {
        content = (
          <AVUploader
            uploadType='audio'
            onCloseUpload={ this.props.onCloseUpload }
            handleGoBack={ this.handleGoBack.bind(this) }
          />
        )
        break
      }
      default: break
    }
    return (
      <Modal
        visible={ this.props.display }
        closable={ false }
        keyboard={ false }
        maskClosable={ false }
        footer={ null }
        width="1200px"
        style={{
          padding: 0,
          background: 'transparent',
        }}
        bodyStyle={{
          background: 'transparent',
          padding: 0,
        }}
        maskStyle={{
          background: 'linear-gradient(360deg,rgba(63,0,74,0.75) 0%,rgba(32,32,124,0.85) 100%)',
        }}
      >
        <div
          onClick={ () => this.props.onCloseUpload('Close') }
          style={{
            position: 'fixed',
            top: '31px',
            right: '41px',
            color: '#BCBCBC',
            fontSize: '32px',
          }}
        >
          <MyIcon type="icon-close" />
        </div>
        <Row type="flex" justify="center">
          { content }
        </Row>
      </Modal>
    )
  }
}

class TypeButton extends Component {
  render () {
    // console.log(this.props.t)
    return (
      <div
        onClick={ () => this.props.onChooseType(this.props.t) }
        style={{
          background: '#fff',
          height: '142px',
          width: '142px',
          borderRadius: '20px',
        }}
      >
        <div style={{
          width: '100%',
          textAlign: 'center',
        }}>
          {/* <MyIcon className="gradient-icon" type={ this.props.icon } style={{
            marginTop: '40px',
            fontSize: '37px',
          }} /> */}
          <MyIcon className="gradient-icon" type={ this.props.icon } theme="outlined" style={{
            marginTop: '40px',
            fontSize: '42px',
          }}/>
        </div>
        <div style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 400,
          color: '#FF1367',
          lineHeight: '22px',
          marginTop: '10px',
        }}>
          { this.props.text }
        </div>
      </div>
    )
  }
}
```

upload/common.js

```javascript
import React, { Component } from 'react'
import { Row, Col, Input, Select, Tag, InputNumber, Button } from 'antd'
import MyIcon from '../../my_icon'

const TextArea = Input.TextArea
const Option = Select.Option
const CheckableTag = Tag.CheckableTag

export class Title extends Component {
  render () {
    let must = null
    if (this.props.must) {
      must = (
        <span style={{
          color: '#FF1367',
        }}>
          { '* ' }
        </span>
      )
    }
    return (
      <div style={{
        margin: this.props.margin,
        lineHeight: '22px',
        fontSize: '16px',
        fontWeight: 400,
        color: '#4A4A4A',
      }}>
        { must }
        <span>
          { this.props.text }
        </span>
      </div>
    )
  }
}

export class CountableInput extends Component {
  state = {
    content: '',
    maxLen: this.props.maxLen,
  }

  constructor (props) {
    super(props)
    if (!this.props.maxLen) throw new Error('Countable input must define max length.')
  }

  handleChange (e) {
    // console.log(e.target.value)
    if (e.target.value.length > this.state.maxLen) return
    let newState = {
      content: e.target.value,
    }
    this.setState((state) => {return newState})
  }

  render () {
    let selfStyle = Object.assign({}, this.props.style)
    selfStyle.position = 'relative'
    return (
      <div style={ selfStyle }>
        <Input
          placeholder={this.props.placeholder}
          value={ this.state.content }
          onChange={ this.handleChange.bind(this) }
        />
        <span style={{
          position: 'absolute',
          top: '5px',
          right: '10px',
        }}>
          { this.state.content.length }/{ this.state.maxLen }
        </span>
      </div>
    )
  }
}

export class CountableTextArea extends Component {
  state = {
    content: '',
    maxLen: this.props.maxLen,
  }

  constructor (props) {
    super(props)
    if (!this.props.maxLen) throw new Error('Countable text area must define max length.')
  }

  handleChange (e) {
    // console.log(e.target.value)
    if (e.target.value.length > this.state.maxLen) return
    let newState = {
      content: e.target.value,
    }
    this.setState((state) => {return newState})
  }

  render () {
    let selfStyle = Object.assign({}, this.props.style)
    selfStyle.position = 'relative'
    const rows = this.props.rows || 6
    return (
      <div style={ selfStyle }>
        <TextArea
          placeholder={this.props.placeholder}
          value={ this.state.content }
          rows={rows}
          onChange={ this.handleChange.bind(this) }
          style={{ backgroundColor: this.props.bgColor }}
        />
        <span style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
        }}>
          { this.state.content.length }/{ this.state.maxLen }
        </span>
      </div>
    )
  }
}

export class Classification extends Component {
  state = {
    chosen: {},
  }

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (i) {
    // console.log(i)
    this.setState((state) => {
      let c = Object.assign({}, this.state.chosen)
      if (c[i]) {
        c[i] = false
      } else {
        c[i] = true
      }
      return { chosen: c }
    })
  }

  render () {
    const classes = ['新闻', '动画', '综艺', '电影', '纪录片', '美食', '旅行', '自然']
    let tags = classes.map((v, i) => {
      return (
        <CheckableTag
          key={ v }
          checked={ this.state.chosen[i] }
          onChange={ () => this.handleChange(i) }
          style={this.state.chosen[i] ? {} : { background: '#EEEEEE', color: '#9B9B9B' }}
        >
          { v }
        </CheckableTag>
      )
    })
    let options = classes.map((v, i) => {
      return (
        <Option key={ v } value={i}>
          { v }
        </Option>
      )
    })
    return (
      <div>
        <Select
          showSearch
          placeholder="搜索分类"
          optionFilterProp="children"
          onChange={ this.handleChange }
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          style={ this.props.selectStyle }
          dropdownStyle={{
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          suffixIcon={ <MyIcon type="icon-spread" /> }
        >
          { options }
        </Select>
        <div style={ this.props.radioPartStyle }>
          { tags }
        </div>
      </div>
    )
  }
}

export class CollectionSelecter extends Component {
  render () {
    const collections = ['新闻360', '人与自然', '科教频道', '财经第一线', '喜洋洋']
    let options = collections.map((v, i) => {
      return (
        <Option key={ v } value={i}>
          { v }
        </Option>
      )
    })
    return (
      <div>
        <Select
          showSearch
          placeholder="请选择归属列表"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          style={{
            width: '280px',
            marginTop: '10px',
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          dropdownStyle={{
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          suffixIcon={ <MyIcon type="icon-spread" /> }
        >
          { options }
        </Select>
      </div>
    )
  }
}
```

### serviceWorker.js

This is for development server, it enables the websock between the browser (as a client) and the server so that ReactJS can inform the web browser to update the web page as soon as the developer saves the editing file.

serviceWorker.js

```javascript
// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://goo.gl/SC7cgQ'
          );
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
              console.log('New content is available; please refresh.');

              // Execute callback
              if (config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
```

### package.json

This is the project dependency recorder as well as eslint configuration and running script configuration.

```json
{
  "name": "ftfe",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "antd": "^3.10.0",
    "babel-plugin-import": "^1.9.1",
    "eslint": "^5.6.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-jsx-a11y": "^5.1.1",
    "eslint-plugin-react": "^7.1.0",
    "react": "^16.5.2",
    "react-app-rewire-less": "^2.1.3",
    "react-app-rewired": "^1.6.2",
    "react-dom": "^16.5.2",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.0.4",
    "redux": "^4.0.1",
    "video-react": "^0.13.0"
  },
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```
