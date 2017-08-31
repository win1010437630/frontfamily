import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button,Grid,Tabbar,Dialog} from 'react-weui';
import 'weui';
import '../css/registered.css';
import 'react-weui/build/dist/react-weui.css';
import $ from 'jquery';
//头部  
class Header extends React.Component {  
    goBack(){  
        window.history.go(-1);  
    }  
    render(){  
        return (<div className='Back'>  
                <a href="#" onClick={()=>this.goBack()}><span className='back'>&lt;</span>  </a>  
        </div>)  
    }  
} 
//中间表单  
class Content extends React.Component{   
    constructor(props){  
        super(props);  
        this.state = {  
            telError:null,  
            provingError:null,  
            imageShow:true,
            to:window.location.href.split('/')[3],
            showAndroid2: false,
            password:'',
            style2: {
                title: '是否进入登录页',
                buttons: [
                    {
                        type: 'default',
                        label: '取消',
                        onClick: this.hideDialog.bind(this)
                    },
                    {
                        type: 'primary',
                        label: '进入',
                        onClick: this.skip.bind(this)
                    }
                ]
            }
        }   
    }  
    componentDidMount(){
        var flag=false;
        this.refs.reg_submit.onclick=()=>{
            var telphone=$('#telphone').val();
            var authcode=$('#authcode').val();     
            return (
                $.ajax({
                  url:'http://192.168.43.189:8005/ownerinfo/oi',
                  type:'get',
                  success:function(e){
                        for(var i in e){
                            if(e[i].authcode==authcode&&e[i].telphone==telphone){
                                this.setState({showAndroid2:true});
                                flag=true;                            
                            }  
                        }
                        if(flag!=true){
                            alert('帐号或注册码输入错误，请查证后重新输入！');
                            $('#telphone').val('')
                            $('#authcode').val(''); 
                        }
                    }.bind(this)
               }))
        }
    }
    //手机号判断  
    telCheck(event){  
        this.tel=event.target.value  
        var reg=/^1[34578]\d{9}$/;  
        if(reg.test(this.tel)==false){  
            this.setState({  
               telError:"请输入正确的手机号"  
            })  
        }else{  
            this.setState({  
                telError:""  
            })  
        }   
    }  
    skip(){
        window.location.href='http://'+window.location.href.split('/')[2]+'/login?id=3';
        this.setState({
            showAndroid2: false
        }); 
    }
    hideDialog() {
        this.setState({
            showAndroid2: false
        });//您的初试密码是
    }
    render () {
    return (  
        <div>  
            <ul className='from'>  
                <li className='user'>
                    <input type="text" id='telphone' placeholder="请输入手机号" onBlur={(event)=>this.telCheck(event)} />  
                </li>  
                <li><span className='error'>{this.state.telError}</span></li>  
                <li className='user proving'>                      
                    <input type="text" id='authcode' placeholder="请输入注册码"/>
                </li> 
                <li><button className='registered submit weui-btn' ref='reg_submit'>注册</button></li>
            </ul>  
            <Dialog type="android" title={this.state.style2.title} buttons={this.state.style2.buttons} show={this.state.showAndroid2}>{this.state.password}
            </Dialog>
        </div>)  
    }  
}   
class All extends React.Component{  
  render () {  
      return (  
          <div>  
              <Header></Header>  
              <Content></Content>   
          </div>  
      )  
  }  
}  
export default All;