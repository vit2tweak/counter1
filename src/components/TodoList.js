import React, { useState, useEffect } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Button,
  Checkbox
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
    setEditId(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <TextField
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleAdd}
          sx={{ ml: 1 }}
        >
          Add
        </Button>
      </Box>
      <List>
        {todos.map(todo => (
          <ListItem key={todo.id}>
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            {editId === todo.id ? (
              <TextField
                fullWidth
                defaultValue={todo.text}
                onBlur={(e) => handleEdit(todo.id, e.target.value)}
                autoFocus
              />
            ) : (
              <ListItemText
                primary={todo.text}
                sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              />
            )}
            <ListItemSecondaryAction>
              <IconButton onClick={() => setEditId(todo.id)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleDelete(todo.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoList;