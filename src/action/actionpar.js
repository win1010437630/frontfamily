export function par(data){
    return {
        type:"PARCEL",
        data
    }
}

export function post(){
    return dispatch=>{
        return fetch("http://192.168.43.200:8005/parcel/parcel")
        .then(e=>e.json())
        .then(i=>dispatch(par(i)))
    }
}