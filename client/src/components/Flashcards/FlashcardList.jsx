import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Flashcard from './Card';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { UPDATE_SCORE } from '../../utils/mutations';

export default function FlashcardList({ flashcards }) {
    // State for managing the score, current card index, completion status, and score update status
    const [score, setScore] = useState(0);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [scoreUpdated, setScoreUpdated] = useState(false);

    // Fetching the current user's data using Apollo Client
    const { loading, error, data } = useQuery(GET_ME);
    const userEmail = data?.me?.email;
    const previousScore = data?.me?.previousScore || 0;

    // Mutation for updating the score in the database
    const [updateScore] = useMutation(UPDATE_SCORE);

    // Function to handle answering the flashcard
    const handleAnswer = (isCorrect) => {
        // Increment the score if the answer is correct
        setScore(prevScore => isCorrect ? prevScore + 1 : prevScore);
    };

    // Function to handle moving to the next flashcard
    const handleNextCard = () => {
        // Increment the current card index
        setCurrentCardIndex(prevIndex => prevIndex + 1);
    };

    // Function to handle finishing the flashcards
    const handleFinish = async () => {
        try {
            await updateScore({
                // Provide variables for the mutation
                variables: { email: userEmail, previousScore: score },
            });
            setScoreUpdated(true); // Mark the score as updated
            setFinished(true); // Mark the flashcards as finished
        } catch (error) {
            // Log an error if the score update fails
            console.error("Error updating previous score:", error.message);
        }
    };

    return (
        <div className="card-grid">
            {/* Render the flashcard */}
            {flashcards.length > currentCardIndex && (
                <Flashcard
                    flashcard={flashcards[currentCardIndex]}
                    onAnswer={handleAnswer}
                    key={currentCardIndex}
                />
            )}
            {/* Render the current score */}
            <div className="score-container">
                {data?.me && !finished ? (
                    <div className="score">Score: {scoreUpdated ? score : previousScore}</div>
                ) : (
                    <div className="score">Score: {score}</div>
                )}
            </div>
            {/* Render buttons and messages */}
            <div className="button-container">
            {/* Render the "Next" button if not finished */}
            {!finished && (
                <button className="next-button" onClick={handleNextCard}>Next</button>
            )}
            {/* Render the "Finish" button if not finished */}
            {!finished && (
                <div className="button-spacing">
                    <button className="finish-button" onClick={handleFinish}>Finish</button>
                </div>
            )}
            {/* Render the completion message below the buttons if finished */}
            {finished && (
                <div className="finish-message">
                    <p>Congratulations on completing the flashcards!</p>
                    {/* Use the Link component to navigate to the home page */}
                    <p><Link to="/">Go to Home</Link></p>
                </div>
            )}
        </div>
    </div>
    );
}       