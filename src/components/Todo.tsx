import { TodoProps } from "../types";

export default function Todo({ todo, handleDelete }: TodoProps) {
  const { id, title } = todo || {};
  const handleDeleteTodo = (id: number) => {
    handleDelete(id)
  }

  return (
    <article className="flex gap-2 justify-between items-center text-xl font-semibold bg-slate-200 mb-2 p-2">
      <div className="flex items-center gap-2">
        <p>{id}</p>
        <h2>{title}</h2>
      </div>
      <button className="border border-cyan-500 px-2 py-1" onClick={() => handleDeleteTodo(id)}>Delete</button>
    </article>
  )
}