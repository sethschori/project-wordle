import React from "react";

import Letter from '../Letter';

function Row({ getLetterClass, letters }) { return (
        <div className="guess">
            {
                letters.map((letter, index) =>
                    <Letter
                        getLetterClass={getLetterClass}
                        index={index}
                        letter={letter}
                        key={`letter-${index}`}
                    />
                )
            }
        </div>
    )
}

export default Row;
