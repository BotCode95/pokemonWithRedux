

const initialState = {
    list: []
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POKEMON':
            return  { ...state, list: action.payload}
        default:
            return state;
    }
}