import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, TextField, Button, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Box>
      <form onSubmit={addTodo} style={{ marginBottom: '20px' }}>
        <TextField
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          variant="outlined"
          size="small"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 1 }}
          fullWidth
        >
          Add Todo
        </Button>
      </form>

      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => deleteTodo(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <ListItemText
              primary={todo.text}
              sx={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoList;