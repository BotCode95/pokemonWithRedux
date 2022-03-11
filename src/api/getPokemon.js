import axiosUrl from './config'
export const getPokemons = (limit = 151) => axiosUrl.get(`/pokemon?limit=${limit}`)