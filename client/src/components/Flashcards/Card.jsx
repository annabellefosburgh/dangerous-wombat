import React, { useState } from 'react';

export default function Flashcard({ flashcard, onAnswer }) {
    // State variable 'flip' to manage the flipping of the flashcard. Initial value is set to false.
    const [flip, setFlip] = useState(false);

    // State variable 'answerStatus' to track whether the answer was marked as correct or incorrect. Initial value is null.
    const [answerStatus, setAnswerStatus] = useState(null);

    // Function to handle marking the answer as correct or incorrect.
    // It updates the 'answerStatus' state with the corresponding string and calls the 'onAnswer' callback with a boolean.
    const handleAnswer = (isCorrect) => {
        setAnswerStatus(isCorrect ? 'Correct' : 'Incorrect');
        onAnswer(isCorrect);
    };

    return (
        // Container for the flashcard.
        <div className="card-container">
            // Card element that flips when clicked. 
            <div
                className={`card ${flip ? 'flip' : ''}`}
                onClick={() => setFlip(!flip)} // Toggle the 'flip' state value when the card is clicked.
            >
                // Front side of the card showing the question.
                <div className="front">{flashcard.question}</div>
                // Back side of the card showing the answer.
                <div className="back">{flashcard.answer}</div>
            </div>
            // Buttons to mark the answer as correct or incorrect, displayed only when the card is flipped.
            {flip && (
                <div className="buttons">
                    <button className="correct-button" onClick={() => handleAnswer(true)}>Correct</button>
                    <button className="incorrect-button" onClick={() => handleAnswer(false)}>Incorrect</button>
                </div>
            )}
            // Div element to display the status of the answer (Correct or Incorrect).
            <div className="answer-status">{answerStatus}</div>
        </div>
    );
}