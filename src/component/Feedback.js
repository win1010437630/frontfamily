import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Icon } from 'antd';
import '../App.css';
import '../css/feedback.css'
import Me from './Me';

class Feedback extends Component {
	handleBack(){
		window.history.go(-1);
	}
	render(){
		return (
       <Router>
          <div>
                  <Route path="/me" component={Me} />
                  <Route exact path="/feedback" render={()=>(    
					  <div className="wln_opinion">
						<div className="wln_opinionhint clear">
				                <Link to="/me" className="left" style={{color: '#f28c03'}}><Icon type="arrow-left"/></Link>
				                意见反馈
			            	</div>
	              		</div>    
                  )}>
                  </Route>    
        </div>
      </Router>  
		)
	}
}

export default Feedback;