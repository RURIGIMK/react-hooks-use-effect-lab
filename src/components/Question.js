import React, { useState, useEffect } from 'react';

function Question({ onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }

    // Cleanup function
    return () => clearTimeout(timerId);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <p>Time Remaining: {timeRemaining} seconds</p>
    </div>
  );
}

export default Question;
