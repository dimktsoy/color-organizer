export const CHANGE_TITLE_TEXT = 'CHANGE_TITLE_TEXT';
export const CHANGE_COLOR_CODE = 'CHANGE_COLOR_CODE';

export const setTitleText = (title) => ({
  type: CHANGE_TITLE_TEXT,
  payload: title,
});

export const setColorCode = (colorCode) => ({
  type: CHANGE_COLOR_CODE,
  payload: colorCode,
});
