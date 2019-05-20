import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './PokeList.css';

const PokeList = ({ pokemonList, handleFavorite, favList }) => {
  // const  = props;

  return (
    <ul className="list__pokemon">
      {pokemonList.map(pokemon => {
        console.log(pokemon.id);

        const pokemonClass = favList.includes(pokemon.id) ? 'favorite' : '';
        return (
          <li className={`pokemon ${pokemonClass}`} key={pokemon.id}>
            <Pokemon url={pokemon.url} name={pokemon.name} types={pokemon.types} id={pokemon.id} handleFavorite={handleFavorite} />
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
