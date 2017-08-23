import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Icon } from 'antd';
import '../App.css';
import '../css/feedback.css'

class Feedback extends Component {
	handleBack(){
		window.history.go(-1);
	}
	render(){
		return (      
		  <div className="wln_opinion">
			<div className="wln_opinionhint">
	                <Icon type="arrow-left" onClick={this.handleBack.bind(this)}/>
	                意见反馈
            	</div>
              </div>    
		)
	}
}

export default Feedback;