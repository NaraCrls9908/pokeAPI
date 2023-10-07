import React, { useState, useEffect } from 'react';

function PokemonDetails({ url }) {
  const [details, getAPI] = useFetch();

  useEffect(() => {
    getAPI(url);
  }, [])

  if (!details) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="pokemon-details">
      <h2>Detalles de {details.name}</h2>
      <img src={details.sprites.front_default} alt={details.name} />
      <p>Altura: {details.height} decímetros</p>
      <p>Peso: {details.weight} hectogramos</p>
      <p>Tipo(s): {details.types.map((type) => type.type.name).join(', ')}</p>
    </div>
  );
}

export default PokemonDetails;
