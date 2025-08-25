import React, { useState, useEffect } from 'react';
import { List, ListItem, TextField, Button, Checkbox, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

/**
 * TodoList Component
 * Manages a list of todo items with CRUD operations
 * 
 * @component
 * @returns {JSX.Element} Rendered TodoList component
 */
const TodoList = () => {
  // State management for todos and new todo input
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  /**
   * Load todos from localStorage on component mount
   */
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  /**
   * Save todos to localStorage whenever they change
   */
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  /**
   * Adds a new todo item
   * @param {Event} e - Form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newTodoItem = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false
    };

    setTodos(prevTodos => [...prevTodos, newTodoItem]);
    setNewTodo('');
  };

  /**
   * Toggles todo completion status
   * @param {number} id - Todo item ID
   */
  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * Deletes a todo item
   * @param {number} id - Todo item ID
   */
  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <Box sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">
          Add Todo
        </Button>
      </form>

      <List>
        {todos.map(todo => (
          <ListItem key={todo.id}>
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <Box sx={{ flexGrow: 1, textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </Box>
            <IconButton onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
