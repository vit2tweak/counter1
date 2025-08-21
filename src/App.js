import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import './App.css';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ padding: '20px' }}>
      {value === index && children}
    </div>
  );
}

function App() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800, margin: '0 auto', padding: '20px' }}>
      <Tabs value={tabValue} onChange={handleChange} centered>
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
  );
}

export default App;