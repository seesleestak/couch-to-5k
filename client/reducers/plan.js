function plan(state = [], action) {
    switch(action.type) {
        case 'SET_ACTIVE':
            console.log('SET_ACTIVE action happening');
            // return [
            //     ...state.slice(0, i),
            //     {....state[i], isActive: state[i].isActive},
            //     ...state.slice(i+1),
            // ]
        default:
            return state;
    }
}

export default plan;
