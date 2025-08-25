import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';

function TabPanel({ children, value, index }) {
  return value === index && <Box sx={{ p: 3 }}>{children}</Box>;
}

function MainContent() {
  const [value, setValue] = React.useState(0);
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
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

function App() {
  return (
    <AuthProvider>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <MainContent />
      </Box>
    </AuthProvider>
  );
}

export default App;
