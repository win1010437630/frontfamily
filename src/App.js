import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import './App.css';
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import Home from './component/Home';
import Me from './component/Me';

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
		      		{/*<Route exact path="/" component={Home}/>
			        <Route path="/Butler" component={Butler}/>
			        <Route path="/Club" component={Club}/>
			        <Route path="/Me" component={Me}/>*/}
			        <Route exact path="/" component={Me}/>
			        
			  </div>
      </Router>
    );
  }
}

export default App;
