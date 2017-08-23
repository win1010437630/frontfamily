import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import KnowXq from './KnowXq'
import Home from './Home'
import $ from 'jquery'
import '../App.css';
import '../css/know.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Wl_Know extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
    <Router>
      <div className="wl_Know">
          <Route path="/KnowXq" component={KnowXq} />
          <Route path="/home" component={Home} />
          <Route exact path="/Wl_Know" render={() => ( 
      	     <div>
                  <div className="wl_youKnow">
                      <Link to="/home">
                          <Icon type="arrow-left" className="back_Home"/>
                      </Link>
                      你知道么
                 </div>
                 <ul className="wl_list">
                    <Link to="/KnowXq">
                        <li>
                            <p className="wl_kAbout">
                                关于住这儿7月26日23点-次日9点停机维护的公告
                            </p>
                            <p className="wl_there">
                              <span>来自住这儿</span>
                              <span className="wl_ktime">2016-09-01 15:00</span>
                            </p>
                        </li>
                    </Link>
                    <Link to="/KnowXq">
                        <li>
                            <p className="wl_kAbout">
                                关于住这儿7月26日23点-次日9点停机维护的公告
                            </p>
                            <p className="wl_there">
                              <span>来自住这儿</span>
                              <span className="wl_ktime">2016-09-01 15:00</span>
                            </p>
                        </li>
                    </Link>
                    <Link to="/KnowXq">
                        <li>
                            <p className="wl_kAbout">
                                关于住这儿7月26日23点-次日9点停机维护的公告
                            </p>
                            <p className="wl_there">
                              <span>来自住这儿</span>
                              <span className="wl_ktime">2016-09-01 15:00</span>
                            </p>
                        </li>
                    </Link>
                 </ul>
            </div>

         )}/>
	     </div>
    </Router>
    );
  }
}

export default Wl_Know;
