import React from "react";

function Letter({ getLetterClass, index, letter }) {
    return (
        <div className={`cell ${getLetterClass(letter, index)}`}>{letter}</div>
    )
}

export default Letter;
