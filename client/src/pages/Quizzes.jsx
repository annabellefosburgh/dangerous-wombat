import { useState } from 'react';
import { Link } from 'react-router-dom';

const Quizzes = (props) => {
    return (
        <main className="quiz-home">
            <div className="quiz-header">
                <h2> Quizzes </h2>
            </div>
            <div clasName="description">
                <h4 className="desc-h4"> Choose a quiz to take! Each quiz will vary in difficulty and topic. </h4>
            </div>
            <div className="link-containers">
                <div className="indv-quiz1">
                    <p>
                        <Link to="/quiz1" className="linktext"> Quiz 1: Coding Basics </Link>
                    </p>
                </div>
                <div className="indv-quiz2">
                    <p >
                        <Link to="/quiz2" className="linktext"> Quiz 2: Debugging </Link>
                    </p>
                </div>
                <div className="indv-quiz3">
                    <p>
                        <Link to="/quiz3" className="linktext"> Quiz 3: Databases </Link>
                    </p>
                </div>
                <div className="indv-quiz4">
                    <p>
                        <Link to="/quiz4" className="linktext"> Quiz 4: Full Stack Misc </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Quizzes;