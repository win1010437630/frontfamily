import $ from 'jquery';
import config from '../config';
export function showforum(data){
  return {
    type:'SHOWFORUM',
    data
  }
}
/*export function showshare(data){
  return {
    type:'SHOWSHARE',
    data
  }
}
export function addshare(data){
  return {
    type:'NUMADD',
    data
  }
}
export function delshare(data){
  return {
    type:'NUMDEL',
    data
  }
}*/
//home获取社区所有字段
export function postforum(){
  return dispatch=>{
    return fetch(config.url+config.port+"/photo/photo")
      .then(e=>e.json())
      .then(data=>dispatch(showforum(data)))
  }
}
/*//社区点赞
export function getshare(){
  return dispatch=>{
    return fetch(config.url+config.port+"/photo/getzan")
      .then(e=>e.json())
      .then(data=>dispatch(showshare(data)))
  }
}
export function postshare (a,b) {
  return dispatch=>{
    return $.ajax({
      url:config.url+config.port+"/photo/zan",
      dataType:"json",
      type:"POST",
      data:{
        'id':a,
        'icon':b
      },
      success:(e)=>{
        dispatch(showshare(e))
      }
    })
  }
}*/
/*社区评论插入数据库*/
export function review(b,a,c,d) {
  return dispatch=>{
    return $.ajax({
      url:config.url+config.port+"/photo/pinglun",
      dataType:"json",
      type:"POST",
      data:{
        'uid':b,
        'review':a,
        'uuid':c,
        'name':d
      },
      success:(e)=>{
      }
    })
  }
}
export function showreview(data){
  return {
    type:'SHOWREVIEW',
    data
  }
}

//获取评论所有字段

export function getreview(a) {
  return dispatch=>{
    return $.ajax({
      url:config.url+config.port+"/photo/getreview",
      dataType:"json",
      type:"POST",
      data:{
        'uid':a
      },
      success:(e)=>{
        dispatch(showreview(e))
      }
    })
  }
}