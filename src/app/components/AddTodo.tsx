'use client'
import AddTask from '@/pages/AddTask';
import TodoList from '@/pages/TodoList';
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let idCounter = 1;

const AddTodo: React.FC = () => {
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
      <form onSubmit={handleSubmit}>
        <div className='main-div'>
        <input type="text" value={text} onChange={handleChange} placeholder="Enter todo" />
        <AddTask editID={editId}/>
        </div>
      </form>
      <TodoList allTasks={todos} handleToggleComplete={handleToggleComplete} handleEdit={handleEdit} removeTodo={removeTodo} />
    </div>
  );
};

export default AddTodo;