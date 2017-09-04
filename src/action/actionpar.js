import $ from 'jquery'
/*邮包数据库的数据*/
export function par(data){
    return {
        type:"PARCEL",
        data
    }
}
/*物业获取邮包信息Ajax*/
export function post(){
    return dispatch=>{
        return fetch("http://192.168.43.200:8005/parcel/parcel")
        .then(e=>e.json())
        .then(i=>dispatch(par(i)))
    }
}
/*物业插入数据库的Ajax*/
export function jgr (a,b,c,d,e) {
	return dispatch=>{
		return $.ajax({
			url:"http://192.168.43.200:8005/parcel/par",
			dataType:"json",
			type:"POST",
			data:{
				'username':a,
	        	'messtype':b,
	        	'code':c,
	        	'phone':d,
	        	'address':e
	        },
	        success:(e)=>{
	        	dispatch(par(e))

	        }
		})
	}
}