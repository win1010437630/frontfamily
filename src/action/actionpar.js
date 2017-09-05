import $ from 'jquery';
import config from '../config';
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
        return fetch(config.url+config.port+"/parcel/parcel")
        .then(e=>e.json())
        .then(i=>dispatch(par(i)))
    }
}
/*物业插入数据库的Ajax*/
export function jgr (a,b,c,d,e) {
	return dispatch=>{
		return $.ajax({
			url:config.url+config.port+"/parcel/par",
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