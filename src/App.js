import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { Tabs, Tab, Box, AppBar } from '@mui/material';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Box sx={{ width: '100%' }}>
                  <AppBar position="static">
                    <Tabs value={value} onChange={handleChange}>
                      <Tab label="Counter" />
                      <Tab label="Todo List" />
                    </Tabs>
                  </AppBar>
                  <Box sx={{ p: 3 }}>
                    {value === 0 && <Counter />}
                    {value === 1 && <TodoList />}
                  </Box>
                </Box>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;