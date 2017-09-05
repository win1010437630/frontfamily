import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/Property.css';
import Property from './Property';
import {connect} from 'react-redux';
import * as action from '../action/service';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Service extends Component {
  componentDidMount(){
      this.props.post()



  }
  render() {
    return (
      <Router>
      <div>
       <Route path="/Property" component={Property} />  
      <Route exact path="/Service" render={() => ( 
      	<div className='x_pro'>
      		<div className='xx_property'>
      				<p>
      					维修
      					<Link to='/Property'>
                  <span className='left xx_shezhi'>
      					   返回
      				    </span>
                </Link>
      				</p>      				
      		</div>
          <ul>
              {this.props.data.map((val,k)=>{
                return <li className='ser_list clear'>
                        <p className='ser_user left'>用户名：{val.user}</p>
                        <p className='ser_con left'>问题：{val.content}</p>
                        <button className='right'>处理</button>
                </li>
              }
                )}
          </ul>
      	</div>
      )}/>
    </div>
    </Router>
    );
  }
}

export default connect(e=>({data:e.service}),action)(Service);
