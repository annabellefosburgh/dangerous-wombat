import React, { useState } from 'react';
import Flashcard from './Card';

export default function FlashcardList({ flashcards }) {
    // State to track the overall score for all flashcards
    const [score, setScore] = useState(0);

    // State to track the current flashcard index
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    // Function to handle when a user answers a flashcard
    const handleAnswer = (isCorrect) => {
        setScore(prevScore => isCorrect ? prevScore + 1 : prevScore);
    };

    // Function to go to the next flashcard
    const handleNextCard = () => {
        setCurrentCardIndex(prevIndex => prevIndex + 1);
    };

    return (
        <div className="card-grid">
            {flashcards.length > currentCardIndex && (
                <Flashcard
                    flashcard={flashcards[currentCardIndex]}
                    onAnswer={handleAnswer}
                    key={currentCardIndex}
                />
            )}
            <div className="score">Overall Score: {score}</div>
            {currentCardIndex < flashcards.length - 1 && (
                <button onClick={handleNextCard}>Next</button>
            )}
        </div>
    );
}