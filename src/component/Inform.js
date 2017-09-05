import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import $ from 'jquery'
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import {Icon} from 'antd';
import '../css/inform.css'
import inform from '../img/inform.png'
import * as notice from '../action/notice';
import {connect} from 'react-redux';
class Wl_Inform extends Component {
   constructor(props){
    super(props)
    this.state={display:true}
  }
  componentDidMount(){
    $('.back_Home').click(function(){
        window.history.go(-1)
    })
    this.props.getnotice();
    setTimeout(()=>{
      if(this.props.data!='undefined'){
        this.setState({
          display:false
        })
      }
  },10)
  }
  render() {
    var style=this.state.display?'block':'none';
    return (
      /*邻里分享详情*/
		    <div className="Wl_Inform">
            <div className="wl_inTit">
                <Icon type="arrow-left" className="back_Home"/>
                通知
            </div>		      		
		      	<div className="wl_parCont"  style={{display:style}}>
                  <img src={inform} />
                  <p>你到现在还有收到通知哦</p>
            </div>
            {this.props.data.map(function(i,e){
              return  <div key={e} className='list'>
                        <h5>{i.title}</h5>
                        <p>来自住这儿 {i.time}</p>
                      </div>
            })}
			  </div>
    );
  }
}

export default connect(e=>({data:e.notice}),notice)(Wl_Inform);