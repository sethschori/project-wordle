import React from 'react';

function WinBanner({ numGuesses }) { 
    const msg = `You won in ${numGuesses} guess${numGuesses > 1 ? 'es' : ''}!`

    return (
        <div
            className='happy banner'
        >
            {msg}
        </div>
    )
}

function LoseBanner({ answer }) { 
    const msg = `You lost. Correct answer was ${answer}.`

    return (
        <div
            className='sad banner'
        >
            {msg}
        </div>
    )
}

function WinLoseBanner({ answer, isLost, isWon, numGuesses }) { return (
    <div>
        {isLost && (
            <LoseBanner answer={answer} />
        )}
        {isWon && (
            <WinBanner numGuesses={numGuesses} />
        )}
    </div>
)}

export default WinLoseBanner;
