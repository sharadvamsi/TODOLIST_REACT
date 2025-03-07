import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <>
      <h2>TodoList</h2>
      <ul className="list-container">
        {props.todoItems.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            deleteTodo={props.deleteTodo}
            markTodo={props.markTodo}
            editTodo={props.editTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
