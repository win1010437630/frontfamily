import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel ,Icon} from 'antd';
import { Button,Grid,Tabbar,Flex,FlexItem} from 'react-weui';
import '../App.css';
import '../css/home.css'
import $ from 'jquery'


import pic1 from '../img/tx.png'
import imgSrc from '../img/inform.png';
import imgSrc2 from '../img/two.png';
import imgSrc3 from '../img/parcel.png';
import banner1 from '../img/k-1.jpg'
import banner2 from '../img/k-2.jpg'
import banner3 from '../img/k-3.jpg'

import Wl_Know from './Know'
import Wl_detail from './Detail'
import Steward from './Steward';
import Me from './Me';
import Wl_Share from './Share';
import Wl_Parcel from './Parcel';
import Wl_Inform from './Inform';
import Tab from './Tabbar';



import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class Home extends Component {
  componentDidMount(){
    /*标题条*/
      window.onwheel=function(){
        var Scroll=document.body.scrollTop||document.documentElement.scrollTop;
        // console.log(Scroll);
        if(Scroll>0){
              $('.wl_header').css({'background':'#fff','color':'#ccc'})
         }
         if(Scroll==0){
              $('.wl_header').css({'background':'','color':''})
         }  
         if(Scroll>=window.screen.availHeight){
            $('.wl_header').css("display","none")            
         }else{
            $('.wl_header').css("display","block") 
         } 
      }



      
  }
  render() {
    return (
    	<Router>
    	<div className="wl_home">
    		<Route path="/Wl_Know" component={Wl_Know}/>
    		<Route path="/Wl_detail" component={Wl_detail}/>
    		<Route path="/Wl_Share" component={Wl_Share}/>
        <Route path="/Wl_Parcel" component={Wl_Parcel}/>
        <Route path="/Wl_Inform" component={Wl_Inform}/>
    		<Route exact path="/home" render={()=>(
    		<div>
               <div className="wl_top">
               		<div className="wl_header">
	                    <Link to='/Wl_Inform'>
	                      <Icon type="bell" className="wl_mess"/>
	                    </Link>
	                      北京万科红
                  	</div>   
               		<Carousel autoplay>
					    <div><img src={banner1}/></div>
					    <div><img src={banner2}/></div>
					    <div><img src={banner3}/></div>
					 </Carousel>
                               
               </div>
               <div className="wl_center clear">
                    <div className="wl_Ldoor left" >
                        <h1 className="wl_Pfont">智能门禁</h1>
                        <p className="wl_Pdoor">免门卡通行</p>
                        <Icon type="idcard" className="wl_icon"/>
                    </div>
                    <div className="wl_three right">
                      <div className="wl_Rplease left">
                          <div className="left">
                              <h1 className="wl_Pfont">访客邀请</h1>                         
                              <p className="wl_Pdoor">扫码过门禁</p>
                          </div>
                          <Icon type="qrcode" className="wl_qrcode right"/>
                          
                      </div>
                      <Link to='/Wl_parcel'>
                          <div className="wl_parcel left">
                              <h1 className="wl_Pfont">邮包</h1>
                              <p className="wl_Pdoor">收发更便捷</p>
                          </div>
                      </Link>
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
                    
                  <Link to='/Wl_Share'>
                      <div className="wl_Scon">
                          <div className="wl_tell">
                              <h4><Icon type="contacts" />节节草<em>在</em><span>邻里分享</span></h4> 
                              <p className="wl_content">
                                  尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好业主您好您
                              </p>
                              <div className="wl_img flex" title="Flex" subTitle="Flex布局" spacing>
                                    <img src={imgSrc}/>
                                  
                                  {/*<Flex>
                                      <FlexItem>
                                          <div className="placeholder"><img src={imgSrc}/></div>
                                      </FlexItem>
                                      <FlexItem>
                                          <div className="placeholder"><img src={imgSrc2}/></div>
                                      </FlexItem>
                                  </Flex>*/}

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
                  </Link>
                  <Link to='/Wl_Share'>
                      <div className="wl_Scon">
                          <div className="wl_tell">
                              <h4><Icon type="contacts" />节节草<em>在</em><span>邻里分享</span></h4> 
                              <p className="wl_content">
                                  尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好尊敬的业主您好业主您好您
                              </p>
                              <div className="wl_img">
                                  <img src={pic1}/>

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
                  </Link>
               </div>
            </div>

            )}></Route>
          <Tab />
      	</div>
     </Router>
    );
  }
}

export default Home;
