import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/PingJ.css';
import Steward from './Steward';
import back from '../img/x_back.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class PingJ extends Component {
	componentDidMount(){
	
		var pingJ=document.getElementById('pingJ')
		 var allLi = pingJ.getElementsByTagName('li');
    for(var i = 0;i < allLi.length;i++){
        //1 3 5 7...
        allLi[i].index = i;
        if(i%2 == 1){
            allLi[i].className ='on';
        };

        allLi[i].onmouseover = function(){

            for(var j = 0;j< allLi.length;j++){
                if(j%2==1){
                    allLi[j].className ='on'
                }
                else{
                     allLi[j].className =''
                }
            }
            //console.log(this.index)
            for(var j = 0;j <= this.index;j++){
                if(j%2==0){
                    allLi[j].className ='re';
                }
                else{
                    allLi[j].className ='on1';
                }
            }
            // 0 2 4 - > re
            // 1 3 5 - > on1
            /*
            if(i%2==0){
                allLi[i].className = 're';
            }
            */

        }


        allLi[i].onmouseout = function(){
            for(var j = 0;j< allLi.length;j++){
                if(j%2==1){
                    allLi[j].className ='on'
                }
                else{
                     allLi[j].className =''
                }
            }
        }

       
    };
	}
  render() {
    return (
      <Router>
      <div>
	      <Route path="/Steward" component={Steward} />
	      <Route exact path="/PingJ" render={() => (
	      	<div className='x_pj'>
	      	<div className='pjTOP'>
	      		<p className='left'>
	      			<Link to='Steward'>
	      				<img src={back} alt='返回'/>
	      			</Link>
	      		</p>
	      		<p>
	      			满意度评价
	      		</p>
	      		<p className='right'>确认</p>

	      	</div>
	      	<div className='pj_con'>
	      	<p className='bayue'>八月物业服务请您评价</p> 
	      	<div id="pingJ">
				<ul>
			    	<li></li>
			        <li></li>
			        <li></li>
			        <li></li>
			        <li></li>
			        <li></li>
			        <li></li>
			        <li></li>
			        <li></li>
			        <li></li>
			    </ul>
			</div>
			</div>
			<textarea className='xx_conText' placeholder='留下你的意见，让我们把服务做的更好'>
				
			</textarea>
			</div>
	      	   )}/>
      </div>
      </Router>
    );
  }
}

export default PingJ;
