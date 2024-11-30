import React, { useEffect, useState } from 'react';
import css from './TodoList.module.css';
import TodoItems from '../../assets/TodoItems.json';
import TodoItem from './TodoItem';

// export const TodoList = () => {
//     const [todos, setTodos] = useState(TodoItems); // Стан для списку завдань
//     const [newTodo, setNewTodo] = useState(''); // Стан для нового завдання
//     const [deadline, setDeadline] = useState(''); // Стан для дедлайну

//     // Функція для додавання нового завдання
//     const handleAddTodo = () => {
//         if (newTodo.trim() === '') return; // Перевірка на порожній ввід для назви завдання

//         const newTodoItem = {
//             id: Date.now(), // Генерація унікального ID
//             task: newTodo,
//             completed: false,
//             deadline: deadline || null, // Якщо дедлайн порожній, зберігаємо null
//         };

//         setTodos([...todos, newTodoItem]); // Додавання нового завдання до списку
//         setNewTodo(''); // Очищення поля введення
//         setDeadline(''); // Очищення поля дедлайну
//     };

//     // Функція для видалення завдання
//     const handleDeleteTodo = (id) => {
//         setTodos((prev) => prev.filter((item) => item.id !== id));
//     };

//     return (
//         <div className={css.todoList}>
//             <div>
//                 <input
//                     className={css.input}
//                     type="text"
//                     value={newTodo}
//                     onChange={(event) => setNewTodo(event.target.value)}
//                     placeholder="Enter a new task"
//                 />
//                 <input
//                     className={css.input}
//                     type="date"
//                     value={deadline}
//                     onChange={(event) => setDeadline(event.target.value)}
//                     placeholder="Enter a deadline"
//                 />
//                 <button className={css.button} onClick={handleAddTodo}>
//                     Add
//                 </button>
//             </div>
//             <ul className={css.list}>
//                 {todos.map((item) => (
//                     <TodoItem
//                         key={item.id}
//                         {...item}
//                         className={css.item}
//                         handleDeleteTodo={handleDeleteTodo}
//                     />
//                 ))}
//             </ul>
//         </div>
//     );
// };




export const TodoList = () => {


//     Використовуємо хук useState для збереження стану todos (список завдань). Початкове значення цього стану отримується з localStorage (якщо там є збережений список завдань) через localStorage.getItem('todos').
// JSON.parse() розбирає збережену строку JSON в JavaScript-об'єкт.
// Якщо в localStorage немає запису з ключем 'todos', ми використовуємо порожній масив [] як значення за замовчуванням.
    const [todos, setTodos] = useState(()=> JSON.parse(localStorage.getItem('todos')) || []);   // Стан для списку завдань
    
    
    // Створюємо стан для нового завдання (newTodo). Початкове значення цього стану — порожній рядок, що означає, що поле для введення нового завдання спочатку порожнє.
    const [newTodo, setNewTodo] = useState(''); // Стан для нового завдання



    // Створюємо стан для дедлайну завдання (deadline). Початкове значення цього стану також порожній рядок.
    const [deadline, setDeadline] = useState(''); // Стан для дедлайну

    //Оголошуємо функцію handleAddTodo, яка викликається для додавання нового завдання до списку.
    const handleAddTodo = () => {

        // Перевіряємо, чи порожній введений текст. Якщо користувач не ввів текст або ввів тільки пробіли (trim() видаляє пробіли з початку і кінця рядка), ми не додаємо нове завдання. Використовуємо return, щоб вийти з функції без виконання подальших дій.
        if (newTodo.trim() === '') return; // Перевірка на порожній ввід для назви завдання
        
        
        
        
// Створюємо новий об'єкт для завдання. У цьому об'єкті:
// id: використовуємо Date.now() для створення унікального ідентифікатора на основі поточного часу.
// task: зберігаємо введене завдання (значення з newTodo).
// completed: спочатку завдання позначене як не виконане (false).
// deadline: якщо користувач не вказав дедлайн, то він буде мати значення null.

        const newTodoItem = {
            id: Date.now(), // Генерація унікального ID
            task: newTodo,
            completed: false,
            deadline: deadline || null, 
        };



        // Оновлюємо стан todos, додаючи нове завдання до списку. Для цього створюємо новий масив за допомогою оператора поширення (...), в якому є всі попередні завдання (todos), і додаємо нове завдання (newTodoItem).

        setTodos([...todos, newTodoItem]); // Додавання нового завдання до списку



        // Очищаємо поле для введення нового завдання, скидаючи значення стану newTodo на порожній рядок, щоб після додавання завдання поле було знову порожнім.
        setNewTodo(''); // Очищення поля введення



        // Очищаємо поле для введення дедлайну, скидаючи значення стану deadline на порожній рядок
        setDeadline(''); // Очищення поля дедлайну
    };

    // Функція для видалення завдання
    // Оголошуємо функцію handleDeleteTodo, яка викликається для видалення завдання з todos. Вона приймає параметр id — ідентифікатор завдання, яке потрібно видалити.
    const handleDeleteTodo = (id) => {



        // Оновлюємо список завдань, фільтруючи масив todos таким чином, щоб видалити елемент, у якого id дорівнює переданому в параметрі id. Для цього ми використовуємо метод filter(), який повертає новий масив без елемента з цим id.
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };


//     Використовуємо хук useEffect, щоб зберігати список завдань (todos) в localStorage. Оскільки масив todos змінюється після додавання або видалення завдань, ми встановлюємо нові значення в localStorage після кожної зміни списку завдань.
// JSON.stringify() перетворює масив todos у рядок, щоб можна було зберігати його в localStorage.
// Масив залежностей [todos] означає, що цей ефект буде виконуватися кожного разу, коли змінюється список завдань.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className={css.todoList}>
            <div>
                <input
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