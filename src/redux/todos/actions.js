import { ALLCLEAR, ALLCOMPLETED, COLORSLECTED, DELETED, TODOADDED, TOGGLED } from "./actionsType";

export const todoAdded = (inputTxt) => {
  return {
    type: TODOADDED,
    payload: inputTxt,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (color, todoId) => {
  return {
    type: COLORSLECTED,
    payload: {
      color,
      todoId,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const allClear = () => {
  return {
    type: ALLCLEAR,
  };
};
