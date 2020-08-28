import React from 'react';
import { connect } from 'react-redux';
import { addColor } from '../../store/colors/actions';
import { setTitleText, setColorCode } from '../../store/form/actions';
import AddColorForm from './AddColorForm';

const AddColorFormContainer = (props) => {
  return (
    <AddColorForm
      isDisabledButton={props.isDisabledButton}
      title={props.title}
      colorCode={props.colorCode}
      onAddColor={props.onAddColor}
      onChangeTitle={props.onChangeTitle}
      onChangeColor={props.onChangeColor}
    />
  );
};

const mapStateToProps = (state) => ({
  title: state.form.title,
  colorCode: state.form.colorCode,
  isDisabledButton: state.form.isDisabledButton,
});

const mapDisplatchToProps = {
  onAddColor: addColor,
  onChangeTitle: setTitleText,
  onChangeColor: setColorCode,
};

export default connect(
  mapStateToProps,
  mapDisplatchToProps
)(AddColorFormContainer);
