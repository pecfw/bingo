import { createStore } from 'redux';
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const boardItems = [
  { number: 1, name: 'DevOps son' },
  { number: 2, name: 'Hair shoe' },
  { number: 3, name: 'Climbing spree' },
  { number: 4, name: 'Got a paw' },
  { number: 5, name: 'Likes to drive' },
  { number: 6, name: 'Cocktail tricks' },
  { number: 7, name: 'Kevin' },
  { number: 8, name: 'Likes to skate' },
  { number: 9, name: "That's my wine" },
  { number: 10, name: 'Dislikes Ben' },
  { number: 11, name: "Isn't Kevin" },
  { number: 12, name: 'Can build shelves' },
  { number: 13, name: 'Neon Queen' },
  { number: 14, name: 'Keeps it lean' },
  { number: 15, name: 'Likes a meme' },
  { number: 16, name: 'Specific Cuisine' },
  { number: 17, name: '2000 stickers on their machine' },
  { number: 18, name: 'Seen on too many screens' },
  { number: 19, name: 'Lots of screens' },
  { number: 20, name: 'Waves a plenty' },
  { number: 21, name: 'Creative one' },
  { number: 22, name: 'Likes veggie stew' },
  { number: 23, name: 'Comic book glee' },
  { number: 24, name: 'On the dance floor' },
  { number: 25, name: "Don't overdrive" },
  { number: 26, name: 'Got sweet kicks' },
  { number: 27, name: 'Rafiki heaven' },
  { number: 28, name: 'Never late' },
  { number: 29, name: 'Footballing fine' },
  { number: 30, name: 'Likes to ski' },
  { number: 31, name: 'Cycling one' },
  { number: 32, name: 'Old computer bit' },
  { number: 33, name: 'Musical Queen' },
  { number: 34, name: 'Out the door' },
  { number: 35, name: 'Pub Quizzing Live' },
  { number: 36, name: 'Fencing sticks' },
  { number: 37, name: 'Hmmmmmm' },
  { number: 38, name: "Everyone's mate" },
  { number: 39, name: "That's my wine" },
  { number: 40, name: 'The new 30' },
  { number: 41, name: 'No drum to bang on' },
  { number: 42, name: 'Likes to queue' },
  { number: 43, name: 'Sassy Queen' },
  { number: 44, name: '1 tequila, floor' },
  { number: 45, name: 'Number of live of a herd of cats' },
  { number: 46, name: 'Pick up sticks' },
  { number: 47, name: 'Makes 11' },
  { number: 48, name: "Who doesn't like cake" },
  { number: 49, name: 'Step in time' },
  { number: 50, name: 'Big 5 0' },
  // { number: 51, name: '' },
  // { number: 52, name: '' },
  // { number: 53, name: '' },
  // { number: 54, name: '' },
  // { number: 55, name: '' },
  // { number: 56, name: '' },
  // { number: 57, name: '' },
  // { number: 58, name: '' },
  // { number: 59, name: "That's my wine" },
  // { number: 60, name: 'Ash' },
  // { number: 61, name: 'Cheniece' },
  // { number: 62, name: 'David' },
  // { number: 63, name: 'Kevin' },
  // { number: 64, name: '' },
  // { number: 65, name: 'Paula' },
  // { number: 66, name: '' },
  // { number: 67, name: 'Sanchita' },
  // { number: 68, name: 'Tiago' },
  // { number: 69, name: '' },
  // { number: 70, name: '' },
  // { number: 71, name: 'Ashley' },
  // { number: 72, name: 'Aldwych' },
  // { number: 73, name: '' },
  // { number: 74, name: '' },
  // { number: 75, name: '' },
  // { number: 76, name: '' },
  // { number: 77, name: '' },
  // { number: 78, name: '' },
  // { number: 79, name: '' },
  // { number: 80, name: '' },
  // { number: 81, name: '' },
  // { number: 82, name: '' },
  // { number: 83, name: '' },
  // { number: 84, name: '' },
  // { number: 85, name: '' },
  // { number: 86, name: '' },
  // { number: 87, name: '' },
  // { number: 88, name: '' },
  // { number: 89, name: '' },
  // { number: 90, name: '' },
];

const initialState = {
  currentNumber: null,
  boardItems: boardItems,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_NUMBER':
      return {
        ...state,
        currentNumber: action.value,
      };
    case 'ADD_BOARD':
      return {
        ...state,
        board: action.value,
      };
    case 'RESTART_GAME':
      return { state: initialState };
    default:
      return state;
  }
};

const store = createStore(reducer);

registerServiceWorker();

export default function recursivePickNumber(max, array, min = 0) {
  if (array.length === 0) {
    return 'Game Over';
  }
  const number = Math.floor(Math.random() * (max - min)) + min;

  const selected = array.filter(function(item) {
    return item.number === number;
  });
  if (selected.length > 0) {
    array.splice(array.findIndex(i => i.number === number), 1);
    return selected;
  } else {
    return recursivePickNumber(max, array, min);
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
