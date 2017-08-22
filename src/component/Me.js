import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/me.css';
import { Icon} from 'antd';
import warrow from '../img/warrow.png';
import tx from '../img/tx.png';
import Datas from './Datas';
import Infoset from './Infoset';
import About from './About';
import Feedback from './Feedback';

class Me extends Component {
  render() {
    return (
      <Router>
        <div className="wln_me">
          <Route path="/datas" component={Datas} />
          <Route path="/infoset" component={Infoset} />
          <Route path="/about" component={About} />
          <Route path="/feedback" component={Feedback} />
          <Route exact path="/me" render={()=>( 
            <div>
              <Link to="/datas">
              <div className="wln_user">
                <div className="wln_arrow">
                  <img src={warrow}/>
                </div>
                <div className="wln_top">
                  <div className="wln_img">
                    <img src={tx}/>
                  </div>
                </div>
                <div className="wln_name">安南</div>
                <p className="wln_address">北京发的法律辅导教师了</p>
              </div>
              </Link>
              <div className="wln_status clear">
                <div className="left">
                  <h3>身份</h3>
                  <p>待审核</p>
                </div>
                <div className="left last">
                  <h3>当前房屋人数</h3>
                  <p>4</p>
                </div>
              </div>
              <ul className="wln_list">
                <Link to="/infoset" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                  <li className="clear">
                    <p className="left">通知设置</p>
                    <Icon type="right" className="right" />
                  </li>
                </Link>
                <Link to="/about" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                  <li className="clear">
                    <p className="left">关于我们</p>
                    <Icon type="right" className="right" />
                  </li>
                </Link>
                <Link to="/feedback" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                  <li className="clear last">
                    <p className="left">意见反馈</p>
                    <Icon type="right" className="right" />
                  </li>
                </Link>
              </ul>
              <div className="wln_logout">退出登录</div>
            </div>
            )}>
          </Route>
        </div>
      </Router>
    );
  }
}

export default Me;
