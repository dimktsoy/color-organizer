import React from 'react';
import { connect } from 'react-redux';
import { removeColor, rateColor } from '../../store/colors/actions';
import ColorList from './ColorList';

const ColorListContainer = (props) => {
  return (
    <ColorList
      colors={props.colors}
      onRemoveColor={props.onRemoveColor}
      onRate={props.onRate}
    />
  );
};

const mapStateToProps = (state) => ({
  colors: [...state.colors],
});

const mapDispatchToProps = {
  onRemoveColor: removeColor,
  onRate: rateColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorListContainer);
