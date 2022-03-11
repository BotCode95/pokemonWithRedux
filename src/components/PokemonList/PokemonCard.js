import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Image, Label, Grid, Icon, Divider} from 'semantic-ui-react'
import {MAIN_COLOR, FAV_COLOR} from '../../utils/constants'
import './styles.css';
export const PokemonCard = ({pokemon}) => {
  const [typesPokemon, setTypes] = useState([])
  useEffect(() => {
    getPokemonTypes()
  }, [])
  
  const getPokemonTypes = async () => {
    const {data} = await axios.get(pokemon.url)
    setTypes(data.types);

  }
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
        <div className='PokemonCard'>
            <Icon name="favorite" color={FAV_COLOR}/>
            <Image centered src={pokemon.image} alt="Pokemon Front"/>
            <h2 className='PokemonCard-title'>{pokemon.name}</h2>
            <Divider/>
            {typesPokemon.map(({type, id}) => (
              <Label color={MAIN_COLOR} key={id}>{type.name}</Label>
            ))}
        </div>
    </Grid.Column>
  )
}
