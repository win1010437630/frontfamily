import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/ser.css';
import Steward from './Steward';
import x_img1 from '../img/tx.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Ser extends Component {
  render() {
    return (
        <Router>
      <div>
	      <Route path="/Steward" component={Steward} />
	      <Route exact path="/Ser" render={() => (
	      	<div className='x_pj'>
          <div className='pjTOP'>
            <div className='left x_quxiao'>
              <Link to='Steward'>
               取消
              </Link>
            </div>
          </div>
          <div className='x_ts'>
          		<img src={x_img1} />
          		<p className='x_tsText'>
          		   有问题了？在这提交
          		</p>
          </div>
          <div className='inptijiao clear'> 
            <input type='text' className='xx_content' 
            placeholder='用户'/> 
             <input type='text' className='xx_content' 
            placeholder='遇到的问题'/> 
           <p><button className='xx_tj'>提交</button></p>
          </div>
          </div>
	      	   )}/>
      </div>
      </Router>
    );
  }
}

export default Ser;
