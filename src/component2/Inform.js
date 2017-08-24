import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/Property.css';
import Property from './Property';
import * as notice from '../action/notice';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Inform extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.postnotice()
    console.log(notice)
  }
  render() {
    return (
      <Router>
      <div>
       <Route path="/Property" component={Property} />  
      <Route exact path="/Inform" render={() => ( 
      	<div className='x_pro'>
      		<div className='xx_property'>
      				<p>
      					通知
      					<Link to='/Property'>
                  <span className='left xx_shezhi'>返回</span>
                  <a className='infor right'>发起通知</a>
                </Link>
      				</p> 
            {this.props.data.map(function(i,e){
              return  <div key={e} className='list'>
                        <h5>{i.title}</h5>
                        <p>{i.from}</p>
                      </div>
            })}             
      		</div>
      	</div>
      )}/>
    </div>
    </Router>
    );
  }
}

export default connect(e=>({data:e.notice}),notice)(Inform);
