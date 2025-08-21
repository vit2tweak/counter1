import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import TabPanel from './components/TabPanel';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Counter" />
          <Tab label="Todo List" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Counter />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TodoList />
      </TabPanel>
    </Box>
  );
}

export default App;