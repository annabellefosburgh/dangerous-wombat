import React, { useState } from 'react';
import FlashcardList from '../components/Flashcards/FlashcardList';

function Flashcard() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
    return (
        <FlashcardList flashcards={flashcards}/>
    );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'Q: What does CORS mean and how does it work?',
        answer: 'A: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading of resources.',
    },
    {
        id: 2,
        question: 'Q: What is the difference between let, const, and var?',
        answer: 'A: Variables defined with const cannot be reassigned, var variables are function scoped, let variables allow for reassignment, and let and const variables are block-scoped.',
    },
    {
        id: 3,
        question: 'Q: How do you find the largest and smallest integer in an unsorted array?',
        answer: 'A: Traverse the array iteratively and keep track of the smallest and largest elements until the end of the array.',
    },
    {
        id: 4,
        question: 'Q: What is the main difference between prototypal and class inheritance?',
        answer: 'A: In JavaScript, the object system is based on a prototype, not the class. Objects are only a collection of value pairs and names. As far as the inheritance is concerned, there is only one construct in JavaScript: objects. Each object has a private property that comprises a link to other objects, known as the prototype of that object.',
    },
    {
        id: 5,
        question: 'Q: What is a closure?',
        answer: 'A: A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.',
    },
    {
        id: 6,
        question: 'Q: What is the difference between null and undefined?',
        answer: 'A: Undefined means the value of the variable is not defined. Null means empty or non-existent value which is used by programmers to indicate “no value.”',
    },
    {
        id: 7,
        question: 'A: What are the four major principles of object-oriented programming?',
        answer: 'Q: Abstraction, encapsulation, inheritance, and polymorphism”',
    },
    {
        id: 8,
        question: 'A: What is a join (in SQL)?',
        answer: 'Q: A join is used to combine rows from two or more tables based on a related column between them.',
    },
    {
        id: 9,
        question: 'A: What is event bubbling?',
        answer: 'Q: Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.',
    },
    {
        id: 10,
        question: 'A: How can you target an h3 and h2 element with the same styling?',
        answer: 'Q: Elements can be group targeted by separating the element with a comma',
    },
]

export default Flashcard;