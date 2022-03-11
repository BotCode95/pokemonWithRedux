import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Searcher from '../../components/Searcher';
import {PokemonList} from '../../components/PokemonList';
import { getPokemonsWithImg} from '../../actions/index';
import {Loader} from '../../components/Loader'
import './styles.css';



const Home = () =>{
  const dispatch = useDispatch();
  const pokemons = useSelector( state => state.list );
  const loading = useSelector( state => state.loading );
  useEffect(() => {
   dispatch(getPokemonsWithImg())
    
  }, [])
   
  return (
    <div className='Home'>
      <Searcher />
      {loading && (<Loader/>)}
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default Home
