import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Icon,Avatar,Upload, message } from 'antd';
import '../App.css';
import '../css/datas.css';
import Firstname from './Firstname';
import Password from './Password';
import Telphone from './Telphone';
import Name from './Name';
import Sex from './Sex';
import Me from './Me';
import Email from './Email';
import {connect} from 'react-redux';
import * as action from '../action/action';
import $ from 'jquery';
import { Button,Grid,Tabbar,ActionSheet} from 'react-weui';
import 'react-weui/build/dist/react-weui.css';
import 'weui';

class Datas extends Component {
      constructor(){
            super();
            this.state={
              ios_show: false,
              android_show: false,
              menus: [{
                  label: '选取图片',
                  onClick: ()=> {}
              }],
              actions: [
                  {
                      label: '取消',
                      onClick: this.hide.bind(this)
                  }
              ]
            }
      }
      hide(){
        this.setState({
            auto_show: false,
            ios_show: false,
            android_show: false,
        });
      }
      /*componentDidMount(){
            $.ajax({
                  url: 'http://localhost:8005/ownerinfo/oi',
                  type: 'get',
                  success: function(e){
                        console.log(e)
                  }
            })
      }*/

	render(){
		return (
            <Router>
		   <div className="wln_datas">
                  <Route path="/firstname" component={Firstname} />
                  <Route path="/me" component={Me} />
                  <Route path="/password" component={Password} />
                  <Route path="/telphone" component={Telphone} />
                  <Route path="/name" component={Name} />
                  <Route path="/sex" component={Sex} />
                  <Route path="/email" component={Email} />
                  <Route exact path="/datas" render={()=>( 
                         <div>
            			<div className="wln_datahint clear">
            	                <Link to="/me" className="left" style={{color: '#f28c03'}}><Icon type="arrow-left"/></Link>
            	                个人资料
                        	</div>
                        	<ul className="wln_datacon">
                        		<li className="clear" onClick={e=>this.setState({ios_show: true})}>
                        			<p className="left">头像</p>
                        			<Icon type="right" className="right" />
                        			<Avatar size="small" icon="user" className="right" />
                        		</li>
                                    <ActionSheet menus={this.state.menus} actions={this.state.actions} show={this.state.ios_show} type="ios" onRequestClose={e=>this.setState({ios_show: false})} />
                                    <Link to="/firstname" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                        		<li className="clear">
                        			<p className="left">姓氏</p>
                        			<Icon type="right" className="right" />
                        			<div className="right">吴</div>
                        		</li>
                                    </Link>
                                    <Link to="/name" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                        		<li className="clear">
                        			<p className="left">昵称</p>
                        			<Icon type="right" className="right" />
                        			<div className="right">楠楠</div>
                        		</li>
                                    </Link>
                                    <Link to="/sex" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                        		<li className="clear">
                        			<p className="left">性别</p>
                        			<Icon type="right" className="right" />
                        			<div className="right">女</div>
                        		</li>
                                    </Link>
                                    <Link to="/email" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                        		<li className="clear">
                        			<p className="left">邮箱</p>
                        			<Icon type="right" className="right" />
                        			<div className="right">暂未填写</div>
                        		</li>
                                    </Link>
                                    <Link to="/telphone" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                        		<li className="clear">
                        			<p className="left">手机号</p>
                        			<Icon type="right" className="right" />
                        			<div className="right">15011236038</div>
                        		</li>
                                    </Link>
                        	</ul>	
                        	<div className="wln_changepsd">
                                    <Link to="/password" style={{color: 'rgba(0, 0, 0, 0.65)'}}>修改密码</Link>
                              </div>
                         </div>
                  )}>
                  </Route>    
		    </div>
             </Router>  
		)
	}
}

var fetchdata=(e)=>{
      return {
            basicInfo: e
      }
}

/*export default connect(fetchdata,action)(Datas);*/
export default Datas;