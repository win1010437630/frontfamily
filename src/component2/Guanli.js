import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button,Grid,Tabbar,Dialog } from 'react-weui';
import '../App.css';
import '../css/me.css';
import { Icon} from 'antd';
import tx from '../img/tx.png';
import warrow from '../img/warrow.png';
import Datas from '../component/Datas';
import Property from './Property';
class Guanli extends Component {
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
      <Router>
        <div className="wln_me">
          <Route path="/Property" component={Property} />
          <Route exact path="/Guanli" render={()=>( 
            <div>   
                <div className="wln_user">
                  <div className="xx_arrow">
                    <Link to='Property'>返回</Link>
                  </div>
                  <div className="wln_top">
                    <div className="wln_img">
                      <img src={tx}/>

                    </div>
                  </div>

                  <div className="wln_name">修修</div>
                  <p className="wln_address">B座A区物业管理</p>
                </div>
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

export default Guanli;
