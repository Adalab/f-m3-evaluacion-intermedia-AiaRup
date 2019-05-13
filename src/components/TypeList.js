import React from 'react';
import PropTypes from 'prop-types';

const TypeList = props => {
  const { types } = props;
  return (
    <ul className="types__list">
      {types.map((type, index) => (
        <li className="pokemon__type" key={index}>
          {type}
        </li>
      ))}
    </ul>
  );
};

export default TypeList;

TypeList.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string)
};
