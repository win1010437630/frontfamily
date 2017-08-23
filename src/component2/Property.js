import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/Property.css';
import Guanli from './Guanli';
import Parcel from './Parcel';
import Inform from './Inform';
import Activity from './Activity';
import Service from './Service';
import CheckIn from './CheckIn';
import Forum from './Forum';
import ComSetting from './ComSetting';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Property extends Component {
  render() {
    return (
      <Router>
      <div>
       <Route path="/Guanli" component={Guanli} />
       <Route path="/Parcel" component={Parcel} />
       <Route path="/Inform" component={Inform} />
       <Route path="/Service" component={Service} />
       <Route path="/Activity" component={Activity} />
       <Route path="/CheckIn" component={CheckIn} />
      <Route path="/Forum" component={Forum} />
       <Route path="/ComSetting" component={ComSetting} />  

       <Route exact path="/Property" render={() => ( 
      	<div className='x_pro'>
      		<div className='xx_property'>
      				<p>
      					物业管理中心
      					<Link to='./Guanli'>
	      					<span className='right xx_shezhi'>
	      					  设置
	      				    </span>
      				    </Link>
      				</p>
      				
      		</div>
      		<p className='xx_guanli'>管理员：修修</p>
      		<ul className='xx_proItem'>
      			<li>
      				<Link to='./Inform'>
      				   通知
      				<span>></span>
      				</Link>
      			</li>
      			<li>
      			    <Link to='./Parcel'>
	      				邮包
	      				<span>></span>
      				</Link>
      			</li>
      			<li>
      				<Link to='./Activity'>
      				维修
      				<span>></span>
      				</Link>
      			</li>
      			<li>
      			<Link to='./Activity'>
      				活动
      				<span>></span>
      				</Link>
      			</li>
      			<li>
      			<Link to='./CheckIn'>
      				入住码
      				<span>></span>
      				</Link>
      			</li>
      			<li>
      			<Link to='./Forum'>
      				论坛
      				<span>></span>
      				</Link>
      			</li>
      			<li>
      			<Link to='./ComSetting'>
      				投诉中心
      				<span>></span>
      				</Link>
      			</li>
      		</ul>
      	</div>
      )}/>
    </div>
    </Router>
    );
  }
}

export default Property;
