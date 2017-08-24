export default function notice(state=[],action){
    switch(action.type){
        case 'SHOWNOTICE':
        return action.data;
        case 'ADDNOTICE':
        return [...action.data];
        case 'DELNOTICE':
        //return ;
        default:
        return state;
    }
}