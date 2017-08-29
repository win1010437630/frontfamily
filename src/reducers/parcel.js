export default function parcel(state=[],action){
    switch(action.type){
        case 'SHOWPARCEL':
        return action.data;
        default:
        return state
    }
}