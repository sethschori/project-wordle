import React from "react";

import Row from '../Row';

function Board({ answer, rows }) {
    return (
        <div className="guess-results">
            {
                rows.map((row, index) => {
                    return (
                        <Row
                            key={`row-${index}`}
                            answer={answer}
                            letters={row}
                        />
                    )
                })
            }
        </div>
    )
}

export default Board;
