import { useState } from "react";
import css from './Vote.module.css';  // переконайтеся, що підключили правильний файл CSS

const Vote = () => {
    
    
    // Початковий стан для голосування
// Ми використовуємо хук useState, щоб створити стан для голосування. Стан містить три властивості:
// macOs — кількість голосів за операційну систему MacOS, початкове значення 0.
// windows — кількість голосів за Windows, початкове значення 0.
// linux — кількість голосів за Linux, початкове значення 0.
// setVoteData — це функція, яку ми використовуємо для оновлення стану.
    const [voteDat, setVoteData] = useState({
        macOs: 0,
        windows: 0,
        linux: 0,
    });


    // Функція для обробки кліку на кнопку
// handleClickByOpining — функція, яка викликається при натисканні на одну з кнопок голосування.
// Вона приймає один параметр value, який вказує, за яку операційну систему віддати голос. Це може бути "macOs", "windows" або "linux".
// Функція використовує setVoteData для оновлення стану. Вона передає попереднє значення стану (prev) і копіює його за допомогою оператора поширення (...prev), щоб не втратити голоси для інших операційних систем.
// Потім ми збільшуємо голоси для тієї операційної системи, яка вказана в параметрі value (наприклад, якщо натиснули на кнопку для MacOS, ми збільшуємо macOs на 1).
    const handleClickByOpining = (value) => {
        setVoteData((prev) => ({
            ...prev, // Зберігаємо попередні значення
            [value]: prev[value] + 1, // Оновлюємо конкретну операційну систему
        }));
    };

    return (
        <div>
            <h1 className={css.title}>Voting list</h1>
            <ul>
                <li>MacOs: {voteDat.macOs}</li>
                <li>Windows: {voteDat.windows}</li>
                <li>Linux: {voteDat.linux}</li>   
            </ul>
            <section>
                {/* Кнопки для голосування */}
                <button onClick={() => handleClickByOpining("macOs")}>MacOs</button>
                <button onClick={() => handleClickByOpining("windows")}>Windows</button>
                <button onClick={() => handleClickByOpining("linux")}>Linux</button>
            </section>
        </div>
    );
};

export default Vote;
