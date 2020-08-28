import { CHANGE_TITLE_TEXT, CHANGE_COLOR_CODE } from './actions';

const initialState = {
  title: '',
  colorCode: '#F16720',
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE_TEXT:
      return {
        ...state,
        title: action.payload,
      };
    case CHANGE_COLOR_CODE:
      return {
        ...state,
        colorCode: action.payload,
      };
    default:
      return state;
  }
};
