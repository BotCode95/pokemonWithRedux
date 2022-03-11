import React, {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {Image, Label, Grid, Icon, Divider} from 'semantic-ui-react'
import { setFavorite} from '../../actions/index';
import {MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR} from '../../utils/constants'
import './styles.css';
export const PokemonCard = ({pokemon}) => {
  const [typesPokemon, setTypes] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    getPokemonTypes()
  }, [])
  
  const getPokemonTypes = async () => {
    const {data} = await axios.get(pokemon.url)
    setTypes(data.types);

  }

  const handleFavorite = () => {
    
    dispatch(setFavorite(pokemon.id))
  }
  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
        <div className='PokemonCard'>
            <button className='PokemonCard-favorite' onClick={handleFavorite}>
              <Icon name="favorite" color={color}/>
            </button>
            <Image centered src={pokemon.image} alt="Pokemon Front"/>
            <h2 className='PokemonCard-title'>{pokemon.name}</h2>
            <Divider/>
            {typesPokemon.map(({type}, i) => (
              <Label color={MAIN_COLOR} key={i}>{type.name}</Label>
            ))}
        </div>
    </Grid.Column>
  )
}
