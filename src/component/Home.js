import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel ,Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/home.css'
import pic1 from '../img/tx.png'
import Wl_Know from './Know'
import Wl_detail from './Detail'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="wl_home">
               <div className="wl_top">
                  <div className="wl_header">
                      <img className="wl_mess" src=""/>
                      北京万科红
                   </div>
               </div>
               <div className="wl_center clear">
                    <div className="wl_Ldoor left" >
                        <h1 className="wl_Pfont">智能门禁</h1>
                        <p className="wl_Pdoor">免门卡通行</p>
                    </div>
                    <div className="wl_three right">
                      <div className="wl_Rplease left">
                          <h1 className="wl_Pfont">访客邀请</h1>
                          <p className="wl_Pdoor">扫码过门禁</p>
                      </div>
                      <div className="wl_parcel left">
                          <h1 className="wl_Pfont">邮包</h1>
                          <p className="wl_Pdoor">收发更便捷</p>
                      </div>
                      <div className="wl_phone right">
                         <h1 className="wl_Pfont">手机开门</h1>
                          <p className="wl_Pdoor">免门卡通行</p>
                      </div>
                    </div>
               </div>
               <div className="wl_know">
                    <Link to='/Wl_Know'>
                        <div className="wl_ktit clear">
                            <span className="left wl_youK">你知道吗</span>
                            <span className="right wl_kmore">更多 ></span>
                        </div>
                    </Link>
                    <Link to="/Wl_detail">
                        <div className="wl_kPlease">
                            <h3>邀请客人到我家，如何变得更简单？</h3>
                            <p className="wl_there">
                              <span>来自住这儿</span>
                              <span className="wl_ktime">2016-09-01 15:00</span>
                            </p>
                        </div>
                    </Link>
               </div>
               <div className="wl_know">
                    <div className="wl_ktit clear">
                        <span className="left wl_youK">社区新鲜事</span>
                        <span className="right wl_kmore">去社区 ></span>
                    </div>
                    <div className="wl_Scon">
                        <div className="wl_tell">
                            <h4><Icon type="contacts" />节节草<em>在</em><span>邻里分享</span></h4> 
                            <p className="wl_content">
                                尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好业主您好您
                            </p>
                            <div className="wl_img">
                                <img src={pic1}/>
                            </div>
                        </div>
                        <div className="wl_pinglun">                      
                            <span className="wl_Stime left">23小时前</span>
                            <p className="wl_mewwage right">
                                <Icon type="like-o"/>
                                <Icon type="message" />
                            </p>
                        </div>
                        
                    </div>
               </div>
      </div>
    );
  }
}

export default Home;
