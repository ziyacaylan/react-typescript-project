import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ children?: React.ReactNode; items: Todo[] }> = (
  props
) => {
  return (
    <div>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
