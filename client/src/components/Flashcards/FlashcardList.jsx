import React, { useState } from 'react';
import Flashcard from './Card';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { UPDATE_SCORE } from '../../utils/mutations';

export default function FlashcardList({ flashcards }) {
    // State to track the user's current score
    const [score, setScore] = useState(0);

    // State to track the index of the currently displayed flashcard
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    // Fetch user data including email and previousScore using useQuery
    const { loading, error, data } = useQuery(GET_ME);
    const userEmail = data?.me?.email;

    // Get the user's previous score from the fetched data or default to 0
    const previousScore = data?.me?.previousScore || 0;

    // Set up the mutation to update previousScore
    const [updateScore] = useMutation(UPDATE_SCORE);

    // State to track whether the user has finished all flashcards
    const [finished, setFinished] = useState(false);
    
    // New state variable to manage the displayed previous score
    const [displayedPreviousScore, setDisplayedPreviousScore] = useState(previousScore);

    // Function to handle the user's answer to a flashcard
    const handleAnswer = (isCorrect) => {
        setScore(prevScore => isCorrect ? prevScore + 1 : prevScore);
    };

    // Function to move to the next flashcard
    const handleNextCard = () => {
        setCurrentCardIndex(prevIndex => prevIndex + 1);
    };

    // Function to handle when the user clicks "Finish"
    const handleFinish = async () => {
        try {
            // Update the user's previousScore using the mutation
            await updateScore({
                variables: { email: userEmail, previousScore: score },
            });
            // Update the displayed previous score with the current score
            setDisplayedPreviousScore(score);
            setFinished(true); // Mark the user as finished
        } catch (error) {
            console.error("Error updating previous score:", error.message);
        }
    };

    // Component rendering
    return (
        <div className="card-grid">
            {/* Display the current flashcard if index is within range */}
            {flashcards.length > currentCardIndex && (
                <Flashcard
                    flashcard={flashcards[currentCardIndex]}
                    onAnswer={handleAnswer}
                    key={currentCardIndex}
                />
            )}
            <div className="score-container">
                <div className="score">Current Score: {score}</div>
                {/* Display the user's previous score */}
                <div className="previous-score">Previous Score: {displayedPreviousScore}</div>
            </div>
            <div className="button-container">
                {/* Display the "Next" button if not finished */}
                {!finished && (
                    <button className="next-button" onClick={handleNextCard}>Next</button>
                )}
                {/* Display the "Finish" button */}
                <button className="finish-button" onClick={handleFinish}>Finish</button>
            </div>
        </div>
    );
}