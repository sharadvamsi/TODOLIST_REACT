import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoItem = (props) => {
  const { id, todoItem, isChecked } = props.item;
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoItem);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleBlur = () => {
    props.editTodo(id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-item">
      <input
        type="checkbox"
        id={`checkbox${id}`}
        checked={isChecked}
        onChange={() => props.markTodo(id)}
      />
      <div className="todo-details">
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <label
            htmlFor={`checkbox${id}`}
            className={isChecked ? "item-checked" : null}
          >
            {todoItem}
          </label>
        )}
        <div className="icons-container">
          <MdEdit onClick={handleEdit} style={{cursor:'pointer'}}/>
          <MdDelete onClick={() => props.deleteTodo(id)} style={{cursor:'pointer'}} />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
