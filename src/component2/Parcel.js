import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/Property.css';
import Property from './Property';
import {Icon} from 'antd';
import $ from 'jquery';
import {connect} from 'react-redux';
import * as action from '../action/actionpar';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Parcel extends Component {
  constructor(){
      super()
   } 
   /*点击提交按钮插入数据*/
   submit(){
      var username=$('.usernanme').val();
      var messtype=$('.messtype').val();
      var code=$('.code').val();
      var phone=$('.phone').val();
      var address=$('.address').val();
      this.props.jgr(username,messtype,code,phone,address)
   }
  componentDidMount(){
    console.log(this.props.post())
    /*添加邮包下拉框*/
    $(".addParcel").click(function(){ 
      $(".addWarp").slideToggle("slow"); 
      $(this).toggleClass("active"); 
      return false; 
    }) 
  	
    $('.cancel').click(function(){
        $('.addWarp input').val("")
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
          {/*添加快递包裹*/}
          <div className="addWarp">
              <input type="text" placeholder="用户名" className="usernanme"/>
              <input type="text" placeholder="快递类型" className="messtype"/>
              <input type="text" placeholder="编码" className="code"/>
              <input type="text" placeholder="手机号" className="phone"/>
              <input type="text" placeholder="住址" className="address"/>
              {/*<input type="text" placeholder="是否领取" className="get"/><br/>*/}
              <p className="btnBox">
                <button className="parBtn" onClick={this.submit.bind(this)}>提交</button>
                <button className="cancel">取消</button>
              </p>
          </div>
          <div className="parCon">
                {this.props.data.map(function(e,i){
                    return (
                      <ul className="messList" key={i}>
                            <li>用户名称:{e.username}</li>
                            <li>快递类型:{e.messtype}</li>
                            <li>快递编码:{e.code}</li>
                            <li>手机号码:{e.phone}</li>
                            <li>收件地址:{e.address}</li>
                            <li>是否签收:{e.get}</li>
                      </ul>
                    )
                })}
          </div>         
      </div>
      )}/>
    </div>
    </Router>
    );
  }
}


export default connect(e=>({data:e.par}),action)(Parcel)

