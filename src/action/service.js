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
