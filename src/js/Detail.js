import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/detail.css'


class Wl_detail extends Component {
  render() {
    return (
      <div className="Wl_detail">
      	   <div className="wl_dtit">
                <Icon type="close"/>
                详情
           </div>
           <div className="wl_list">
                <p></p>
           </div>
	     </div>
    );
  }
}

export default Wl_detail;
