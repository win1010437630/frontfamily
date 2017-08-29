export default function par(state=[],action){
    switch(action.type){
        case 'PARCEL':
        return action.data;
        default:
        return state
    }
}