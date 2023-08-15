import React, { useState } from 'react';

const Quiz4 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            question: 'What is the time complexity of merge sort?',
            type: 'radio',
            options: ['O(n*Log n)', 'O(3^N)', 'O(N²)', 'O(log N)'],
            answer: 'O(n*Log n)'
        },
        {
            question: 'What data structure underlies a Python list?',
            type: 'radio',
            options: ['Static arrays', 'Dynamic mutable arrays', 'Mulit-dimensional arrays', 'Associative arrays'],
            answer: ''
        },
        {
            question: 'Which of the followign is not a built in module in Node.js?',
            type: 'radio',
            options: ['fs', 'http', 'mysql', 'path'],
            answer: 'mysql'
        },
        {
            question: 'Which of the following statement is tru about PHP?',
            type: 'radio',
            options: ['PHP is a Server Side Scripting Language', 'PHP is a Client Side Scripting Language', 'PHP is a database', 'None of the above'],
            answer: 'PHP is a Server Side Scripting Language'
        },
        {
            question: 'What JSON framework is supported by iOS?',
            type: 'radio',
            options: ['BSON', 'JSONlite', 'SBJson', 'Heartstone JSON'],
            answer: 'SBJson'
        }
    ]

    const handleAnswerSelection = (questionIndex, selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = selectedAnswer;
        setAnswers(updatedAnswers);
    };

    const handleNextQuestion = () => {
        if (
            answers[currentQuestion] === questions[currentQuestion].answer ||
            JSON.stringify(answers[currentQuestion]) ===
            JSON.stringify(questions[currentQuestion].answer)
        ) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div>
            {showScore ? (
                <div>
                    <h2>Quiz Complete!</h2>
                    <h3>Your Score: {score}</h3>
                </div>
            ) : (
                <div>
                    <h2>Question {currentQuestion + 1}</h2>
                    <h3>{questions[currentQuestion].question}</h3>
                    {questions[currentQuestion].type === 'radio' && (
                        <ul>
                            {questions[currentQuestion].options.map((option, index) => (
                                <li key={index}>
                                    <input
                                        type="radio"
                                        name={`question${currentQuestion}`}
                                        value={option}
                                        onChange={() =>
                                            handleAnswerSelection(currentQuestion, option)
                                        }
                                    />
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                    <button onClick={handleNextQuestion}>Next Question</button>
                </div>
            )}
        </div>
    );
};

export default Quiz4;