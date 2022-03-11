
import React from 'react'
import {Grid} from 'semantic-ui-react'
import {PokemonCard} from './PokemonCard'

export const PokemonList = ({pokemons = []}) => {

    return (
        <Grid className='PokemonList'>
            {pokemons.map((pokemon) => (
                <PokemonCard pokemon={pokemon} key={pokemon.name}/>
            ))}
        </Grid>
  )
}
