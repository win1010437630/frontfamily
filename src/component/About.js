import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Icon } from 'antd';
import '../App.css';
import '../css/about.css'

class About extends Component {
	handleBack(){
		window.history.go(-1);
	}
	render(){
		return (
		  <div className="wln_about">
			<div className="wln_abouthint">
	                <Icon type="arrow-left" onClick={this.handleBack.bind(this)}/>
	                关于我们
            	</div>
                  <div className="wln_software">
                        <div className="wln_pic">
                              <img />
                        </div>
                        <h4>住这儿</h4>
                        <p>V 3.3.4</p>
                        <p className="wln_copyright">&copy;2013-2017 Shenzhen 5th Dimension Technologies Co.,Ltd.All rights reserved.</p>
                  </div>
                  <ul className="wln_deal">
                        <li className="clear">
                              <p className="left">软件许可及服务协议</p>
                              <Icon type="right" className="right" />
                        </li>
                        <li className="clear">
                              <p className="left">开源许可</p>
                              <Icon type="right" className="right" />
                        </li>
                  </ul>
              </div>    
		)
	}
}

export default About;