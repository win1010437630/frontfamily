 import {combineReducers} from 'redux'
 function a(state=[1,2,3],action){
    switch(action.type){
        case 'SHOWDATA':
        return action.data;
        case 'ADD':
        return [...state,action.item];
        case 'DES':
        return state.filter(e=>e!==action.abc)
        default:
        return state
    }
}
function b(a=0,action){
    switch(action.type){
        case "NUMADD":  
        return a+1;
        default:
        return a
    }
}

export default combineReducers({
    a:a,
    b:b
})