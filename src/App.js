import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import './App.css';
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import Login from './component/Login';

import Me from './component/Me';
// import Steward from './component/Steward';

import Home from './component/Home'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    	<Router>
		      <div className="App">		      		
		      	  <Route exact path="/" component={Login}/>
              <Route path="/Home" component={Home}/>    		        
			  </div>
      </Router>
    );
  }
}

export default App;
