import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button,Grid,Tabbar,Dialog} from 'react-weui';
import 'weui';
import '../css/registered.css';
import 'react-weui/build/dist/react-weui.css';
import {connect} from 'react-redux';

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
            showAndroid2: false,
            style2: {
                title: '',
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
    provingError(event){  
        this.provingError=event.target.value;        
        if(true){  
            this.setState({  
                provingError:"注册码错误"  
            })  
        }else{  
            this.setState({  
                provingError:""  
            })  
        }   
    }  
    skip(){
        window.location.href='http://'+window.location.href.split('/')[2]+'/login';
        this.setState({
            showAndroid2: false
        }); 
    }
    hideDialog() {
        this.setState({
            showAndroid2: false
        });
    }
    render () {
    return (  
        <div>  
            <ul className='from'>  
                <li className='user'>  
                    <label>手机号</label><input type="text"  placeholder="请输入手机号" onBlur={(event)=>this.telCheck(event)} />  
                </li>  
                <li><span className='error'>{this.state.telError}</span></li>  
                <li className='user proving'>                      
                    <label>注册码</label><input type="text" placeholder="请输入注册码"/>
                </li>
                <li><span className='error'>{this.state.provingError}</span></li>  
                <li><Button type="default" className='registered submit weui-btn' onClick={ e=> this.setState({ showAndroid2: true}) }>注册</Button></li>                 
            </ul>  
            <Dialog type="android" title={this.state.style2.title} buttons={this.state.style2.buttons} show={this.state.showAndroid2}>是否进入登录页
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