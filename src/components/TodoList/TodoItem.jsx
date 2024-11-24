import React from 'react';
import css from './TodoList.module.css';
const TodoItem = ({ id, completed, task, deadline, handleDeleteTodo }) => {
  return (
      <li className={css.item}>
      <input type="checkbox" defaultChecked={completed} />
      <span>{task}</span>
      <span className={css.deadline}>{deadline}</span>
      <button className={css.delete} onClick={() => handleDeleteTodo(id)}>delete</button>
    </li>
  );
};

export default TodoItem;
