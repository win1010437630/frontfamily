import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button,Grid,Tabbar } from 'react-weui';
import { Icon } from 'antd';
import Home from './Home';
import Steward from './Steward';
import Wl_comment from './Comment';
import Me from './Me';
import '../App.css';
import '../css/tabbar.css'
import $ from 'jquery'
class Tab extends Component {
  componentDidMount(){
      $(function(){
        $('.orange').css('color','#fea719')

        $('.weui-tabbar__item').click(function(){
            $(this).find('.hong').css('color','#fea719').end().find('.weui-tabbar__label').css('color','#fea719').end().siblings().find('.hong').css('color','#999').end().find('.weui-tabbar__label').css('color','#999')
        })
      })

  }






  render() {
    return (
      <div className="Tabbar">
       <Route exact path='/' component={Home} />
       <Route path="/steward" component={Steward} />
       <Route path="/me" component={Me} />
       <Route path="/Wl_comment" component={Wl_comment}/>
       <div className="weui-tabbar">
          <Link to="/home" href="javascript:;" className="weui-tabbar__item weui-bar__item--on">
            <div className="weui-tabbar__icon">
              <Icon type="home" className='hong orange' />
            </div>
            <p className="weui-tabbar__label orange">住这儿</p>
          </Link>
          <Link to="/steward" href="javascript:;" className="weui-tabbar__item">
            <div className="weui-tabbar__icon">
              <Icon type="tool" className='hong'/>
            </div>
            <p className="weui-tabbar__label">管家</p>
          </Link>
          <Link to="/Wl_comment" href="javascript:;"  className="weui-tabbar__item">
            <div className="weui-tabbar__icon">
              <Icon type="message" className='hong'/>
            </div>
            <p className="weui-tabbar__label">社区</p>
          </Link>
          <Link to="/me" href="javascript:;" className="weui-tabbar__item">
            <div className="weui-tabbar__icon">
              <Icon type="user" className='hong'/>
            </div>
            <p className="weui-tabbar__label">我</p>
          </Link>
        </div>
	    </div>
    );
  }
}

export default Tab;
