import React, { useState } from 'react';
import "../node_modules/picnic/picnic.min.css";
import '../App.css'

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
                <div className="flashcard-options">
                    {/* Map over the options and render each one */}
                    {flashcard.options.map((option, index) => (
                        <div key={index} className="flashcard-option">
                            {option}
                        </div>
                    ))}
                </div>
            </div>
            {/* Display the answer on the back of the card */}
            <div className="back">{flashcard.answer}</div>
        </div>
    );
}