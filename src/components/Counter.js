import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

/**
 * Counter Component
 * Manages a numeric counter with customizable step increment/decrement
 * 
 * @component
 * @returns {JSX.Element} Rendered Counter component
 */
const Counter = () => {
  // State management for counter value and step amount
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  /**
   * Validates and updates the step value
   * @param {Event} e - Change event from step input
   */
  const handleStepChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setStep(Math.max(1, value)); // Ensure step is at least 1
  };

  /**
   * Increments the counter by current step value
   */
  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  /**
   * Decrements the counter by current step value
   */
  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Counter: {count}
      </Typography>
      
      <TextField
        label="Step Amount"
        type="number"
        value={step}
        onChange={handleStepChange}
        sx={{ mb: 2 }}
        inputProps={{ min: 1 }}
      />
      
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" onClick={decrement}>
          Decrease
        </Button>
        <Button variant="contained" onClick={increment}>
          Increase
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
