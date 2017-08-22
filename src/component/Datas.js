import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Icon,Avatar } from 'antd';
import '../App.css';
import '../css/datas.css';
import Firstname from './Firstname';

class Name extends Component {
	handleBack(){
		window.history.go(-1);
	}
	render(){
		return (
            <Router>
		   <div className="wln_datas">
                  <Route path="/firstname" component={Firstname} />
                  <Route exact path="/datas" render={()=>( 
                         <div>
            			<div className="wln_datahint">
            	                <Icon type="arrow-left" onClick={this.handleBack.bind(this)}/>
            	                个人资料
                        	</div>
                        	<ul className="wln_datacon">
                        		<li className="clear">
                        			<p className="left">头像</p>
                        			<Icon type="right" className="right" />
                        			<Avatar size="small" icon="user" className="right" />
                        		</li>
                                    <Link to="/firstname" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                        		<li className="clear">
                        			<p className="left">姓氏</p>
                        			<Icon type="right" className="right" />
                        			<div className="right">吴</div>
                        		</li>
                                    </Link>
                        		<li className="clear">
                        			<p className="left">昵称</p>
                        			<Icon type="right" className="right" />
                        			<div className="right">楠楠</div>
                        		</li>
                        		<li className="clear">
                        			<p className="left">性别</p>
                        			<Icon type="right" className="right" />
                        			<div className="right">女</div>
                        		</li>
                        		<li className="clear">
                        			<p className="left">邮箱</p>
                        			<Icon type="right" className="right" />
                        			<div className="right">暂未填写</div>
                        		</li>
                        		<li className="clear">
                        			<p className="left">手机号</p>
                        			<Icon type="right" className="right" />
                        			<div className="right">15011236038</div>
                        		</li>
                        	</ul>	
                        	<div className="wln_changepsd">修改密码</div>
                         </div>
                  )}>
                  </Route>    
		    </div>
             </Router>   
		)
	}
}

export default Name;