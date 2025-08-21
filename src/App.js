import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { Container, Tabs, Tab, Box } from '@mui/material';
import './App.css';

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <AuthProvider>
      <Router>
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
                        <Tab label="Counter" />
                        <Tab label="Todo List" />
                      </Tabs>
                    </Box>
                    {value === 0 && <Counter />}
                    {value === 1 && <TodoList />}
                  </Box>
                </ProtectedRoute>
              }
            />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;