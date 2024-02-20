import React from 'react'

function TodoList({allTasks,handleToggleComplete,handleEdit,removeTodo}:any) {
  return (
    <div>
      <ul>
        {allTasks.map((todo:any) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' , marginRight: "10px"}}>
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
  )
}

export default TodoList