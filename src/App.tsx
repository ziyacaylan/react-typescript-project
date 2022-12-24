import "./App.css";

import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("React Öğren"), new Todo("Typescript Öğren")];
  return (
    <div>
      <h1>React Typescript Tutorial</h1>
      <Todos items={todos} />
    </div>
  );
}

export default App;
