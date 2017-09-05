import $ from 'jquery'
import config from '../config';

export function reg(data){
    return {
        type:"PARCEL",
        data
    }
}
/*物业获取邮包信息Ajax*/
export function postreg(){
    return dispatch=>{
        return fetch(config.url+config.port+"/ownerinfo/oi")
        .then(e=>e.json())
        .then(i=>dispatch(reg(i)))
    }
}
/*物业插入数据库的Ajax*/
export function addreg (a,b,c) {
	return dispatch=>{
		return $.ajax({
			url:config.url+config.port+"/ownerinfo/pass",
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