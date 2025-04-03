import React from 'react';

import Board from '../Board/Board';
import { EMPTY_GUESSES, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import WinLoseBanner from '../WinLoseBanner/WinLoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log(answer);

function Game() {
  const [guesses, setGuesses] = React.useState(EMPTY_GUESSES);
  const [isLost, setIsLost] = React.useState(false);
  const [isWon, setIsWon] = React.useState(false);
  const [numGuesses, setNumGuesses] = React.useState(0);

  const isWinningGuess = (guess) => {
    return guess === answer;
  }

  const getLetterClassOld = (letter, letterIndex, rowIndex) => {
    const rowGuess = guesses[rowIndex];
  
    if (letter === ' ') { return '' };
    if (answer[letterIndex] === letter) { return 'correct' };
    if (answer.includes(letter)) {
      const letterCountInGuess = rowGuess.filter(ltr => ltr === letter).length;
      const letterCountInAnswer = answer.split('').filter(ltr => ltr === letter).length;
      let correctlyPlacedCount = 0;
      rowGuess.forEach((ltrGuess, index) => {
        if (ltrGuess === answer[index]) {
          correctlyPlacedCount++;
        }
      })
      const remainingMisplaced = letterCountInAnswer - correctlyPlacedCount;
      console.log({letterCountInAnswer, letterCountInGuess, correctlyPlacedCount, remainingMisplaced});
      return 'misplaced'
    };
    return 'incorrect';
  }

  const handleGuess = (guess) => {
    if (isLost) {
      return;
    }
    const guessRow = guess.split('');
    const newGuesses = [...guesses];
    newGuesses[numGuesses] = guessRow;
    setGuesses(newGuesses);

    setNumGuesses(numGuesses + 1);

    if (isWinningGuess(guess)) {
      setIsWon(true);
    } else {
      if (numGuesses === NUM_OF_GUESSES_ALLOWED - 1) {
        setIsLost(true);
      }
    }
  }

  return (
    <>
      <Board
        answer={answer}
        rows={guesses}
      />
      <GuessInput
        handleGuess={handleGuess}
        isLost={isLost}
        isWon={isWon}
      />
      <WinLoseBanner
        answer={answer} 
        isLost={isLost}
        isWon={isWon}
        numGuesses={numGuesses}
      />
    </>
  )
}

export default Game;
