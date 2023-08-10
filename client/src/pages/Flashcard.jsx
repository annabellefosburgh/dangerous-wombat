import React from 'react'

function Flashcard() {
    return (
        <h1>Hello World</h1>
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