import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Searcher from '../../components/Searcher';
import {PokemonList} from '../../components/PokemonList';
import {getPokemons} from '../../api/getPokemon';
import {setPokemon} from '../../actions/index';
import './styles.css';

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => ({
  setPokemons: value => dispatch(setPokemon(value))
})

function Home({list, setPokemons}) {
  useEffect(() => {
    getData()
    
  }, [])
  
  const getData = async () =>{
      const {data} = await getPokemons() 
      setPokemons(data.results)
  }
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList/>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
