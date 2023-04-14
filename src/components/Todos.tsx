import { TodoType, TodosType } from "../types";
import Todo from "./Todo";

export default function Todos({ todos, handleDelete }: TodosType) {
  return (
    <div>
      {
        todos.map((todo) => <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />)
      }
    </div>
  )
}