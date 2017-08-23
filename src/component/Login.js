import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button,Grid,Tabbar } from 'react-weui';
import 'weui';
import '../css/login.css';
import 'react-weui/build/dist/react-weui.css';

//头部  
class Header extends React.Component {  
    goBack(){  
        window.history.go(-1);  
    }  
    render(){  
        return (<div className='Back'>  
                <a href="#" onClick={()=>this.goBack()}>  
                    <span className='back'>&lt;</span>  
                </a>  
            </div>  )  
    }  
} 
//中间表单  
class Content extends React.Component{   
    constructor(props){  
        super(props);  
        this.state = {  
            telError:null,  
            passwordError:null,  
            imageShow:true  
        }   
    }  
    //手机号判断  
    telCheck(event){  
        this.tel=event.target.value  
        console.log(this.tel)  
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
    //密码判断  
    passwordCheck(event){  
        this.password=event.target.value  
        var reg=/^\w{6,20}$/;  
        if(reg.test(this.password)==false){  
            this.setState({  
                passwordError:"密码为6-20位数字或字母或下划线!"  
            })  
        }else{  
            this.setState({  
                passwordError:""  
            })  
        }   
    } 
    submit(){

    } 
    /*//是否记住密码  
    isRemember(){  
        this.setState({  
            imageShow:!this.state.imageShow  
        })  
    } */ 
    render () {  
    return (  
        <div>  
            <ul className='from'>  
                <li className='user'>  
                    <input type="text"  placeholder="请输入手机号" onBlur={(event)=>this.telCheck(event)} />  
                </li>  
                <li><span className='error'>{this.state.telError}</span>  </li>  
                <li className='user'>                      
                    <input type="password"  placeholder="请输入密码" onBlur={(event)=>this.passwordCheck(event)}/></li>  
                <li><span className='error'>{this.state.passwordError}</span>  </li>  
                <li className='remember'>  
                    {/*<img src={imageSrc} a style={unSelected} onClick={()=>this.isRemember()}/>*/}  
                    {/*<a href="#" style={rememberI}>记住手机号</a>*/}
                    <a href="#" className='forget'>忘记密码</a>  
                </li>
                <li><button className='login submit' onClick={this.submit}><Link style={{color:"#fff"}} to="/home">登录</Link></button></li>  
            </ul> 
        </div>)  
    }  
}  
//底部  
class Footer extends React.Component{  
    render(){  
        return(  
        <Link to="/registered" className='weui-btn weui-btn_plain-default register'>快速注册</Link>
        )  
    }  
}  
class All extends React.Component{  
  render () {  
      return (  
          <div>  
              <Header></Header>  
              <Content></Content>  
              <Footer></Footer>  
          </div>  
      )  
  }  
}  
export default All;