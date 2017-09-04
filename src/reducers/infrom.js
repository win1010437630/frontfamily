export default function infrom(state=[],action){
    switch(action.type){
        case 'SHOWINFROM':
        return action.data;
        default:
        return state;
    }
}