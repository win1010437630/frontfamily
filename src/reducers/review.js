export default function review(state=[],action){
    switch(action.type){
        case 'SHOWREVIEW':
        return action.data;
        default:
        return state;
    }
}