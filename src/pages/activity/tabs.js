import React, { Component } from "react";
import { Tabs } from 'antd';
import Tab from './tab'
import './index.css'
const TabPane = Tabs.TabPane;

export default () =>(
    <Tabs defaultActiveKey="1" className='border-missing'>
    <TabPane tab="全部" key="1"><Tab /></TabPane>
    <TabPane tab="峰会" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="系列活动" key="3">Content of Tab Pane 3</TabPane>
    <TabPane tab="培训" key="4">Content of Tab Pane 4</TabPane>
    <TabPane tab="其他" key="5">Content of Tab Pane 5</TabPane>
  </Tabs>
)