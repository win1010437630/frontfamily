import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/complain.css';
import Steward from './Steward';
import x_img1 from '../img/tx.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Complain extends Component {
  render() {
    return (
        <Router>
      <div>
	      <Route path="/Steward" component={Steward} />
	      <Route exact path="/Complain" render={() => (
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
          		   对业务有什么不满意的地方
          		   可以在这里投诉，我们会认
          		   真的对待每一条投诉信息。
          		</p>
          </div>
          <textarea className='xx_conText' 
          placeholder='您要投诉的是：'>       
      </textarea>
      <button className='right xx_tj'>提交</button>
          </div>
	      	   )}/>
      </div>
      </Router>
    );
  }
}

export default Complain;
