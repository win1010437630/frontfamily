import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar,Dialog } from 'react-weui';
import '../App.css';
import '../css/me.css';
import warrow from '../img/warrow.png';
import barrow from '../img/barrow.png';
import tx from '../img/tx.png';

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
      }
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
  render() {
    return (
      <div className="wln_me">
        <div className="wln_user">
          <div className="wln_arrow">
            <img src={warrow}/>
          </div>
          <div className="wln_top">
            <div className="wln_img">
              <img src={tx}/>
            </div>
          </div>
          <div className="wln_name">安南</div>
          <p className="wln_address">北京发的法律辅导教师了</p>
        </div>
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
          <li className="clear">通知设置<img className="right" src={barrow} /></li>
          <li className="clear">关于我们<img className="right" src={barrow} /></li>
          <li className="clear last">意见反馈<img className="right" src={barrow} /></li>
        </ul>
        <div className="wln_logout" onClick={ e=> this.setState({ showAndroid2: true}) }>退出登录</div>
        <Dialog type="android" buttons={this.state.style2.buttons} show={this.state.showAndroid2}>确定退出本次登录
            </Dialog>
      </div>
    );
  }
}

export default Me;
