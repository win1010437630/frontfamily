export function shownotice(data){
  return {
    type:'SHOWMSG',
    data
  }
}
export function postmsg(){
  return dispatch=>{
    return fetch("http://192.168.43.189:8005/ownerinfo/oi")
      .then(e=>e.json())
      .then(data=>dispatch(shownotice(data)))
  }
}
