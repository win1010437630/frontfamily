import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/password.css'


class Password extends Component {
  goBack(){  
    window.history.go(-1);  
  } 
  render() {
    return (
      <div className="Password">
        <div className='pass_bar'>  
          <a href="#" onClick={()=>this.goBack()}>  
            <Icon type="arrow-left" className='pass'/>           
          </a>  
          <span className='pass_title'>修改密码</span>
          <span className='pass_submit'>提交</span>
        </div>
        <div className='pass_replace'>
          <ul className='pass_three'>
            <li><input type='text' placeholder='输入旧密码'/></li>
            <li><input type='text' placeholder='设置新密码'/></li>
            <li><input type='text' placeholder='确认旧密码'/></li>
          </ul>
          <div className='pass_about'>密码至少要6位，且包含数字和字母</div>
        </div>
	    </div>
    );
  }
}

export default Password;
