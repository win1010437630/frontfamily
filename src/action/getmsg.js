import config from '../config';
export function shownotice(data){
  return {
    type:'SHOWMSG',
    data
  }
}
export function postmsg(){
  return dispatch=>{
    return fetch(config.url+config.port+"/ownerinfo/oi")
      .then(e=>e.json())
      .then(data=>dispatch(shownotice(data)))
  }
}
