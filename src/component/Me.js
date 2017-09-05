import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button,Grid,Tabbar,Dialog } from 'react-weui';
import $ from 'jquery';
import '../App.css';
import '../css/me.css';
import { Icon} from 'antd';
import warrow from '../img/warrow.png';
import tx from '../img/tx.png';
import Datas from './Datas';
import Infoset from './Infoset';
import About from './About';
import Feedback from './Feedback';
import config from '../config';

class Me extends Component {
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
                  label: '确定',
                  onClick: this.skip.bind(this)
              }
          ]
      },
      basicname: []
    }   
  }
  componentDidMount(){
  	var storage=window.sessionStorage;
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
            basicname: e
          })
        }.bind(this)
      });   
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
  render() {
    return (
      <Router>
        <div className="wln_me">
          <Route path="/datas" component={Datas} />
          <Route path="/infoset" component={Infoset} />
          <Route path="/about" component={About} />
          <Route path="/feedback" component={Feedback} />
          <Route exact path="/me" render={()=>( 
            <div>
              <Link to="/datas">
                <div className="wln_user">
                  <div className="wln_arrow">
                    <img src={warrow}/>
                  </div>
                  <div className="wln_top">
                    <div className="wln_img">
                      <img src={tx}/>
                    </div>
                  </div>
                  {this.state.basicname.map((e)=>{
                  	return <div className="wln_name">{e.nickname}</div>
                  })}
                  <p className="wln_address">北京发的法律辅导教师了</p>
                </div>
              </Link>
              <div className="wln_status clear">
                <div className="left">
                  <h3>身份</h3>
                  <p>待审核</p>
                </div>
                <div className="left last">
                  <h3>当前房屋人数</h3>
                  <p>4</p>
                </div>
              </div>
              <ul className="wln_list">
                <Link to="/infoset" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                  <li className="clear">
                    <p className="left">通知设置</p>
                    <Icon type="right" className="right" />
                  </li>
                </Link>
                <Link to="/about" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                  <li className="clear">
                    <p className="left">关于我们</p>
                    <Icon type="right" className="right" />
                  </li>
                </Link>
                <Link to="/feedback" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                  <li className="clear last">
                    <p className="left">意见反馈</p>
                    <Icon type="right" className="right" />
                  </li>
                </Link>
              </ul>
              <div className="wln_logout" onClick={ e=> this.setState({ showAndroid2: true}) }>退出登录</div>
              <Dialog type="android" buttons={this.state.style2.buttons} show={this.state.showAndroid2}>确定退出本次登录</Dialog>
            </div>
            )}>
          </Route>
        </div>
      </Router>
        
      
    );
  }
}

export default Me;
