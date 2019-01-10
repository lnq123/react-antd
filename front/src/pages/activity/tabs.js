import React, { Component } from "react";
import { Tabs } from 'antd';
import Tab from './tab'
import './index.css'
const TabPane = Tabs.TabPane;

export default () =>(
    <Tabs defaultActiveKey="1" className='border-missing test'>
    <TabPane tab="全部" key="1"><Tab /></TabPane>
    <TabPane tab="峰会" key="2"><Tab /></TabPane>
    <TabPane tab="系列活动" key="3"><Tab /></TabPane>
    <TabPane tab="培训" key="4"><Tab /></TabPane>
    <TabPane tab="其他" key="5"><Tab /></TabPane>
  </Tabs>
)