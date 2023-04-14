export type TodoType = {
  id: number;
  title: string;
}

export type TodoProps = {
  todo: TodoType;
  handleDelete: Function;
}

export type TodosType = {
  todos: TodoType[];
  handleDelete: Function;
}

export type AddTodoProps = {
  handleAddNewTodo: Function;
}