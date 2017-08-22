import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';

import $ from 'jquery'
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import {Icon} from 'antd';
import '../css/parcel.css'
import par from '../img/parcel.png'


class Wl_Parcel extends Component {
  componentDidMount(){
    $('.back_Home').click(function(){
        window.history.go(-1)
    })
  }
  render() {
    return (
      /*邻里分享详情*/
		    <div className="Wl_Parcel">
            <div className="wl_parTit">
                <Icon type="arrow-left" className="back_Home"/>
                邮包
            </div>		      		
		      	<div className="wl_parCont">
                  <img src={par} />
                  <p>还没有邮包哦</p>
            </div>
			  </div>
    );
  }
}

export default Wl_Parcel;
