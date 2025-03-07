import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const getTodoList = localStorage.getItem("TodoList");
    if (getTodoList) {
      setTodoList(JSON.parse(getTodoList));
    }
  }, []);

  const handleInputTodo = (e) => {
    setTodoItem(e.target.value);
  };

  const handleDeleteTodo = (id) => {
    const updated = todoList.filter((item) => item.id !== id);
    setTodoList(updated);
  };

  const handleAddTodo = () => {
    const id =
      todoList.length > 0
        ? todoList[todoList.length - 1].id + 1
        : todoList.length + 1;
    setTodoList([...todoList, { id, todoItem, isChecked: false }]);
    setTodoItem("");
  };

  const handleIsChecked = (id) => {
    const updatedItems = todoList.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setTodoList(updatedItems);
  };

  const handleSaveTodo = () => {
    localStorage.setItem("TodoList", JSON.stringify(todoList));
  };

  const handleEditTodo = (id, newText) => {
    const updatedItems = todoList.map((item) =>
      item.id === id ? { ...item, todoItem: newText } : item
    );
    setTodoList(updatedItems);
  };

  return (
    <div className="main-container">
      <Header />

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter the task"
          name="todo-input"
          value={todoItem}
          onChange={handleInputTodo}
        />
        <button className="add-btn" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      {todoList.length > 0 ? (
        <TodoList
          todoItems={todoList}
          deleteTodo={handleDeleteTodo}
          markTodo={handleIsChecked}
          editTodo={handleEditTodo}
        />
      ) : (
        "Add TodoItems to display"
      )}

      {todoList.length > 0 && (
        <button className="save-btn" onClick={handleSaveTodo}>
          Save
        </button>
      )}
    </div>
  );
};

export default App;
