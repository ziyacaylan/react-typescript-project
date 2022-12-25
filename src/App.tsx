import "./App.css";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
