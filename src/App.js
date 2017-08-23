import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import './App.css';
import './css/status.css';
import Login from './component/Login';
import Registered from './component/Registered';
import Steward from './component/Steward';
import Me from './component/Me';
import Home from './component/Home';
import Wl_Know from './component/Know';
import Wl_detail from './component/Detail';
import Password from './component/Password';
import Telphone from './component/Telphone';
import Name from './component/Name';
import Sex from './component/Sex';
import Email from './component/Email';

class App extends Component {
  render() {
    return (
    	<Router>
		      <div className="App">		      		
		      	  <Route exact path='/' render={()=>(
                  <div className='status'>   
                  <div><button><Link to='/login?id=1'>Boss</Link></button></div>
                  <div><button><Link to='/login?id=2'>物业</Link></button></div>
                  <div><button><Link to='/login?id=3'>业主</Link></button></div>
                </div>)}/>
              <Route path="/login" component={Login}/>
              <Route path="/registered" component={Registered}/> 
              <Route path="/home" component={Home}/> 
              <Route path="/sex" component={Sex}/>     
              <Route path="/me" component={Me}/> 
              <Route path="/name" component={Name}/>
              <Route path="/email" component={Email}/>
			  </div>
      </Router>
    );
  }
}
export default App;
