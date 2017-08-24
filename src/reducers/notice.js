function Bi(state=[],action){
    switch(action.type){
        case 'SHOWNOTICE':
        return action.data;
        case 'ADDNOTICE':
        //return ;
        case 'DELNOTICE':
        //return ;
        default:
        return state
    }
}