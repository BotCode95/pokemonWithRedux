import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER, SET_FAVORITE } from '../actions/type';
const initialState = {
  list: [],
  error: '',
  loading: true,
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    case TOGGLE_LOADER:
        return { ...state, loading: !state.loading };
    case SET_FAVORITE:
        const newPokemonList = [...state.list]
        const currentPokemonIndex = newPokemonList.findIndex((poke) => poke.id === action.payload)
        if(currentPokemonIndex >= 0) {
          newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
        } 
        return {
          ...state,
          list: newPokemonList
        }
    default:
      return state;
  }
};