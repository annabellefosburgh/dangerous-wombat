import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../node_modules/picnic/picnic.min.css";
import '../App.css'

const Quizzes = (props) => {
    return (
        <main className="quiz-home flex">
            <div className="quiz-header">
                <h2> Quizzes </h2>
            </div>
            <div clasName="description">
                <h4 className="desc-h4"> Choose a quiz to take! Each quiz will vary in difficulty and topic. </h4>
            </div>
            <div className="link-containers flex two">
                <div className="indv-quiz1">
                    <p>
                        <Link to="../components/Quizzes/quiz1"> Quiz 1: Coding Basics </Link>
                    </p>
                </div>
                <div className="indv-quiz2">
                    <p>
                        <Link to="../components/Quizzes/quiz2"> Quiz 2: Debugging </Link>
                    </p>
                </div>
                <div className="indv-quiz3">
                    <p>
                        <Link to="../components/Quizzes/quiz3"> Quiz 3: Databases </Link>
                    </p>
                </div>
                <div className="indv-quiz4">
                    <p>
                        <Link to="../components/Quizzes/quiz4"> Quiz 4: Full Stack Misc </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Quizzes;