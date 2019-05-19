import React from 'react';
import PropTypes from 'prop-types';
import TypeList from './TypeList';
import './Pokemon.css';

const Pokemon = ({ url, name, types, id, handleFavorite }) => {
  return (
    <div className="pokemon__card" id={id} onClick={handleFavorite}>
      <div className="image__container">
        <img src={url} alt={name} className="card__image" />
      </div>
      <h2 className="pokemon__name">{name}</h2>
      <TypeList types={types} />
    </div>
  );
};

export default Pokemon;

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
};
