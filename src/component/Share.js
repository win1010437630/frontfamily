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
import imgSrc3 from '../img/parcel.png';

import pic1 from '../img/tx.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Wl_Share extends Component {
  constructor(props){
        super(props)

        this.state = {
            showMultiple: false,
            id:0
        }
    }
  componentDidMount(){
    $('.leftI').click(function(){
        window.history.go(-1)
    })
  }
  render() {
    const BackButtonStyle = {
            display: 'inline-block',
            width: 'auto',
            color: 'white',
            border: 'none',
            position: 'absolute',
            top: '5px',
            left: '15px'
        }
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
                      {/*浏览图片*/}
                          <img src={imgSrc} onClick={e=>this.setState({ showMultiple: true,id:0})}/>
                          <img src={imgSrc2} onClick={e=>this.setState({ showMultiple: true,id:1})}/>
                          <img src={imgSrc3} onClick={e=>this.setState({ showMultiple: true,id:2})}/>
                          <Gallery src={[imgSrc, imgSrc2, imgSrc3]} show={this.state.showMultiple} data-num={this.state.id}>
                            <Button style={BackButtonStyle} onClick={e=>this.setState({ showMultiple: false})}
                                  plain>
                                  Back
                              </Button>
                              <GalleryDelete onClick={ (e, i)=> alert('click deleted id:' + i) } />
                          </Gallery>
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
