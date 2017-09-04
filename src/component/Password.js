import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {Icon} from 'antd';
import $ from 'jquery'
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/password.css'
import Datas from './Datas'


class Password extends Component {
  goBack(){  
    window.history.go(-1);  
  } 
  componentDidMount(){
    var storage=window.sessionStorage;
    var reg=/^\w{6,16}$/; 
    $(".newpsd").attr("readonly","readonly");
    $(".verify").attr("readonly","readonly");
    $(".oldpsd").blur(function(){
      $.ajax({
        type:"post",
        url:"http://192.168.43.189:8005/ownerinfo/owneri",
        async:true,
        data:{
          id: storage.getItem('id')
        },
        success:function(e){
          console.log(e)
          e.map((e)=>{
            //console.log(e.password)
            if($(this).val()!==e.password){
              $(this).val('');
              //alert('密码输入错误,请重新确认')
              return false;
            }else{
              $(".newpsd").removeAttr("readonly");
            }
          })
        }.bind(this)
      }); 
    });

    $('.newpsd').blur(function(){
      if(reg.test($(this).val())==false){ 
        $(this).val('')
        alert("密码为6-16位数字或字母!");
        return false; 
      }else{
        //console.log($('.newpsd').val())
        $(".verify").removeAttr("readonly");
        $('.verify').blur(function(){
          if($(this).val()!==$('.newpsd').val()){
            //alert('密码输入错误,请重新确认')
            $(this).val('');
            return false;
          }else{
            $('.pass_submit').click(function(){
              $.ajax({
                type:"post",
                url:"http://192.168.43.189:8005/ownerinfo/setpsd",
                async:true,
                data:{
                  id: storage.getItem('id'),
                  psd:$('.verify').val()
                },
                success:function(e){
                  console.log(e)
                  alert('更改成功!')
                }
              }); 
            })
          }
        }) 
      }
    })

     
  }
  render() {
    return (
      <Router>
        <div className="Password">
                  <Route path="/datas" component={Datas} />
                  <Route exact path="/password" render={()=>( 
                    <div>
                      <div className='pass_bar'>   
                        <Link to='/datas'><Icon type="arrow-left" className='pass'/></Link>   
                        <span className='pass_title'>修改密码</span>
                        <span className='pass_submit'>提交</span>
                      </div>
                      <div className='pass_replace'>
                        <ul className='pass_three'>
                          <li><input type='password' className="oldpsd" placeholder='输入旧密码'/></li>
                          <li><input type='password' className="newpsd" placeholder='设置新密码'/></li>
                          <li><input className="list" className="verify" type='password' placeholder='确认新密码'/></li>
                        </ul>
                        <div className='pass_about'>密码为6-16位数字或字母</div>
                      </div>
                    </div>
                  )}>
                  </Route>    
        </div>
      </Router>
    );
  }
}

export default Password;
