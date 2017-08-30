export default function getmsg(state=[],action){
    switch(action.type){
        case 'SHOWMSG':
        return action.data;
        default:
        return state;
    }
}