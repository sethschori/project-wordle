import React from "react";

function Letter({ letter, letterClass, letterIndex }) {
    return (
        <div
            className={`cell ${letterClass}`}
            key={`letter-${letterIndex}`}
        >
            {letter}
        </div>
    )
}

export default Letter;
