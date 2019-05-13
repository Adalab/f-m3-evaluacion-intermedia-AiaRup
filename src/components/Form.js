import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

const Form = props => {
  const { filterList } = props;
  return (
    <div>
      <input type="text" className="page__form" placeholder="Search a Pokemon" onChange={filterList} />
    </div>
  );
};

export default Form;

Form.propTypes = {
  filterList: PropTypes.func
};
