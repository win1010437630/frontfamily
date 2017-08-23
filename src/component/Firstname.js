import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Icon } from 'antd';
import '../App.css';
import '../css/firstname.css'

class Firstname extends Component {
	handleBack(){
		window.history.go(-1);
	}
	render(){
		return (
			<div className="wln_nm">
				<div className="wln_firstname clear">
	                <Icon type="arrow-left" onClick={this.handleBack.bind(this)}/>
	                姓氏
	                <button className="right">提交</button>
            	</div>
            	<div className="wln_config clear">
            		<input type="text" placeholder="吴" className="left" />
            		<p className="right">女士</p>
            	</div>
            	<div className="wln_note">
            		<p>将用于员工联系称呼，填写你的姓氏或全名都可以，不能超过5个汉字</p>
            	</div>
			</div>
		)
	}
}

export default Firstname;