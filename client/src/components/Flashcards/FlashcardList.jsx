import React from 'react'
import Flashcard from './Card';

// Takes a prop named 'flashcards'
export default function FlashcardList({ flashcards }) {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                // Map through each flashcard in the 'flashcards' array
                // Render the Flashcard component for each flashcard
                // Pass the 'flashcard' object as a prop, and set a 'key' for React's optimization
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}     
        </div>
    )
}