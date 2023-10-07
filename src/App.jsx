import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import PokemonDetails from './components/PokemonDetails/pokemonDetails';

function App() {
  const [pokeData, getAPI] = useFetch();
  const [pokemonName, setPokemonName] = useState('');
  const url = 'https://pokeapi.co/api/v2/pokemon';
  useEffect(() => {
    getAPI(url);
  }, [])
  
  if(pokeData) {
    console.log("first=>", pokeData
    );
  }
  return (
    <>
       <ul className="pokemon-list">
        {pokeData?.map((pokemon, index) => (
          <><PokemonDetails url={pokemon.url} /></>
        ))}
      </ul>
    </>
  )
}




export default App
