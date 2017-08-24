import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import $ from 'jquery'
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import {Icon} from 'antd';
import '../css/parcel.css';
import par from '../img/parcel.png';
import {connect} from 'react-redux';
import * as parcel from '../action/parcel';
class Wl_Parcel extends Component {
  constructor(props){
    super(props)
    this.state={
      display:true
    }
  }
  componentDidMount(){
    $('.back_Home').click(function(){
        window.history.go(-1)
    })
    this.props.postParcel();
    if(this.props.data!=undefined){
      this.setState({
        display:false

      })
    }

  }
  render() {
    var style=this.state.display?'block':'none';
    return (
      /*邻里分享详情*/
		    <div className="Wl_Parcel">
            <div className="wl_parTit">
                <Icon type="arrow-left" className="back_Home"/>
                邮包
            </div>		      		
		      	<div className="wl_parCont" style={{display:style}}>
                  <img src={par} />
                  <p>还没有邮包哦</p>
            </div>
             <ul>
            {this.props.data.map((val,k)=>{
              return     <li key={k} className='xx_parcel clear'>
                              <p>物业管理员：</p>
                              <div>亲爱的：{val.username}（女士/先生）
                                  <p>您的{val.messtype}快递已送达快递室，编码{val.code},请您尽快来取</p>                                
                              </div>
                               <button>已领取</button>
                          </li>                  
            })}
             </ul>
			  </div>
    );
  }
}

export default connect(e=>({data:e.parcel}),parcel)(Wl_Parcel);