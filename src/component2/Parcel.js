import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/Property.css';
import Property from './Property';
import {Icon} from 'antd';
import $ from 'jquery'
import {connect} from 'react-redux'
import * as action from '../action/actionpar'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Parcel extends Component {
  constructor(){
      super()
   } 
   
  componentDidMount(){
    console.log(this.props.post())
  	$('.wl_mask').css('display','none')
    $('.addParcel').click(function(){
        $('.wl_mask').css('display','block')
    })
    $('.cancel').click(function(){
        $('.wl_mask').css('display','none')
    })

    
    $('.parBtn').click(function(){
		var username=$('.usernanme').val();
		var messtype=$('.messtype').val();
		var code=$('.code').val();
		var phone=$('.phone').val();
		var address=$('.address').val();
		$.ajax({
	        type:"post",
	        url:"http://localhost:8005/parcel/par",
	        async:true,
	        data:{
	        	username:username,
	        	messtype:messtype,
	        	code:code,
	        	phone:phone,
	        	address:address
	        },
	        success:function(e){
	        	console.log(e)	        		          
	        }     	         
	    })	   
	}) 
  }
  render() {
    return (
      <Router>
      <div>
       <Route path="/Property" component={Property} />  
      <Route exact path="/Parcel" render={() => ( 
      	<div className='x_pro'>
      		<div className='xx_property'>
      				<p>
      					所有包裹
      					<Link to='/Property'>
                  <span className='left xx_shezhi'>
      					   返回
      				    </span>
                </Link>
                <Icon type="plus" className="right addParcel"/>
      				</p>      				
      		</div>
          <table className="parCon">
                <tr> 
                    <th>用户名称</th> 
                    <th>快递类型</th> 
                    <th>快递编码</th> 
                    <th>手机号吗</th> 
                    <th>收件地址</th>
                    <th>是否签收</th>  
                </tr> 
                {this.props.data.map(function(e){
                    return (
                        <tr>
                            <td>{e.username}</td>
                            <td>{e.messtype}</td>
                            <td>{e.code}</td>
                            <td>{e.phone}</td>
                            <td>{e.address}</td>
                            <td>{e.get}</td>
                        </tr>
                    )
                })}
          </table>
          {/*添加快递包裹*/}
          <div className="wl_mask">
              <div className="addWarp">
                  <input type="text" placeholder="用户名" className="usernanme"/><br/>
                  <input type="text" placeholder="快递类型" className="messtype"/><br/>
                  <input type="text" placeholder="编码" className="code"/><br/>
                  <input type="text" placeholder="手机号" className="phone"/><br/>
                  <input type="text" placeholder="住址" className="address"/><br/>
                  {/*<input type="text" placeholder="是否领取" className="get"/><br/>*/}
                  <p className="btnBox">
                    <button className="parBtn" onClick={this.submit}>提交</button>
                    <button className="cancel">取消</button>
                  </p>
              </div>
          </div>
      </div>
      )}/>
    </div>
    </Router>
    );
  }
}


export default connect(e=>({data:e.par}),action)(Parcel)

