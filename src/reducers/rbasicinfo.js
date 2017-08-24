export default function Bi(state=[],action){
    switch(action.type){
        case 'GETBI':
        return action.data;
        default:
        return state
    }
}