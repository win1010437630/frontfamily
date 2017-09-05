import $ from 'jquery'
/*获取数据库的数据*/
export function ser(data){
    return {
        type:"SERVICE",
        data
    }
}
/*物业获取维修信息Ajax*/
export function post(){
    return dispatch=>{
        return fetch("http://192.168.43.16:8005/service/service")
        .then(e=>e.json())
        .then(i=>dispatch(ser(i)))
    }
}
/*物业插入关于维修的数据库的Ajax*/
export function weixiu (a,b,c,d,e) {
	return dispatch=>{
		return $.ajax({
			url:"http://192.168.43.16:8005/service/ser",
			dataType:"json",
			type:"POST",
			data:{
				'user':a,
	        	'content':b,
	        },
	        success:(e)=>{
	        	dispatch(ser(e))

	        }
		})
	}
}