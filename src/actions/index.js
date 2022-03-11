import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR } from './type';
import {getPokemons} from '../api/getPokemon'

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});


export const getPokemonsWithImg = () => { 
  return async dispatch => {
      const {data} = await getPokemons();
      const pokemonList = data.results.map((pokemon, i) => ({
        ...pokemon,
        id: i + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
      }))
      dispatch(setPokemons(pokemonList))
  } 
}