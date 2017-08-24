export function shownotice(data){
  return {
    type:'SHOWNOTICE',
    data
  }
}
export function postnotice(){
  return dispatch=>{
    return fetch("http://192.168.43.16:8005/notice/all")
      .then(e=>e.json())
      .then(data=>dispatch(shownotice(data)))
  }
}
export function add(data){
  return {
    type:'ADDNOTICE',
    data
  }
}
export function del(data){
  return {
    type:'DELNOTICE',
    data
  }
}