import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Icon,Switch } from 'antd';
import '../App.css';
import '../css/infoset.css'
import Me from './Me';

class Infoset extends Component {
      onChange(checked) {
            console.log(`switch to ${checked}`);
      }
	handleBack(){
		window.history.go(-1);
	}    
	render(){
		return (
       <Router>
          <div>
                  <Route path="/me" component={Me} />
                  <Route exact path="/infoset" render={()=>(
                        <div className="wln_settings">
                              <div className="wln_sethint clear">
                                  <Link to="/me" className="left" style={{color: '#f28c03'}}><Icon type="arrow-left"/></Link>
                                  通知设置
                              </div>
                              <ul className="wln_setcon">
                                    <li className="clear">
                                          <p className="left">新回复提醒</p>
                                          <Switch className="right" defaultChecked={false} onChange={this.onChange.bind(this)} />
                                    </li>
                                    <li className="clear">
                                          <p className="left">活动通知</p>
                                          <Switch className="right" defaultChecked={false} onChange={this.onChange.bind(this)} />
                                    </li>
                                    <li className="clear">
                                          <p className="left">管家服务</p>
                                          <Switch className="right" defaultChecked={false} onChange={this.onChange.bind(this)} />
                                    </li>
                                    <li className="clear">
                                          <p className="left">房下新增账号</p>
                                          <Switch className="right" defaultChecked={false} onChange={this.onChange.bind(this)} />
                                    </li>
                              </ul> 
                              <p className="wln_setnote">关闭推送通知将收不到通知提醒</p>
                        </div>
                  )}>
                  </Route>    
        </div>
      </Router>
		   
            )
	}
}

export default Infoset;