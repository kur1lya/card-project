export const defaultState = {
    value: ''
}

export const actions = {
    SET_SEARCH: 'SET_SEARCH'
};

export const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SET_SEARCH:
            return { ...state, value: action.payload };

        default:
            return state
    }
}

export default searchReducer;