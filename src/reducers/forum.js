export default function forum(state=[],action){
    switch(action.type){
        case 'SHOWFORUM':
        return action.data;
        default:
        return state;
    }
}