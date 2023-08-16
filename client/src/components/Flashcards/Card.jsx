import React, { useState } from 'react';

export default function Flashcard({ flashcard, onAnswer }) {
    // State to manage the flipping of the flashcard
    const [flip, setFlip] = useState(false);

    // State to track whether the answer was correct or incorrect
    const [answerStatus, setAnswerStatus] = useState(null);

    // Handle marking the answer as correct or incorrect
    const handleAnswer = (isCorrect) => {
        setAnswerStatus(isCorrect ? 'Correct' : 'Incorrect');
        onAnswer(isCorrect);
    };

    return (
        <div className="card-container">
            <div
                className={`card ${flip ? 'flip' : ''}`}
                onClick={() => setFlip(!flip)}
            >
                <div className="front">{flashcard.question}</div>
                <div className="back">{flashcard.answer}</div>
            </div>
            {flip && (
                <div className="buttons">
                    <button className="correct-button" onClick={() => handleAnswer(true)}>Correct</button>
                    <button className="incorrect-button" onClick={() => handleAnswer(false)}>Incorrect</button>
                </div>
            )}
            <div className="answer-status">{answerStatus}</div>
        </div>
    );
}