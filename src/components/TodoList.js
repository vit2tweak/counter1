import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', p: 2 }}>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={handleAddTodo}
          disabled={!newTodo.trim()}
        >
          Add
        </Button>
      </Box>
      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteTodo(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={todo.text}
              onClick={() => handleToggleTodo(index)}
              sx={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;