import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './PokeList.css';

const PokeList = props => {
  const { pokemonList } = props;

  return (
    <ul className="list__pokemon">
      {pokemonList.map(pokemon => {
        return (
          <li className="pokemon" key={pokemon.id}>
            <Pokemon url={pokemon.url} name={pokemon.name} types={pokemon.types} />
          </li>
        );
      })}
    </ul>
  );
};

export default PokeList;

PokeList.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object)
};
