import React, { useState } from 'react';
import FlashcardList from './FlashcardList';

function Flashcard() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
    return (
        <FlashcardList flashcards={flashcards}/>
    );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'Question 1?',
        answer: 'Answer 1',
        options: [
            'Answer 1',
            'Answer 2',
            'Answer 3',
            'Answer 4'
        ]
    },
    {
        id: 2,
        question: 'Question 2?',
        answer: 'Answer 2',
        options: [
            'Answer 1',
            'Answer 2',
            'Answer 3',
            'Answer 4'
        ]
    },
    {
        id: 3,
        question: 'Question 3?',
        answer: 'Answer 3',
        options: [
            'Answer 1',
            'Answer 2',
            'Answer 3',
            'Answer 4'
        ]
    }
]

export default Flashcard;