import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Create a JavaScript project', completed: true },
    { id: 2, text: 'Upload it online', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
      console.log("addTask");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app-background">
      <div className="card">
        <h1>To-Do List 📝</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add your task"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? 'completed' : ''}>
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)}>×</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;