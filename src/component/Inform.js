import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';

import $ from 'jquery'
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import {Icon} from 'antd';
import '../css/inform.css'
import inform from '../img/inform.png'


class Wl_Inform extends Component {
  componentDidMount(){
    $('.back_Home').click(function(){
        window.history.go(-1)
    })
  }
  render() {
    return (
      /*邻里分享详情*/
		    <div className="Wl_Inform">
            <div className="wl_inTit">
                <Icon type="arrow-left" className="back_Home"/>
                通知
            </div>		      		
		      	<div className="wl_parCont">
                  <img src={inform} />
                  <p>你到现在还有收到通知哦</p>
            </div>
			  </div>
    );
  }
}

export default Wl_Inform;