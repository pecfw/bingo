import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import rootReducer from 'reducers';
import Container from 'Container';

const App = (props) => {
    return (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Friday Fun at 4:44 Bingo Time</h1>
        </header>
        <Container/>
    </div>)
}

ReactDOM.render(<Provider store={store}>
    <App></App>
</Provider>, document.getElementById('app'))

export default App;