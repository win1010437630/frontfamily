export function showforum(data){
  return {
    type:'SHOWFORUM',
    data
  }
}
export function postforum(){
  return dispatch=>{
    return fetch("http://192.168.43.77:8005/photo/photo")
      .then(e=>e.json())
      .then(data=>dispatch(showforum(data)))
  }
}
