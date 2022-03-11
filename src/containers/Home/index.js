import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Searcher from '../../components/Searcher';
import {PokemonList} from '../../components/PokemonList';
import { getPokemonsWithImg} from '../../actions/index';
import './styles.css';



const Home = () =>{
  const dispatch = useDispatch();
  const pokemons = useSelector( state => state.list );
  useEffect(() => {
   dispatch(getPokemonsWithImg())
    
  }, [])
   
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default Home
