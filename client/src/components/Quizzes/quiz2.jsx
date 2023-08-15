import React, { useState } from 'react';
import "../node_modules/picnic/picnic.min.css";
import '../App.css'

const Quiz2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            question: 'What is it called when we make a mistake in the script?',
            type: 'radio',
            options: ['Error', 'Bug', 'Mistake', 'Debug'],
            answer: 'Bug'
        },
        {
            question: 'Which is the following definition for debugging?',
            type: 'radio',
            options: ['Finding bugs', 'Fixing bugs', 'Both Finding and Fixing bugs', 'Clearing bugs'],
            answer: 'Both Finding and Fixing bugs'
        },
        {
            question: 'Where can you view your errors in most web browser platforms?',
            type: 'radio',
            options: ['Task Bar', 'Bookmarks Bar', 'Developer Tools', 'Browser settings'],
            answer: 'Developer tools'
        },
        {
            question: 'What kund of error notifications arew shown in the console window?',
            type: 'radio',
            options: ['Syntax errors', 'Runtime errors', 'Compilation errors', 'Both Syntax & Runtime errors'],
            answer: 'Both Syntax & Runtime errors'
        },
        {
            question: 'What is the purpose of a JavaScript debugger?',
            type: 'radio',
            options: ['Correction of errors', 'Placing script execution under control', 'Pinpointing exact point of error', 'All of the above'],
            answer: 'Placing script execution under control'
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