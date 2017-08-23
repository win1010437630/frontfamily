import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/name.css'
import Datas from './Datas'

class Email extends Component {
  goBack(){  
    window.history.go(-1);  
  } 
  render() {
    return (
      <Router>
        <div className="Name">
                  <Route path="/datas" component={Datas} />
                  <Route exact path="/email" render={()=>( 
                    <div>
                      <div className='name_bar'>  
                          <Link to='/datas'><Icon type="arrow-left" className='name'/></Link>         
                        <span className='name_title'>邮箱</span>
                        <span className='name_submit'>提交</span>
                      </div>
                      <div className='name_replace'>
                        <ul className='name_one'>
                          <li><input type='text' placeholder='请输入邮箱'/></li>
                        </ul>          
                      </div>
                      <div className='name_other'>
                        
                      </div>
                    </div>
                  )}>
                  </Route>    
        </div>
      </Router>
    );
  }
}

export default Email;
