import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import './App.css';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ width: '100%' }}>
      {value === index && children}
    </div>
  );
}

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box className="App">
      <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'white', borderRadius: 2, boxShadow: 2 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Counter" />
          <Tab label="Todo List" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <Counter />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <TodoList />
        </TabPanel>
      </Box>
    </Box>
  );
}

export default App;