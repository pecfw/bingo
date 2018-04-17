import React from 'react';
import { recursivePickNumber } from './index';
///////////////////////
///// Current No //////
///////////////////////

const setNumber = (boardItems) => {
    return recursivePickNumber(91, boardItems)
}

const CurrentNumber = (props) => {
    return <div>
        <p>{props.currentNumber}</p>
        <button onClick={(event) => {
            event.preventDefault();
            let number = setNumber(props.boardItems);
            props.pickNumber(number);
        }}>
            Next Number
            </button>
    </div>
}

export default CurrentNumber