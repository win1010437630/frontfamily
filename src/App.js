import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import './App.css';
import 'weui';
import 'react-weui/build/dist/react-weui.css';

import Me from './component/Me';
import Home from './component/Home'
import Wl_Know from './component/Know'
import Wl_detail from './component/Detail'

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
		      	 <Route exact path="/" component={Home}/>			        
              <Route path="/Wl_Know" component={Wl_Know}/>
              <Route path="/Wl_detail" component={Wl_detail}/>
			        {/*<Route path="/Butler" component={Butler}/>
			        <Route path="/Club" component={Club}/>
			        */}
			        <Route path="/Me" component={Me}/>
			        
			  </div>
      </Router>
    );
  }
}

export default App;
