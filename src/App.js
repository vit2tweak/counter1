import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Handle step input change with validation
  const handleStepChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setStep(Math.max(1, value));
  };

  // Handle counter increment
  const handleIncrement = () => {
    setCount(prevCount => prevCount + step);
  };

  // Handle counter decrement
  const handleDecrement = () => {
    setCount(prevCount => prevCount - step);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Counter</h1>
        
        <div className="counter-display">
          <span>{count}</span>
        </div>

        <div className="counter-controls">
          <button onClick={handleDecrement} className="counter-button">
            -
          </button>
          
          <div className="step-input-container">
            <label htmlFor="step">Step:</label>
            <input
              id="step"
              type="number"
              min="1"
              value={step}
              onChange={handleStepChange}
              className="step-input"
            />
          </div>

          <button onClick={handleIncrement} className="counter-button">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;