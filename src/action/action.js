export function showdata(data){
    return {
        type: "SHOWDATA",
        data
    }
}
export function get(){
    return dispatch=>{
        return fetch("http://")
        .then(e=>e.json())
        .then(e=>dispatch(showdata(e.data)))
        .catch()    
    }
}