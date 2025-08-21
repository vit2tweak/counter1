import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleStepChange = (event) => {
    const value = parseInt(event.target.value) || 1;
    setStep(value);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Count: {count}
      </Typography>
      
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          type="number"
          label="Step"
          value={step}
          onChange={handleStepChange}
          size="small"
        />
      </Box>
      
      <Box>
        <Button
          variant="contained"
          onClick={() => setCount(count + step)}
          sx={{ mr: 1 }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          onClick={() => setCount(count - step)}
        >
          Decrement
        </Button>
      </Box>
    </Box>
  );
}

export default Counter;