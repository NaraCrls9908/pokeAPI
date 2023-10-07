import { useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import {PokemonDetails} from './components/PokemonDetails/pokemonDetails'

function App() {
  const [pokemons, getAPI] = useFetch();
  const url = 'https://pokeapi.co/api/v2/pokemon';
  useEffect(() => {
    getAPI(url);
  }, [])
  
  return (
    <>
      <ul className="pokemon-list">
      {pokemons?.map((pokemon, index) => (
          <li key={index} className="pokemon-item">
            <PokemonDetails url={pokemon.url} />
          </li>
        ))}
      </ul>
    </>
  )
}




export default App
