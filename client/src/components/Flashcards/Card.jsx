import React, { useState, useEffect, useRef } from 'react';

export default function Flashcard({ flashcard }) {
    // State to manage the flipping of the flashcard
    const [flip, setFlip] = useState(false);
    const [heigh, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    // Function to set the maximum height of the card based on content
    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }
    
    // Run setMaxHeight when question, answer, or options change
    useEffect(setMaxHeight, [flashcard.question, flashcard.answer,
    flashcard.options])

    // Add a resize event listener to update card height on window resize
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxheight)
    }, [])
 
    return (
        <div
            // Add the 'flip' class when the card is flipped
            className={`card ${flip ? 'flip' : ''}`}
            style={{ height: height }}
            // Toggle the flip state when the card is clicked
            onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                {/* Display the question */}
                {flashcard.question}
                <div className="flashcard-options">
                    {/* Map over the options and render each one */}
                    {flashcard.options.map((option, index) => (
                        <div key={index} className="flashcard-option">
                            {option}
                        </div>
                    ))}
                </div>
            </div>
            {/* Display the answer on the back of the card */}
            <div className="back" ref={backEl}>{flashcard.answer}</div>
        </div>
    );
}