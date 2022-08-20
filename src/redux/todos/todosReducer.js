import { ALLCLEAR, ALLCOMPLETED, COLORSLECTED, DELETED, TODOADDED, TOGGLED } from "./actionsType";
import { initialState } from "./initialState";

const nextTodoId = (todos) => {
  const maxTodoId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return maxTodoId + 1;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      }); 

    case COLORSLECTED:
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case ALLCLEAR:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todosReducer;
