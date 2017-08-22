import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/name.css'


class Email extends Component {
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
          <span className='name_title'>邮箱</span>
          <span className='name_submit'>提交</span>
        </div>
        <div className='name_replace'>
          <ul className='name_one'>
            <li><input type='text' placeholder='' value=''/></li>
          </ul>          
        </div>
        <div className='name_other'>
          
        </div>
	    </div>
    );
  }
}

export default Email;
