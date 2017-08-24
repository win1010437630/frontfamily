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
import Home from './component/Home';
import Property from './component2/Property';
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
              <Route path="/Property" component={Property}/>  
			  </div>
      </Router>
    );
  }
}
export default App;
