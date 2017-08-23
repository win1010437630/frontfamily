import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import Steward from './Steward';
import Me from './Me';
import Home from './Home'
import Wl_Know from './Know'
import Wl_detail from './Detail'

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
                  		
		      	 	        
			  </div>
      </Router>
    );
  }
}

export default App;
