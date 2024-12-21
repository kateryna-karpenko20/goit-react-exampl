// Імпортуємо React для використання JSX та хук useEffect і useState для керування станом.
// Імпортуємо CSS модуль для стилізації компонентів.
import React, { useEffect, useState } from 'react';
import css from './TodoList.module.css'; // Стилі для компонента TodoList
import TodoItems from '../../assets/TodoItems.json'; // Зразок даних (можна використовувати як початкові значення)
import TodoItem from './TodoItem'; // Імпортуємо компонент для відображення кожного елементу списку

// Основний компонент TodoList
export const TodoList = () => {
  
  // Використовуємо хук useState для створення стану для списку задач (todos). 
  // При ініціалізації беремо з localStorage список задач, якщо він є, або порожній масив [] за замовчуванням.
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []); 

  // Стан для нового завдання. Спочатку порожній рядок.
  const [newTodo, setNewTodo] = useState('');

  // Стан для дедлайну. Спочатку порожній рядок.
  const [deadline, setDeadline] = useState('');

  // Функція для додавання нового завдання в список задач
  const handleAddTodo = () => {
    // Перевірка, чи не введено порожнє завдання
    if (newTodo.trim() === '') return; 

    // Створюємо нове завдання:
    // id: використовуємо поточний час для унікальності
    // task: текст нового завдання
    // completed: за замовчуванням false (не виконано)
    // deadline: якщо є, зберігається дата дедлайну, або null
    const newTodoItem = {
      id: Date.now(),
      task: newTodo,
      completed: false,
      deadline: deadline || null,
    };

    // Оновлюємо стан todos, додаючи нове завдання в кінець масиву
    setTodos([...todos, newTodoItem]);

    // Очищаємо поля введення
    setNewTodo('');
    setDeadline('');
  };

  // Функція для видалення завдання
  const handleDeleteTodo = (id) => {
    // Оновлюємо список завдань, фільтруючи завдання з відповідним id
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // Використовуємо хук useEffect, щоб зберігати список завдань в localStorage 
  // кожного разу, коли змінюється стан todos.
  // JSON.stringify() перетворює масив в рядок для збереження в localStorage.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Масив залежностей [todos] означає, що ефект буде виконуватись, коли змінюється todos.

  return (
    // Основний контейнер для компоненту TodoList
    <div className={css.todoList}>
      
      {/* Форма для введення нового завдання і дедлайну */}
      <div>
        <input
          className={css.input} // Стиль для поля введення завдання
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)} // Зміна значення при введенні тексту
          placeholder="Enter a new task"
        />
        
        <input
          className={css.input} // Стиль для поля введення дедлайну
          type="date"
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)} // Зміна значення при виборі дедлайну
          placeholder="Enter a deadline"
        />
        
        <button className={css.button} onClick={handleAddTodo}>
          Add
        </button>
      </div>
      
      {/* Список всіх задач */}
      <ul className={css.list}>
        {todos.map((item) => (
          // Для кожного завдання рендеримо компонент TodoItem
          // передаючи всі пропси (item) та функцію видалення.
          <TodoItem
            key={item.id}
            {...item} // Розгортаємо пропси завдання (task, completed, id, deadline)
            className={css.item} // Стилізуємо кожен елемент
            handleDeleteTodo={handleDeleteTodo} // Передаємо функцію видалення
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
