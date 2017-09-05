import config from '../config';
export function showParcel(data){
  return {
    type:'SHOWPARCEL',
    data
  }
}
export function postParcel(){
  return dispatch=>{
    return fetch(config.url+config.port+"/parcel/parcel")
      .then(e=>e.json())
      .then(data=>dispatch(showParcel(data)))
  }
}
