import React, { Component } from 'react';

const button = () => {
  <button>
    {/* onClick={store.dispatch({ type: "RESTART_GAME", value: '' })}> */}
    Restart Game
  </button>;
};

class RestartGame extends Component {
  render() {
    return button;
  }
}

export default RestartGame;
