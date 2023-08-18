import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { UPDATE_SCORE } from '../../utils/mutations';
import Flashcard from './Card';

// Main FlashcardList component, takes in 'flashcards' as a prop
export default function FlashcardList({ flashcards }) {
    const [score, setScore] = useState(0); // State to track the user's score
    const [currentCardIndex, setCurrentCardIndex] = useState(0); // State to track the current card index
    const [showCompletionMessage, setShowCompletionMessage] = useState(false); // State to show/hide the completion message

    // Query the current user's email and previous score
    const { loading, error, data } = useQuery(GET_ME);
    const userEmail = data?.me?.email;
    const previousScore = data?.me?.previousScore || 0;

    // Mutation to update the user's score
    const [updateScore] = useMutation(UPDATE_SCORE);

    // Function to handle answering a flashcard
    const handleAnswer = (isCorrect) => {
        setScore(prevScore => isCorrect ? prevScore + 1 : prevScore);
    };

    // Function to handle moving to the next card
    const handleNextCard = () => {
        setCurrentCardIndex(prevIndex => prevIndex + 1);
    };

    // Function to handle finishing the flashcards and updating the score
    const handleFinish = async () => {
        try {
            await updateScore({
                variables: { email: userEmail, previousScore: score },
            });
            data.me.previousScore = score;
            setShowCompletionMessage(true);
        } catch (error) {
            console.error("Error updating previous score:", error.message);
        }
    };

    return (
        <div className="card-grid">
            {/* Render the current flashcard if there are more to go through */}
            {flashcards.length > currentCardIndex && (
                <Flashcard
                    flashcard={flashcards[currentCardIndex]}
                    onAnswer={handleAnswer}
                    key={currentCardIndex}
                />
            )}
            {/* Display the current score and previous score if available */}
            <div className="score-container">
                <div className="score">Total Score: {score}</div>
                {data?.me && !showCompletionMessage && (
                    <div className="score">Previous Score: {previousScore}</div>
                )}
            </div>
            {/* Buttons for navigating to the next flashcard and finishing */}
            <div className="button-container">
                <button className="next-button" onClick={handleNextCard}>Next</button>
                <button className="finish-button" onClick={() => { handleFinish(); setShowCompletionMessage(true); }}>Finish</button>
            </div>
            {/* Display the completion message if 'showCompletionMessage' is true */}
            {showCompletionMessage && (
                <div className="finish-message">
                    <p>Congratulations on completing the flashcards!</p>
                    <p>Your previous score of {previousScore} has been updated to {score}.</p>
                    <p><Link to="/">Go to Home</Link></p>
                </div>
            )}
        </div>
    );
}