import { useState } from 'react';
import './App.css'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { TodoType } from './types';

const todosData = [
  {
    id: 1,
    title: 'todo one',
  },
  {
    id: 2,
    title: 'todo two',
  },
  {
    id: 3,
    title: 'todo three',
  },
  {
    id: 4,
    title: 'todo four',
  },
  {
    id: 5,
    title: 'todo five',
  },
];

function App() {

  const [todos, setTodos] = useState(todosData);

  const handleDelete = (id: number) => {
    const filteredData = todos.filter((todo) => todo.id !== id);
    setTodos(filteredData);
  };

  const handleAddNewTodo = (newTodo: TodoType) => {
    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <div className="p-2">
      <AddTodo handleAddNewTodo={handleAddNewTodo} />
      <Todos todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
