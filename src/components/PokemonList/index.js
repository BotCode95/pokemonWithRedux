
import React from 'react'
import {Grid} from 'semantic-ui-react'
import {PokemonCard} from './PokemonCard'

export const PokemonList = () => {
    const pokemons = Array(20).fill("");
    return (
        <Grid className='PokemonList'>
            {pokemons.map((pokemon) => (
                <PokemonCard/>
            ))}
        </Grid>
  )
}
