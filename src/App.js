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
import { Icon } from 'antd';
class App extends Component {
  render() {
    return (
    	<Router>
		      <div className="App">		      		
		      	  <Route exact path='/' render={()=>(
                  <div className='status'>   
                      <div>
                        {/*<h3>欢迎来到‘住这儿’</h3>
                        <h4>---请选择界面开始你的旅程</h4>*/}
                        <button className='xx_boss'><Link to='/login?id=1'><Icon type="coffee" />Boss</Link></button>
                        <button className='xx_user'><Link to='/login?id=3'><Icon type="home" />user</Link></button>
                        <button className='xx_Property'><Link to='/login?id=2'><Icon type="contacts" />Property</Link></button>
                        
                      </div>
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
