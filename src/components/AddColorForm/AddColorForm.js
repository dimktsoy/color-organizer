import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './AddColorForm.scss';

const AddColorForm = ({
  title = '',
  colorCode = '#CCCCCC',
  onAddColor = (f) => f,
  onChangeTitle = (f) => f,
  onChangeColor = (f) => f,
}) => {
  const inputTitle = useRef(null);

  const changeTitle = (e) => {
    onChangeTitle(e.target.value);
  };

  const changeColor = (e) => {
    onChangeColor(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    onAddColor(title, colorCode);
    onChangeTitle('');
    onChangeColor('#F16720');
    inputTitle.current.focus();
  };

  console.log(title);

  return (
    <form className="add-color-form" onSubmit={submit}>
      <input
        className="add-color-form__input"
        ref={inputTitle}
        type="text"
        value={title}
        onChange={changeTitle}
        placeholder="Заголовок цвета..."
      />
      <input
        className="add-color-form__input add-color-form__input--color"
        type="color"
        onChange={changeColor}
        value={colorCode}
      />
      <button
        className="add-color-form__button"
        type="submit"
        disabled={!title.length}
      >
        Добавить цвет
      </button>
    </form>
  );
};

AddColorForm.propTypes = {
  title: PropTypes.string,
  colorCode: PropTypes.string,
  onAddColor: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onChangeColor: PropTypes.func,
};

export default AddColorForm;
