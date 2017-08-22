import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/Steward.css';
import Complain from './Complain'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Steward extends Component {
  render() {
    return (
      <Router>
      <div>
      <Route path="/Complain" component={Complain} />  
      <Route exact path="/" render={() => ( 
      <div className="xx_Steward">
        {/*这是头部*/}
        <div className='xx_heade'>
            <p>管家呼是一键睿智服务提供的贴心功能，你可以
            通过住这儿快速找到你的管
            家，提供一对一的服务。此功能需要通
            知产权登记 人审核身份申请后才能使用，
            现在通知吗？</p>
            <button>去通知</button>
        </div>
       {/*互动*/}
       <div className="xx_con_top clear">
            <p>你可以这样和我们互动</p>
            <div className='xx_item'>
                <p className='left'>维修</p>
                <p className='left'>              
                  家里的灯管不亮了，麻烦安排维修师傅来修下，谢谢。
                </p>
            </div>
            <div className='xx_item'>
                <p className='left'>帮忙</p>
                <p className='left'>             
                  最近想给家里装修了，有优惠介绍吗？
                </p>
            </div>
            <div className='xx_item'>
                 <p className='left'>帮忙</p>
                 <p className='left'>          
                 管家，如何给一卡通充值
                </p>
            </div>
       </div>
     {/*星级评价*/}
     <div className='xx_pingjia'>
          <p>八月物业服务请您评价</p>
     </div>
      {/*分项服务*/}
      <ul className='item'>
          <li>智能门禁<span className='right'>></span></li>
          <li>访客邀请<span className='right'>></span></li>
          <li>邮包<span className='right'>></span></li>
          <li>你知道吗<span className='right'>></span></li>
          <li>友邻计划<span className='right'>></span></li>
      </ul>
      <ul className='item'>
          <li>房屋租赁<span className='right'>></span></li>
          <li>二手房交易<span className='right'>></span></li>
      </ul>
      <ul className='item xx_end'>
          <li><Link to='Complain'>投诉<span className='right'>></span></Link></li>
      </ul> 
	  </div>
      )}/>
</div>
    </Router>
    );
  }
}

export default Steward;
