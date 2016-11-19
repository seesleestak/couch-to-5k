function plan(state = [], action) {
    switch(action.type) {
        case 'SET_ACTIVE':
            const m = action.index;
            console.log(m);
            console.log(state[m]);
            return [{...state[m], isActive: !state[m].isActive}];
        default:
            return state;
    }
}

export default plan;
