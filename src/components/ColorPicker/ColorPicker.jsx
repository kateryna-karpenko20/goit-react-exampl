import React, { useState } from 'react';  // Імпортуємо React та useState для створення компонента та керування станом.
import css from './ColorPicker.module.css';  // Імпортуємо CSS модулі для стилізації компонента.
import colors from '../../assets/colors.json';  // Імпортуємо список кольорів з файлу JSON.

export const ColorPicker = () => {  // Оголошуємо функціональний компонент ColorPicker.
  // useState — хук для створення стану в компоненті. Використовуємо його для зберігання поточного кольору.
  const [currentColor, setCurrentColor] = useState('white');  // Ініціалізуємо стан 'currentColor' зі значенням за замовчуванням 'white'.

  return (  // Повертаємо JSX розмітку компонента.
    <section style={{ backgroundColor: currentColor }} className={css.colorPicker}> 
      {/* Встановлюємо фон секції в залежності від поточного кольору */}
      {/* 'style={{ backgroundColor: currentColor }}' динамічно змінює фон секції */}
      {/* 'className={css.colorPicker}' використовує клас з CSS модулю для стилізації компонента */}

      <div className={css.container}> 
        {/* Контейнер для елементів всередині секції. Це допомагає організувати структуру компонентів */}
        <h2>
          Current Color: {currentColor} 
          {/* Виводимо поточний колір на екран, беручи значення з стану 'currentColor' */}
        </h2>
        <ul className={css.list}> 
          {/* Список кольорів, кожен з яких є елементом списку */}
          {/* Ми використовуємо список для відображення доступних кольорів */}

          {colors.map((item) => (  
            // Перебираємо масив кольорів за допомогою методу map.
            // Для кожного елемента в масиві 'colors' створюємо елемент списку <li>

            <li
              key={item.id}  // Використовуємо унікальний 'id' з кожного елемента для ключа списку.
              // 'key' дозволяє React ефективно оновлювати DOM, коли відбуваються зміни.
              className={css.item}  // Присвоюємо клас для стилізації елемента за допомогою CSS модулів.
              style={{ backgroundColor: item.color }} // Додаємо інлайн-стиль для фону кожного елемента списку, щоб відобразити колір.
              onClick={() => setCurrentColor(item.color)}  // При кліку на елемент списку встановлюємо новий колір.
            >
              {item.color} {/* Виводимо текстовий варіант кольору */}
              {/* Якщо в JSON є кольори, вони відображатимуться як текст в елементах списку. */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColorPicker;  // Експортуємо компонент ColorPicker, щоб його можна було використовувати в інших частинах програми.
