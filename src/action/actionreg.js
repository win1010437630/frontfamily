import $ from 'jquery'

export function reg(data){
    return {
        type:"PARCEL",
        data
    }
}
/*物业获取邮包信息Ajax*/
export function postreg(){
    return dispatch=>{
        return fetch("http://192.168.43.189:8005/ownerinfo/oi")
        .then(e=>e.json())
        .then(i=>dispatch(reg(i)))
    }
}
/*物业插入数据库的Ajax*/
export function addreg (a,b,c) {
	return dispatch=>{
		return $.ajax({
			url:"http://192.168.43.189:8005/ownerinfo/pass",
			dataType:"json",
			type:"POST",
			data:{
				'id':a,
				'password':b
	        },
	        success:(e)=>{
	        	dispatch(reg(e))
	        }
		})
	}
}