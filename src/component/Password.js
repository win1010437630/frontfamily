import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/password.css'
import Datas from './Datas'


class Password extends Component {
  goBack(){  
    window.history.go(-1);  
  } 
  render() {
    return (
      <Router>
        <div className="Password">
                  <Route path="/datas" component={Datas} />
                  <Route exact path="/password" render={()=>( 
                    <div>
                      <div className='pass_bar'>   
                        <Link to='/datas'><Icon type="arrow-left" className='pass'/></Link>   
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
                  )}>
                  </Route>    
        </div>
      </Router>
    );
  }
}

export default Password;
