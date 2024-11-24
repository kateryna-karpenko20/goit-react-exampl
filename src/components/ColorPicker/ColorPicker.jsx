import React, { useState } from 'react';
import css from './ColorPicker.module.css';
import colors from '../../assets/colors.json';

export const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState('white');
  return (
    <section style={{ backgroundColor: currentColor }} className={css.colorPicker}>
      <div className={css.container}>
        <h2>
          Current Color: {currentColor}
        </h2>
        <ul className={css.list}>
          {colors.map((item) => (
            <li
              key={item.id}
              className={css.item}
              style={{ backgroundColor: item.color }} // Додаємо стиль кольору для візуалізації
              onClick={() => setCurrentColor(item.color)} // Обробник кліку
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
