import Todo from "../models/todo";
import TodoItem from "./TodoTem";

const Todos: React.FC<{ children?: React.ReactNode; items: Todo[] }> = (
  props
) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
