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
        .then(e=>dispatch(getbi(e)))
        .catch()    
    }
}



/*
export function showdata(data){
	return {
		type: "SHOWDATA",
		data
	}
}

export function post(){
	return dispatch=>{
		return fetch("http://?type=input&fdjkl")
		.then(e=>e.json())
		.then(e=>dispatch(showdata(e.data)))
		.catch()	
	}
}
*/
