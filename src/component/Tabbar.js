import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import { Icon } from 'antd';
import '../App.css';
import '../css/tabbar.css'

class Tabbar extends Component {
  render() {
    return (
      <div className="Tabbar">
       <div className="weui-tabbar">
          <a href="javascript:;" className="weui-tabbar__item weui-bar__item--on">
            <div className="weui-tabbar__icon">
              <Icon type="home" />
            </div>
            <p className="weui-tabbar__label">住这儿</p>
          </a>
          <a href="javascript:;" className="weui-tabbar__item">
            <div className="weui-tabbar__icon">
              <Icon type="tool" />
            </div>
            <p className="weui-tabbar__label">管家</p>
          </a>
          <a href="javascript:;" className="weui-tabbar__item">
            <div className="weui-tabbar__icon">
              <Icon type="message" />
            </div>
            <p className="weui-tabbar__label">社区</p>
          </a>
          <a href="javascript:;" className="weui-tabbar__item">
            <div className="weui-tabbar__icon">
              <Icon type="user" />
            </div>
            <p className="weui-tabbar__label">我</p>
          </a>
        </div>
	    </div>
    );
  }
}

export default Tabbar;
