import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import wl_Know from './Know'
import $ from 'jquery'
import '../App.css';
import '../css/knowxq.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class KnowXq extends Component {
  render() {
    return (
    <Router>
      <div className="KnowXq">
          <Route path="/wl_Know" component={wl_Know} />
          <Route exact path="/KnowXq" render={() => ( 
      	     <div>
                  <div className="wl_youKnow">
                      <Link to="/wl_Know">
                          <Icon type="close" className="back_Home"/>
                      </Link>
                      详情
                 </div>
                 <ul className="wl_Xlist">                   
                    <li>
                        <p className="knowTit">
                            亲爱的用户：
                        </p>
                        <p className="knowCon">
                            你们好，“拄着饭后水果和；啊哈啊好嘎是噶干哈干哈啊哈干哈啥；噶合适的后果的撒共和国使馆好噶事啊规划干哈干哈
                        </p>
                        <p className="wl_Xthere">
                          <span>来自住这儿</span>
                          <span className="wl_Xtime">2016-09-01 15:00</span>
                        </p>
                    </li>                 
                 </ul>
            </div>

         )}/>
	     </div>
    </Router>
    );
  }
}

export default KnowXq;
