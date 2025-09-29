import React from 'react';
import { useCounter } from '../hooks/useCounter';
import './Counter.css';

const Counter: React.FC = () => {
  const { count, increment, decrement, reset, isLoading, error } = useCounter();

  if (isLoading) {
    return (
      <div className="counter-container">
        <div className="counter-loading">Loading counter...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="counter-container">
        <div className="counter-error">
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()} className="counter-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="counter-container">
      <div className="counter-card">
        <div className="counter-display">
          <span className="counter-value" data-testid="counter-value">
            {count}
          </span>
        </div>
        
        <div className="counter-controls">
          <button
            onClick={decrement}
            className="counter-button counter-button-decrement"
            aria-label="Decrease counter"
            data-testid="decrement-button"
          >
            <span>−</span>
          </button>
          
          <button
            onClick={reset}
            className="counter-button counter-button-reset"
            aria-label="Reset counter"
            data-testid="reset-button"
          >
            Reset
          </button>
          
          <button
            onClick={increment}
            className="counter-button counter-button-increment"
            aria-label="Increase counter"
            data-testid="increment-button"
          >
            <span>+</span>
          </button>
        </div>
        
        <div className="counter-info">
          <p>Current value: <strong>{count}</strong></p>
          <p className="counter-hint">
            Use the buttons above to increment, decrement, or reset the counter.
            Your progress is automatically saved!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;