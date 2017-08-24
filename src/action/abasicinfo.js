export function getBi(data){
    return {
        type:"GETBI",
        data
    }
}
export function fetchBi(){
    return dispatch=>{
        return fetch("http://localhost:8005/ownerinfo/oi",{
            method: 'get'
        })
        .then(e=>e.json())
        .then(e=>dispatch(getBi(e)))
        .catch()    
    }
}