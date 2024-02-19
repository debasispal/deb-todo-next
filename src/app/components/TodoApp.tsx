'use client'
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let idCounter = 1;

const TodoApp: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim() === '') return;
    if (editId !== null) {
      const updatedTodos = todos.map(todo =>
        todo.id === editId ? { ...todo, text: text.trim() } : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      const newTodo: Todo = { id: idCounter++, text: text.trim(), completed: false };
      setTodos([...todos, newTodo]);
    }
    setText('');
  };

  const handleEdit = (id: number) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setText(todoToEdit.text);
      setEditId(id);
    }
  };

  const handleToggleComplete = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} placeholder="Enter todo" />
        <button type="submit" className='btn1'>{editId !== null ? 'Update Todo' : 'Add Todo'}</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleToggleComplete(todo.id)} className='btn1' >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleEdit(todo.id)} className='btn1' >Edit</button>
            <button onClick={() => removeTodo(todo.id)} className='btn1' >Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
