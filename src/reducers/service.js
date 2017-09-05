export default function service(state=[],action){
    switch(action.type){
        case 'SERVICE':
        return action.data;
        default:
        return state
    }
 }