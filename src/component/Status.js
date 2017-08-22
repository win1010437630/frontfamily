import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button } from 'react-weui';
import 'weui';
import '../App.css';
import '../css/status.css';
import 'react-weui/build/dist/react-weui.css';

class Status extends React.Component {     
    render(){  
        return(
        	<Router>
        		<div className='status'>
        			<div><button><Link to='/login?id=1'>Boss</Link></button></div>
        			<div><button><Link to='/login?id=2'>物业</Link></button></div>
        			<div><button><Link to='/login?id=3'>业主</Link></button></div>
        		</div>
        	</Router>
       	)
    }  
} 

export default Status;













