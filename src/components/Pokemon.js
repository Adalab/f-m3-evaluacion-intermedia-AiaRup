import React from 'react';
import PropTypes from 'prop-types';
import TypeList from './TypeList';

const Pokemon = props => {
  const { url, name, types } = props;
  return (
    <div className="pokemon__card">
      <img src={url} alt="" className="card__image" />
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
