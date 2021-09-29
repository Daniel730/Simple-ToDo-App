import { createStore } from 'redux';

const INITIAL_STATE = [
  { id: Math.random(), text: 'teste 1', done: false },
  { id: Math.random(), text: 'teste 2', done: false },
  { id: Math.random(), text: 'teste 3', done: false },
];

function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Math.random(), text: action.text, done: false }];
    case 'TOGGLE_ITEM':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'DELETE_ITEM':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(list);

export default store;
