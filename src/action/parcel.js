export function showParcel(data){
  return {
    type:'SHOWPARCEL',
    data
  }
}
export function postParcel(){
  return dispatch=>{
    return fetch("http://192.168.43.77:8005/parcel/parcel")
      .then(e=>e.json())
      .then(data=>dispatch(showParcel(data)))
  }
}
