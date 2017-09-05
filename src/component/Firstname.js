import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Icon } from 'antd';
import $ from 'jquery';
import '../App.css';
import '../css/firstname.css';
import Datas from './Datas';
import config from '../config';

class Firstname extends Component {
	componentDidMount(){
		$('.wln_nm').css('height',document.documentElement.clientHeight);
		var storage=window.sessionStorage;
		  $.ajax({
		    type:"post",
		    url:config.url+config.port+"/ownerinfo/owneri",
		    async:true,
		    data:{
		      id: storage.getItem('id')
		    },
		    success:function(e){
		      console.log(e)
		      e.map((e)=>{
		      	$('.firstname').attr('placeholder',e.firstname);
		      })
		    }.bind(this)
		  });   
	}
	handleBack(){
		window.history.go(-1);
	}
	render(){
		return (
			 <Router>
		   <div className="wln_datas">
                  <Route path="/datas" component={Datas} />
                  <Route exact path="/firstname" render={()=>( 
			<div className="wln_nm">
				<div className="wln_firstname clear">
	                <Link to='/datas' className="left" style={{color: '#f28c03'}}><Icon type="arrow-left"/></Link>
	                姓氏
	                <button className="right">提交</button>
            	</div>
            	<div className="wln_config clear">
            		<input type="text" className="left firstname" />
            		<p className="right">女士</p>
            	</div>
            	<div className="wln_note">
            		<p>将用于员工联系称呼，填写你的姓氏或全名都可以，不能超过5个汉字</p>
            	</div>
			</div>
			 )}>
                  </Route>    
		    </div>
			 </Router>
		)
	}
}

export default Firstname;