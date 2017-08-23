import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import $ from 'jquery'
import '../App.css';
import '../css/know.css'


class Wl_Know extends Component {
  componentDidMount(){
    $('.back_Home').click(function(){
        window.history.go(-1)
    })
  }
  render() {
    return (
      <div className="wl_Know">
      	   <div className="wl_youKnow">
                <Icon type="arrow-left" className="back_Home"/>
                你知道么
           </div>
           <ul className="wl_list">
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li><li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
              <li>
                  <p className="wl_kAbout">
                      关于住这儿7月26日23点-次日9点停机维护的公告
                  </p>
                  <p className="wl_there">
                    <span>来自住这儿</span>
                    <span className="wl_ktime">2016-09-01 15:00</span>
                  </p>
              </li>
           </ul>
	     </div>
    );
  }
}

export default Wl_Know;
