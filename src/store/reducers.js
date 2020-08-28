import { combineReducers } from 'redux';
import { colorsReducer } from './colors/reducers';
import { formReducer } from './form/reducers';

export default combineReducers({
  colors: colorsReducer,
  form: formReducer,
});
