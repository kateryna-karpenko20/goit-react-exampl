// Імпортуємо React для використання JSX та стилі з CSS файлу
import React from 'react'; // Необхідно для роботи з React
import css from './TodoList.module.css'; // Імпортуємо стилі з CSS-модулю для цього компонента

// Оголошуємо компонент TodoItem, який приймає пропси для кожної задачі
const TodoItem = ({ id, completed, task, deadline, handleDeleteTodo }) => {
  // Пропси:
  // id - унікальний ідентифікатор задачі
  // completed - чи виконана задача (true/false)
  // task - опис задачі
  // deadline - строк виконання задачі
  // handleDeleteTodo - функція для видалення задачі

  return (
    // Використовуємо <li> для кожної задачі в списку, клас css.item додається для стилізації
    <li className={css.item}>
      
      {/* Поле для відмітки задачі як виконаної. Використовуємо defaultChecked, щоб встановити статус за замовчуванням */}
      <input type="checkbox" defaultChecked={completed} />
      
      {/* Відображаємо текст задачі */}
      <span>{task}</span>
      
      {/* Відображаємо строку виконання задачі, додаємо клас для стилізації */}
      <span className={css.deadline}>{deadline}</span>
      
      {/* Кнопка для видалення задачі. Викликаємо функцію handleDeleteTodo при натисканні на кнопку */}
      <button className={css.delete} onClick={() => handleDeleteTodo(id)}>
        delete
      </button>
    </li>
  );
};

// Експортуємо компонент TodoItem для використання в інших частинах додатку
export default TodoItem;
