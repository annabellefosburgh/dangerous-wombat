import React, { useState } from 'react';
import "../node_modules/picnic/picnic.min.css";
import '../App.css'

const Quiz3 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            question: 'Which of the following is generally used for performing tasks like creating the structure of relations and deleting relations?',
            type: 'radio',
            options: ['Data manipulation language', 'Query', 'Relational  schema', 'Data definition language'],
            answer: 'Data definition language'
        },
        {
            question: 'The given Query can also be replaced with ___ (code snippet?)',
            type: 'radio',
            options: ['Select name,course_id from teaches,instructor where instructor_id=course_id;', 'Select name, course_id from instructor natural join teaches;', 
            'Select name, course_id from instructor;', 'Select course_id from instructor join teaches;'],
            answer: 'Select name, course_id from instructor natural join teaches;'
        },
        {
            question: 'Which one of the following given statements possibly contains the error?',
            type: 'radio',
            options: ['select * from emp where empid = 10003;', 'select empid from emp where empid = 10006;', 'select empid from emp;', 'select empid where empid = 1009 and Lastname = "GELLER";'],
            answer: 'select empid where empid = 1009 and Lastname = "GELLER";'
        },
        {
            question: 'What do you mean by one to many relationships?',
            type: 'radio',
            options: ['One class may have many teachers', 'One teacher can have many classes', 'Many classes may have many teachers', 'Many teachers may have many classes'],
            answer: 'One teacher can have many classes'
        },
        {
            question: 'Which one of the following refers to the copies of the same data (or information) occupying the memory space at multiple places.',
            type: 'radio',
            options: ['Data repository', 'Data inconsisitency', 'Data mining', 'Data redundancy'],
            answer: 'Data redundancy'
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
        <div className="quiz-container">
        <div className="show-score">
            {showScore ? (
                <div className="score-results">
                    <h2>Quiz Complete!</h2>
                    <h3>Your Score: {score}</h3>
                </div>
            ) : (
                <div className="question-container flex">
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
                    <button className="next-question" onClick={handleNextQuestion}>Next Question</button>
                </div>
            )}
        </div>
        </div>
    );
};

export default Quiz3;