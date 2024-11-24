import React, { useState } from 'react';
import css from './TodoList.module.css';
import TodoItems from '../../assets/TodoItems.json';
import TodoItem from './TodoItem';

export const TodoList = () => {
    const [todos, setTodos] = useState(TodoItems); // Стан для списку завдань
    const [newTodo, setNewTodo] = useState(''); // Стан для нового завдання
    const [deadline, setDeadline] = useState(''); // Стан для дедлайну

    // Функція для додавання нового завдання
    const handleAddTodo = () => {
        if (newTodo.trim() === '') return; // Перевірка на порожній ввід для назви завдання

        const newTodoItem = {
            id: Date.now(), // Генерація унікального ID
            task: newTodo,
            completed: false,
            deadline: deadline || null, // Якщо дедлайн порожній, зберігаємо null
        };

        setTodos([...todos, newTodoItem]); // Додавання нового завдання до списку
        setNewTodo(''); // Очищення поля введення
        setDeadline(''); // Очищення поля дедлайну
    };

    // Функція для видалення завдання
    const handleDeleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className={css.todoList}>
            <div>
                <i nput
                    className={css.input}
                    type="text"
                    value={newTodo}
                    onChange={(event) => setNewTodo(event.target.value)}
                    placeholder="Enter a new task"
                />
                <input
                    className={css.input}
                    type="date"
                    value={deadline}
                    onChange={(event) => setDeadline(event.target.value)}
                    placeholder="Enter a deadline"
                />
                <button className={css.button} onClick={handleAddTodo}>
                    Add
                </button>
            </div>
            <ul className={css.list}>
                {todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        {...item}
                        className={css.item}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
};
