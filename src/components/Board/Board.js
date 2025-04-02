import React from "react";

import Row from '../Row';

function Board({ getLetterClass, rows }) {
    return (
        <div className="guess-results">
            {
                rows.map((row, index) => { return (
                    <Row
                        getLetterClass={getLetterClass}
                        letters={row}
                        key={`row-${index}`}
                    />
                    )}
                )
            }
        </div>
    )
}

export default Board;
