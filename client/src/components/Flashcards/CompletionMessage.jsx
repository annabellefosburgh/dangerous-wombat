import React from 'react';
import { Link } from 'react-router-dom';

// Define the CompletionMessage component, which takes in 'previousScore' and 'score' as props
function CompletionMessage({ previousScore, score }) {
    return (
        // Container for the completion message
        <div className="finish-message">
            <p>Congratulations on completing the flashcards!</p>
            <p>Your previous score of {previousScore} has been updated to {score}.</p>
            {/* Use the Link component to navigate to the home page */}
            <p><Link to="/">Go to Home</Link></p>
        </div>
    );
}

export default CompletionMessage;