import React from 'react';
import PropTypes from 'prop-types';
import './Star.scss';

const Star = ({ selected = false, onRate = (f) => f }) => (
  <div className={selected ? 'star star--selected' : 'star'} onClick={onRate} />
);

Star.propTypes = {
  selected: PropTypes.bool,
  onRate: PropTypes.func,
};

export default Star;
