import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/sex.css';
import Datas from './Datas'

class Sex extends Component {
  goBack(){  
    window.history.go(-1);  
  } 
  render() {
    return (
      <Router>
        <div className="Sex">
                  <Route path="/datas" component={Datas} />
                  <Route exact path="/sex" render={()=>( 
                    <div>
        <div className='sex_bar'>   
            <Link to='/datas'><Icon type="arrow-left" className='sex'/></Link> 
          <span className='sex_title'>性别</span>
          <span className='sex_submit'>提交</span>
        </div>
        <div className='sex_replace'>
          <ul className='sex_two'>
            {/*<li><label>男</label><input type='radio' name='sex'/></li>
            <li><label>女</label><input type='radio' name='sex'/></li>*/}
            <li>
              <input id="item1" type="radio" name="item" value="男" checked/>
              <label for="item1"></label>
              <span>男</span>
            </li>
            <li>
              <input id="item2" type="radio" name="item" value="女"/>
              <label for="item2"></label>
              <span>女</span>
            </li>
          </ul>          
        </div>
        <div className='sex_other'></div>
                    </div>
                  )}>
                  </Route>    
        </div>
      </Router>
    );
  }
}

export default Sex;
