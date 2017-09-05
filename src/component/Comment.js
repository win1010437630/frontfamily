import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'antd';
import { Button,Grid,Tabbar } from 'react-weui';
import '../App.css';
import '../css/comment.css';
import $ from 'jquery';
import config from '../config';


class Wl_comment extends Component {
  componentDidMount(){
    $('.wl_close').click(function(){
        window.history.go(-1)
    })
    

    $('.biao').click(function(){
       var postUrl=window.sessionStorage.getItem('src');
        $.ajax({
          type:"post",
          url:config.url+config.port+"/photo/img2",
          async:true,
          data:{
            font:$('.wl_fourm').val(),
            postUrl:postUrl,
            time:new Date().toLocaleString()
          },
          success:function(e){        
            console.log(e)            
         }
       });
    })


  }
  setFiles=function(e){
    var files;
    var storage=window.sessionStorage;
      files=e.target.files
      var fd=new FormData();  //表单处理数据的方法
        for(var i=0;i<files.length;i++){
            fd.append('file['+i+']',files[i]) //用append方法以键值对的方式保存
            console.log(fd)
        }
        console.log(fd)
        $.ajax({
            type:"post",
            url:config.url+config.port+"/photo/img",
            async:true,
            data:fd,
            contentType:false,
            processData:false,
            success:function(e){        
              console.log(e)
              storage.setItem('src',e);
            }
        });        
          setTimeout(function(){            
            var url=storage.getItem('src').split(',');
            console.log(url)
            for(var i=0;i<url.length;i++){
                console.log(url[i])
              $('.photo').append('<img class="pic" src="'+url[i]+'">')            
            }
          },10)

    }
  render() {
    return (
      <div className="Wl_detail">
      	   <div className="wl_dtit">
                <Icon type="close" className="wl_close"/>
                社区
                <span className="right biao">发表</span>
           </div>
           <div className="wl_Pcon">
              <textarea placeholder="说点什么吧……" className="wl_fourm"></textarea>

              <Icon type="picture" className="wl_picture"/>
              <input type="file" onChange={this.setFiles} multiple name="file" className="wl_file"/>
              <div className="photo"></div>
           </div>
	     </div>
    );
  }
}

export default Wl_comment;
