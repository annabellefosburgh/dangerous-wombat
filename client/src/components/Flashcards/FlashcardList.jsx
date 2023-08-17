import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { UPDATE_SCORE } from '../../utils/mutations';
import Flashcard from './Card';

export default function FlashcardList({ flashcards }) {
    const [score, setScore] = useState(0);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showCompletionMessage, setShowCompletionMessage] = useState(false);

    const { loading, error, data } = useQuery(GET_ME);
    const userEmail = data?.me?.email;
    const previousScore = data?.me?.previousScore || 0;

    const [updateScore] = useMutation(UPDATE_SCORE);

    const handleAnswer = (isCorrect) => {
        setScore(prevScore => isCorrect ? prevScore + 1 : prevScore);
    };

    const handleNextCard = () => {
        setCurrentCardIndex(prevIndex => prevIndex + 1);
    };

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
            {flashcards.length > currentCardIndex && (
                <Flashcard
                    flashcard={flashcards[currentCardIndex]}
                    onAnswer={handleAnswer}
                    key={currentCardIndex}
                />
            )}
            <div className="score-container">
                <div className="score">Total Score: {score}</div>
                {data?.me && !showCompletionMessage && (
                    <div className="score">Previous Score: {previousScore}</div>
                )}
            </div>
            <div className="button-container">
                <button className="next-button" onClick={handleNextCard}>Next</button>
                {/* Add a button to trigger the completion message */}
                <button className="finish-button" onClick={() => { handleFinish(); setShowCompletionMessage(true); }}>Finish</button>
            </div>
            {/* Display the completion message if showCompletionMessage is true */}
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