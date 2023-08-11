import React, { useState } from 'react';

const Quiz2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            question: '',
            type: 'radio',
            options: [],
            answer: ''
        },
        {
            question: '',
            type: 'radio',
            options: [],
            answer: ''
        },
        {
            question: '',
            type: 'radio',
            options: [],
            answer: ''
        },
        {
            question: '',
            type: 'radio',
            options: [],
            answer: ''
        },
        {
            question: '',
            type: 'radio',
            options: [],
            answer: ''
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

export default Quiz2;