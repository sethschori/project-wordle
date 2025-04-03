import React from "react";

function GuessInput({ handleGuess, isLost, isWon }) {
    const [guess, setGuess] = React.useState('')

    return (
        <form className='guess-input-wrapper' onSubmit={(event) => {
            event.preventDefault();
            if (isLost || isWon) { return }
            handleGuess(guess);
            setGuess('');
        }}>
            <fieldset>
            <legend>
                Enter 5 letters
            </legend>
            <label
                htmlFor="guess-input"
                className="label"
            >
                Your guess:
            </label>
            <input
                id="guess-input"
                className="input"
                type="text"
                autoFocus={true}
                disabled={isLost || isWon}
                value={guess}
                required={true}
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5,5}"
                onChange={(event) => setGuess(event.target.value.toUpperCase())}
            />
            <button></button>
            </fieldset>
        </form>
    )
}

export default GuessInput;
