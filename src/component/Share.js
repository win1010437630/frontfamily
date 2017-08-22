import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';

import $ from 'jquery'
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import {Icon} from 'antd';
import '../css/Share.css'

import pic1 from '../img/tx.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Wl_Share extends Component {
  componentDidMount(){
    $('.leftI').click(function(){
        window.history.go(-1)
    })
  }
  render() {
    return (
      /*邻里分享详情*/
		    <div className="wl_Share">		      		
		      	 <div className="wl_pingL">
                <Icon type="arrow-left" className="leftI"/>
                邻里分享
                <Icon type="ellipsis" className="rightI"/>
              </div>
              <div className="wl_Scon">
                  <div className="wl_tell">
                      <h4><Icon type="contacts" />节节草<em>在</em><span>邻里分享</span></h4> 
                      <p className="wl_pMain">
                          尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好业主您好您
                      </p>
                      <div className="wl_img">
                          <img src={pic1}/>

                      </div>
                  </div>
                  <div className="wl_pinglun">                      
                      <span className="wl_pastTime">23小时前</span>
                          
                  </div>                        
                </div>
              <div className="wl_null"></div>
              <div className="wl_zan">
                  <div className="wl_white right">
                      <Icon type="heart-o"/>
                  </div>
              </div> 
              <div className="wl_noMore">没有更多了</div>
              <div className="wl_comment">
                  <div className="wl_input">
                      <input type="text" className="left" placeholder="评论"/>
                      <button className="right">发送 </button>
                  </div>
              </div> 		        
			  </div>
    );
  }
}

export default Wl_Share;
