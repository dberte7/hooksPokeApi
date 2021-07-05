import React, { useState } from 'react';
import axios from 'axios';
import Card from '../src/components/Card'
import './App.css';

const App = () => {

  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState({});

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
    setPokemon(res.data);
    console.log(res.data);
  };

  const renderPokemon = () => {
    if (pokemon.name ) {
       return <Card pokemon={pokemon}/>
    }
  };
  
  return (
    <section className="Card">
      <form>
        <label>Pokemon: </label>
        <input type="text" name="name" onChange={handleChange}/>
        <button onClick={handleClick}>Enviar</button>
      </form>

      <div>
        {renderPokemon()}
      </div>

    </section>
  );
}

export default App;
