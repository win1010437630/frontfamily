import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/Property.css';
import Property from './Property';
import * as notice from '../action/notice';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';
class Inform extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.getnotice();   
  }
  infor(){
    var word=`<div class="mask"><div class='alert'>
    <input type='text' class='title' placeholder='请输入标题'><br><input type='text' class='to_who' placeholder='请输入接收者'><br>
    <input type='text' class='detail' placeholder='请输入详细介绍'><br><input type='text' class='time' placeholder='请输入来自哪里'><br>
    <button class='btn save'>保存</button><button class='btn cancel'>取消</button>
    </div></div>`;
    $('body').append(word);
    $('.cancel').click(function(){
      $('.mask').remove();
    })
    $('.save').click(function(){
      $.ajax({
        url:'http://192.168.43.16:8005/notice/add',
        type:'post',
        data:{
            'title':$('.title').val(),
            'time':$('.time').val(),
            'to_who':$('.to_who').val(),
            'detail':$('.detail').val()            
        },
        success:function(e){console.log(e)}
      })
      $('.mask').remove();
    })
  }
  render() {
    return (
      <Router>
      <div>
       <Route path="/Property" component={Property} />  
      <Route exact path="/Inform" render={() => ( 
      	<div className='x_pro'>
      		<div className='xx_property'>
      				<p>
      					通知
      					<Link to='/Property'><span className='left xx_shezhi'>返回</span></Link>
                <a className='infor right' ref='infor' onClick={this.infor} >发起通知</a>
      				</p> 
            {this.props.data.map(function(i,e){
              return  <div key={e} className='list'>
                        <h5>{i.title}</h5>
                        <p>来自住这儿 {i.time}</p>
                      </div>
            })}             
      		</div>
      	</div>
      )}/>
    </div>
    </Router>
    );
  }
}

export default connect(e=>({data:e.notice}),notice)(Inform);
