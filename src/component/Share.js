import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar,GalleryDelete,Gallery  } from 'react-weui';
import '../App.css';

import $ from 'jquery'
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import {Icon} from 'antd';
import '../css/Share.css'
import imgSrc from '../img/inform.png';
import imgSrc2 from '../img/two.png';

import {connect} from 'react-redux';
import * as Forum from '../action/actionForum';

import pic1 from '../img/tx.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import config from '../config';

class Wl_Share extends Component {
  constructor(props){
        super(props)
        this.state = {
            showMultiple: false,
            id:0,
            zan:false,
            forum_detail:[]
        }
    }
  componentDidMount(){
    
    var id=window.location.href.split('=')[1];
    this.props.getreview(window.location.href.split('=')[1]);
    setTimeout(()=>{console.log(this.props.data)},100)
     $.ajax({
      url: config.url+config.port+"/photo/detail",
      data: {id:id},
      type: 'POST',
      success: function(e){
        console.log(e);
        this.setState({
          forum_detail:e
        })
      }.bind(this)
    })
    $('.leftI').click(function(){
        window.history.go(-1)
    })
  }
  handclick(){
    this.setState({zan:!this.state.zan})
    var id=window.location.href.split('=')[1];
    //this.props.postshare(id)
  }
  subreview(){
    var storage=window.sessionStorage;
    var uid=window.location.href.split('=')[1];
    var uuid=window.sessionStorage.getItem('id');
    console.log(uid)
    var review=$('.reviewtext').val();
    var name=storage.getItem('name');
    this.props.review(uid,review,uuid,name);
    this.props.getreview(window.location.href.split('=')[1]);
  }
  render() {
    var a="red";
    var text=this.state.zan?a:'';
    return (
      /*邻里分享详情*/
    <div className="wl_Share">		      		
		      	 <div className="wl_pingL">
                <Icon type="arrow-left" className="leftI"/>
                邻里分享
              </div>
              {this.state.forum_detail.map((val,k)=>{
                return(
                <div>
                  <div className="wl_Scon" key={k}>
                      <div className="wl_tell">
                          <h4><Icon type="contacts" />节节草<em>在</em><span>邻里分享</span></h4> 
                          <p className="wl_pMain">
                              {val.detail}
                          </p>
                          <div className="wl_img">
                            <img src={val.img} className="pic"/>
                          </div>
                      </div>
                      <div className="wl_pinglun">                      
                          <span className="wl_pastTime">{val.time}</span>
                              
                      </div>                        
                    </div>
                  <div className="wl_null"></div>
                  <div className="wl_zan clear">
                      <div className='left wl_zanzan'>{val.icon}人赞</div>
                      <div className="wl_white right">
                          <Icon type="heart-o" className={text} onClick={this.handclick.bind(this)}/>
                      </div>
                  </div>
              </div>
               )
            })}    
              {this.props.data.map((val,i)=>{
                  return <div className='review_con'><span>{val.name}</span>:{val.review}</div>
              })}
              <div className="wl_noMore">没有更多了</div>
              <div className="wl_comment">
                  <div className="wl_input">
                      <input type="text" className="left reviewtext" placeholder="评论"/>
                      <button className="right" onClick={this.subreview.bind(this)}>发送 </button>
                  </div>
              </div>
			  </div>
    );
  }
}

export default connect(e=>({data:e.review}),Forum)(Wl_Share);
