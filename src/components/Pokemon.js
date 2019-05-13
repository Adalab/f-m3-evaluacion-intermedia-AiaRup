import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = props => {
  const { url, name, types } = props;
  return (
    <div className="pokemon__card">
      <img src={url} alt="" className="card__image" />
      <h2 className="pokemon__name">{name}</h2>
      <ul className="types__list">
        {types.map((type, index) => (
          <li className="pokemon__type" key={index}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
};
