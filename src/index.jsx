import { createStore } from 'redux';
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const boardItems = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

const board = {
  1: { 1: '', 2: '', 3: '', 4: '', 5: '' },
  2: { 1: '', 2: '', 3: '', 4: '', 5: '' },
  3: { 1: '', 2: '', 3: '', 4: '', 5: '' },
  4: { 1: '', 2: '', 3: '', 4: '', 5: '' },
  5: { 1: '', 2: '', 3: '', 4: '', 5: '' }
};

const initialState = {
  currentNumber: null,
  boardItems: boardItems,
  board: board
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_NUMBER":
      return {
        ...state,
        currentNumber: action.value
      };
    case "ADD_BOARD":
      return {
        ...state,
        board: action.value
      };
    case "RESTART_GAME":
      return { state: initialState };
    default:
      return state;
  }
};

const store = createStore(reducer);

export const recursivePickNumber = (max, array, min = 0) => {
  if (array.length === 0) {
    return 'Game Over';
  }
  const number = Math.floor(Math.random() * (max - min)) + min;
  if (array.indexOf(number) > -1) {
    array.splice(array.indexOf(number), 1);
    return number;
  } else {
    return recursivePickNumber(max, array, min);
  }
};

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));