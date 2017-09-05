import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar,Dialog} from 'react-weui';
import '../App.css';
import '../css/ser.css';
import $ from 'jquery';
import {connect} from 'react-redux';
import * as action from '../action/service';
import Steward from './Steward';
import x_img1 from '../img/tx.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Ser extends Component {
  constructor(props){  
        super(props);  
        this.state = {  
            showAndroid2: false,
            password:'',
            is:'0',
            style2: {
                title: '提交成功',
                buttons: [
                    {
                        type: 'default',
                        label: '确定',
                        onClick: this.hideDialog.bind(this)
                    }
                ]
                
            }
        }   
    } 
     hideDialog() {
        this.setState({
            showAndroid2: false
        });
       $('.user').val('');
       $('.content').val('');

    } 
    submit(){
      var user=$('.user').val();
      var content=$('.content').val();
      this.props.weixiu(user,content);
       this.setState({
            showAndroid2: true
        }); 





   }
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
            <input type='text' className='xx_content user' 
            placeholder='用户'/> 
             <input type='text' className='xx_content content' 
            placeholder='遇到的问题'/> 
           <p onClick={this.submit.bind(this)}><button className='xx_tj'>提交</button></p>
          </div>
           <Dialog type="android" title={this.state.style2.title} buttons={this.state.style2.buttons} show={this.state.showAndroid2}>
          </Dialog>








          </div>
	      	   )}/>
      </div>
      </Router>
    );
  }
}

export default connect(e=>({data:e.service}),action)(Ser);
