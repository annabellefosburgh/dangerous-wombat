import React, { useState } from 'react';

export default function Flashcard({ flashcard }) {
    // State to manage the flipping of the flashcard
    const [flip, setFlip] = useState(false);

    return (
        <div
            // Add the 'flip' class when the card is flipped
            className={`card ${flip ? 'flip' : ''}`}
            // Toggle the flip state when the card is clicked
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                {/* Display the question */}
                {flashcard.question}
            </div>
            {/* Display the answer on the back of the card */}
            <div className="back">{flashcard.answer}</div>
        </div>
    );
}