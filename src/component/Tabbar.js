import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button,Grid,Tabbar } from 'react-weui';
import { Icon } from 'antd';
import Home from './Home';
import Steward from './Steward';
import Me from './Me';
import '../App.css';
import '../css/tabbar.css'

class Tab extends Component {
  render() {
    return (
      <div className="Tabbar">
       <Route exact path='/' component={Home} />
       <Route path="/steward" component={Steward} />
       <Route path="/me" component={Me} />
       <div className="weui-tabbar">
          <Link to="/home" href="javascript:;" className="weui-tabbar__item weui-bar__item--on">
            <div className="weui-tabbar__icon">
              <Icon type="home" />
            </div>
            <p className="weui-tabbar__label">住这儿</p>
          </Link>
          <Link to="/steward" href="javascript:;" className="weui-tabbar__item">
            <div className="weui-tabbar__icon">
              <Icon type="tool" />
            </div>
            <p className="weui-tabbar__label">管家</p>
          </Link>
          <a href="javascript:;" className="weui-tabbar__item">
            <div className="weui-tabbar__icon">
              <Icon type="message" />
            </div>
            <p className="weui-tabbar__label">社区</p>
          </a>
          <Link to="/me" href="javascript:;" className="weui-tabbar__item">
            <div className="weui-tabbar__icon">
              <Icon type="user" />
            </div>
            <p className="weui-tabbar__label">我</p>
          </Link>
        </div>
	    </div>
    );
  }
}

export default Tab;
