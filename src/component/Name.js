import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/name.css'


class Name extends Component {
  goBack(){  
    window.history.go(-1); 
  } 
  render() {
    return (
      <div className="Name">
        <div className='name_bar'>  
          <a href="#" onClick={()=>this.goBack()}>  
            <Icon type="arrow-left" className='name'/>           
          </a>  
          <span className='name_title'>昵称</span>
          <span className='name_submit'>提交</span>
        </div>
        <div className='name_replace'>
          <ul className='name_one'>
            <li><input type='text' placeholder='' value=''/></li>
          </ul>          
        </div>
        <div className='name_other'>
          将用于住这儿社区交流，昵称不能超过8位，包含汉字，字母或数字，且不能与别人重复
        </div>
	    </div>
    );
  }
}

export default Name;
