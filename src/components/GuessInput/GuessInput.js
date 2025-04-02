import React from "react";

function GuessInput({ handleGuess, isLost, isWon }) {
    const [guess, setGuess] = React.useState('')

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (isLost || isWon) { return }
            handleGuess(guess);
            setGuess('');
        }}>
            <label htmlFor="guess-input">Your guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guess}
                required={true}
                pattern="[a-zA-Z]{5,5}"
                onChange={(event) => setGuess(event.target.value.toUpperCase())}
            />
            <button>Submit</button>
        </form>
    )
}

export default GuessInput;
