import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/telphone.css'
import Datas from './Datas'


class Telphone extends Component {
  goBack(){  
    window.history.go(-1);  
  } 
  render() {
    return (
      <Router>
        <div className="Telphone">
                  <Route path="/datas" component={Datas} />
                  <Route exact path="/telphone" render={()=>( 
                    <div>
                      <div className='tel_bar'>   
                          <Link to='/datas'><Icon type="arrow-left" className='tel'/></Link>   
                        <span className='tel_title'>绑定新的手机号</span>
                        <span className='tel_submit'>提交</span>
                      </div>
                      <div className='tel_message'>
                        当前手机号：<br/>绑定新的手机号后<br/>下次登录可以使用新的手机号
                      </div>
                      <div className='tel_replace'>
                        <ul className='tel_two'>
                          <li><input type='text' placeholder='新手机号'/></li>
                          <li className='sure'><input type='text' placeholder='验证码'/><button>获取验证码</button></li>
                        </ul>          
                      </div>
                      <div className='tel_other'></div>
                    </div>
                  )}>
                  </Route>    
        </div>
      </Router>
    );
  }
}

export default Telphone;
