import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import './App.css';
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import Steward from './component/Steward'


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
		      		<Route exact path="/" component={Steward}/>
			        {/*<Route path="/Butler" component={Butler}/>
			        <Route path="/Club" component={Club}/>
			        <Route path="/Me" component={Me}/>*/}
			  </div>
	  </Router>
    );
  }
}

export default App;
