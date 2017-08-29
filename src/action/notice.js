export function shownotice(data){
  return {
    type:'SHOWNOTICE',
    data
  }
}
export function getnotice(){
  return dispatch=>{
    return fetch("http://192.168.43.16:8005/notice/all")
      .then(e=>e.json())
      .then(data=>dispatch(shownotice(data)))
  }
}
/*export function postnotice(json){
  return dispatch=>{
    return fetch('http://192.168.43.16:8005/notice/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: comment.id,
            praise_count: praiseCount,
            praise: isPraise
        })
    })
    .then(response => {
        if (response.status == 200) {
            response.json().then(function(json) {
                self.setState({
                    praise_count: json.praise_count,
                    praise: json.praise
                })
            })
        }
    })
}*/
export function add(data){
  return {
    type:'ADDNOTICE',
    data
  }
}
export function del(data){
  return {
    type:'DELNOTICE',
    data
  }
}