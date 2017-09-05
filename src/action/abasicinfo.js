import config from '../config';
export function getBi(data){
    return {
        type:"GETBI",
        data
    }
}
export function fetchBi(){
    return dispatch=>{
        return fetch(config.url+config.port+"/ownerinfo/oi")
        .then(e=>e.json())
        .then(e=>dispatch(getBi(e)))
        .catch()    
    }
}

