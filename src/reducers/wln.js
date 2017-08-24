function a(state=[],action){
    switch(action.type){
        case 'GETBI':
        return action.data;
        default:
        return state
    }
}
