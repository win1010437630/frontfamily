import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/PingJ.css';
import Steward from './Steward';
import back from '../img/x_back.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Rent extends Component {
  render() {
    return (
      <Router>
      <div>
	      <Route path="/Steward" component={Steward} />
	      <Route exact path="/Rent" render={() => (
	      	<div className='x_pj'>
          <div className='pjTOP'>
            <p className='left'>
              <Link to='Steward'>
                <img src={back} alt='返回'/>
              </Link>
            </p>
            <p>
              房屋租聘
            </p>
            <p className='right'>提交</p>
          </div>
          <textarea className='xx_conText' 
          placeholder='如果有出租或者租赁本社区的房屋的需求，可以告诉我们，会有专人为您服务'>
        
      </textarea>
          </div>
	      	   )}/>
      </div>
      </Router>
    );
  }
}

export default Rent;
