import React from "react";

import Letter from '../Letter';

function Row({ answer, letters }) {
    const letterClasses = [];

    const generateLetterClasses = () => {
        const letterCountsInGuess = {};
        letters.forEach(l => {
            if (letterCountsInGuess[l]) {
                letterCountsInGuess[l]++
            } else {
                letterCountsInGuess[l] = 1
            }
        });
        const letterCountsInAnswer = {};
        answer.split('').forEach(l => {
            if (letterCountsInAnswer[l]) {
                letterCountsInAnswer[l]++
            } else {
                letterCountsInAnswer[l] = 1
            }
        });
        const correctlyPlacedCounts = {};
        letters.forEach((ltrGuess, index) => {
            if (ltrGuess === answer[index]) {
                if (correctlyPlacedCounts[ltrGuess]) {
                    correctlyPlacedCounts[ltrGuess]++
                } else {
                    correctlyPlacedCounts[ltrGuess] = 1
                }
            }
        })
        const remainingMisplacedCounts = {};
        Object.keys(letterCountsInAnswer).forEach(l => {
            remainingMisplacedCounts[l] = letterCountsInAnswer[l] - (correctlyPlacedCounts[l] || 0);
        })
        const placedCounts = {};
        Object.keys(letterCountsInGuess).forEach(l => {
            placedCounts[l] = 0;
        })

        letters.forEach((letter, index) => {
            if (letter === ' ') {
                letterClasses[index] = '';
            } else if (answer[index] === letter) {
                letterClasses[index] = 'correct';
            } else if (answer.includes(letter) && ((placedCounts[letter] || 0) < (remainingMisplacedCounts[letter] || 0))) {
                console.log({letterCountsInAnswer, letterCountsInGuess, correctlyPlacedCounts, remainingMisplacedCounts});
                letterClasses[index] = 'misplaced';
                placedCounts[letter]++;
            } else {
                letterClasses[index] = 'incorrect';
            }
        })
    };

    generateLetterClasses();

    return (
        <div className="guess">
            {
                letters.map((letter, index) => {
                    return (
                        <Letter
                            key={`letter-${index}`}
                            letter={letter}
                            letterClass={letterClasses[index]}
                            letterIndex={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default Row;
