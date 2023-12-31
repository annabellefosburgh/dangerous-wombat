import React, { useState } from 'react';

const Quiz1 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            question: 'Which of the following is an internet protocol?',
            type: 'radio',
            options: ['FTP', 'TCP/IP', 'EFT', 'EDI'],
            answer: 'TCP/IP'
        },
        {
            question: 'What tag is used for inserting a line break in an HTML page?',
            type: 'radio',
            options: ['<break>', '<ol>', '<br>', '<rb>'],
            answer: '<br>'
        },
        {
            question: 'Which of the following is an example of FTP?',
            type: 'radio',
            options: ['Personal', 'Web Server', 'Sql', 'Cute-ftp'],
            answer: 'Cute-ftp'
        },
        {
            question: 'Which attribute of the img tag defines the url of the image to be loaded?',
            type: 'radio',
            options: ['hspace', 'src', 'href', 'vspace'],
            answer: 'src'
        },
        {
            question: 'Which JavaScript event handler pertains to actions enabled by mouse clicks?',
            type: 'radio',
            options: ['onInput', 'onChange', 'onClick', 'onDrag'],
            answer: 'onClick'
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
                    <div className='score-results'>
                        <h2>Quiz Complete!</h2>
                        <h3>Your Score: {score}</h3>
                    </div>
                ) : (
                    <div className="question-container">
                        <h2 className="question">Question {currentQuestion + 1}</h2>
                        <h3 className="question">{questions[currentQuestion].question}</h3>
                        {questions[currentQuestion].type === 'radio' && (
                            <ul>
                                {questions[currentQuestion].options.map((option, index) => (
                                    <div key={index}>
                                        <input
                                            type="radio"
                                            name={`question${currentQuestion}`}
                                            value={option}
                                            onChange={() =>
                                                handleAnswerSelection(currentQuestion, option)
                                            }
                                        />
                                        <span className="checkable">{option}</span>
                                    </div>
                                ))}
                            </ul>
                        )}
                        <div className="btns">
                            <button className="back-btn" Link to="/quzzes">Go Back</button>
                            <button className="next-question" onClick={handleNextQuestion}>Next Question</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz1;