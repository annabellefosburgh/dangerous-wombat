import { useState } from 'react';
import { Link } from 'react-router-dom';

const quizzes = (props) => {
    return (
        <main className="max-w-lg mx-auto bg-parchment">
            <div className="header font-roboto text-vandyke">
                <h2 className="object-center"> Quizzes </h2>
            </div>
            <div clasName="description font-trirong text-vandyke">
                <h4 className="object-center"> Choose a quiz to take! Each quiz will contain increasingly difficult questions. </h4>
            </div>
            <div className="grid-cols-2 gap-10 row-span-2">
                <div className="w-auto h-auto text-vandyke font-work-sans bg-airblue">
                    <p>
                        <Link to="/quiz1"> Quiz 1: Beginner </Link>
                    </p>
                </div>
                <div className="w-auto h-auto text-vandyke font-work-sans bg-timber">
                    <p>
                        <Link to="/quiz2"> Quiz 2: Intermediate </Link>
                    </p>
                </div>
                <div className="w-auto h-auto text-vandyke font-work-sans bg-timber">
                    <p>
                        <Link to="/quiz3"> Quiz 3: Advanced </Link>
                    </p>
                </div>
                <div className="w-auto h-auto text-vandyke font-work-sans bg-hunter">
                    <p>
                        <Link to="/quiz2"> Quiz 4: Master </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}