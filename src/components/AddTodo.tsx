import { ChangeEvent, FormEvent, useState } from "react";
import { AddTodoProps } from "../types";

export default function AddTodo({ handleAddNewTodo }: AddTodoProps) {
  const [title, setTitle] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      title,
    };
    handleAddNewTodo(newTodo);
    setTitle('');
  }

  return (
    <form className="mb-2" onSubmit={handleSubmit}>
      {/* form input */}
      <div>
        <label htmlFor="title">Todo Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={handleChange} required autoFocus />
      </div>
      <button className="border p-2" type="submit">Add</button>
    </form>
  )
}