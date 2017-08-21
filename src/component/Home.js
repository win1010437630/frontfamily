import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/home.css'

class Home extends Component {
  render() {
    return (
      <div className="wl_home">
      	 <div className="wl_top">
      	 	<div className="wl_header">
	      	 	<img className="wl_mess" src=""/>
	      	 	北京万科红
	      	 </div>
      	 </div>
      	 <div className="wl_center">
      	 	<div className="wl_Ldoor left" ></div>
      	 	<div className="wl_three right">
      	 		<div className="wl_Rplease">

      	 		</div>
      	 		<div className="wl_parcel left">

      	 		</div>
      	 		<div className="wl_phone right">
      	 			
      	 		</div>
      	 	</div>
      	 </div>
	  </div>
    );
  }
}

export default Home;
