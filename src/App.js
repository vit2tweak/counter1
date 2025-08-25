import React from 'react';
import { Box, Tabs, Tab, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Login from './components/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './App.css';

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const MainContent = () => {
  const [value, setValue] = React.useState(0);
  const { logout, user } = useAuth();

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome, {user?.username}
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
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
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <MainContent /> : <Login />;
};

export default App;
