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
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <Button variant="contained" onClick={handleAdd}>Add</Button>
      </Box>
      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
