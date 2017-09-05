import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Icon,Avatar} from 'antd';
import '../App.css';
import '../css/datas.css';
import Firstname from './Firstname';
import Password from './Password';
import Telphone from './Telphone';
import Name from './Name';
import Sex from './Sex';
import Me from './Me';
import Email from './Email';
import $ from 'jquery';
import { Button,Grid,Tabbar,ActionSheet} from 'react-weui';
import 'react-weui/build/dist/react-weui.css';
import 'weui';
import config from '../config';

class Datas extends Component {
    constructor(){
      super();
      this.state={
        basicinfo: []
      }
    }
    componentDidMount(){
      var storage=window.sessionStorage;
      var files;
      var setFiles=function(element){
        console.log(element.files)
        files=element.files[0]   
      }
      $.ajax({
        type:"post",
        url:config.url+config.port+"/ownerinfo/owneri",
        async:true,
        data:{
          id: storage.getItem('id')
        },
        success:function(e){
          console.log(e)
          this.setState({
            basicinfo: e
          })
        }.bind(this)
      });   
      $('.portrait').click(function(){
        $(".datamask").show();
          $('.inputfiles').change(function(){
            setFiles(this);
          });
          $('.cancel').click(function(){
            $('.datamask').hide();
          })
          $('.save').click(function(){
              var fd=new FormData();
              fd.append('uploadedFile',files);
              console.log(fd)
              $.ajax({
                type:"post",
                url:config.url+config.port+"/ownerinfo/img_upload",
                async:true,
                data:fd,
                contentType:false,
                processData:false,
                success:function(e){console.log(e)}
              });            
          })
      })
    }
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
                              <li className="clear portrait" >
                                <p className="left">头像</p>
                                <Icon type="right" className="right" />
                                <Avatar size="small" icon="user" className="right" />
                              </li>
                            <Link to="/firstname" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                        		<li className="clear">
                        			<p className="left">姓氏</p>
                        			<Icon type="right" className="right" />
                        			{this.state.basicinfo.map((e)=>{
                                return <div className="right">{e.firstname}</div>
                              })}
                        		</li>
                                    </Link>
                                    <Link to="/name" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                        		<li className="clear">
                        			<p className="left">昵称</p>
                        			<Icon type="right" className="right" />
                              {this.state.basicinfo.map((e)=>{
                                return <div className="right">{e.nickname}</div>
                              })}
                        		</li>
                                    </Link>
                                    <Link to="/sex" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                        		<li className="clear">
                        			<p className="left">性别</p>
                        			<Icon type="right" className="right" />
                        			{this.state.basicinfo.map((e)=>{
                                return <div className="right">{e.sex}</div>
                              })}
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
                        			{this.state.basicinfo.map((e)=>{
                                return <div className="right">{e.telphone}</div>
                              })}
                        		</li></Link>
                        	</ul>	
                          <div className="datamask">
                            <div className='alert'>
                            <p>更改图片<input type="file" className="inputfiles" />
                            <span className='save'>确定</span>
                            </p>
                            <p className='cancel'>取消</p>
                            </div>
                          </div>
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


export default Datas;