import React from 'react';
import "../App.css";


function Display({stats: {balls, strikes}}) {
    return (
        <>
            <h1>{`Strikes: ${strikes}`}</h1>
            <h1>{`Balls: ${balls}`}</h1>
        </>
    );
}
export default Display;