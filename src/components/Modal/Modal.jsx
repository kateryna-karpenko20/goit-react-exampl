// const Modal = props => {
//   return (
//       <div>
//           {/* в арс всі дані, а тут тільк спосіб їх показу, children - це зарезервоване слово, що значить показати всі елементи всередені елемента */}
//           <h2>{props.title}</h2>
//           {props.children}
//     </div>
//   )
// }

// export default Modal


import { useEffect } from 'react';  // Імпортуємо хук useEffect, щоб працювати з побічними ефектами в компоненті.
import css from './Modal.module.css';  // Імпортуємо локальні стилі для цього компонента.


// children: Резервоване слово React, яке означає, що компонент може отримувати та відображати вкладений контент.
// onClose: Функція, передана як пропс, яка викликається для закриття модального вікна.

const Modal = ({ children, title = "Default", onClose }) => {

  // Закриття при кліку на фон
  // Обробник події кліку. Він визначає, чи користувач клацнув саме на фон (backdrop), а не всередині модального вікна.
  // Прикріплюється до діва з класом overlay, за допомоги події onClick.
  
  const handleBackdropClick = (event) => {
    // Перевірка, чи користувач клацнув саме на фон
    // event.target: Елемент, по якому безпосередньо клацнув користувач.
    // event.currentTarget: Елемент, до якого прикріплено обробник події.
    if (event.target === event.currentTarget) {
      onClose();  // Якщо клацнули на фон, викликаємо функцію закриття модального вікна.
    }
  };

  // Закриття при натисканні Escape
  // Обробник події для натискання клавіші Escape, щоб закрити модальне вікно.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {  // Якщо натиснули клавішу Escape
        onClose();  // Закриваємо модальне вікно.
      }
    };

    // Додаємо обробник події для всього вікна. Це дозволяє закрити модальне вікно навіть якщо фокус перебуває поза модальним вікном.
    window.addEventListener('keydown', handleKeyDown);

    // Додатково створюємо інтервал і таймер для демонстраційних цілей (можна видалити, якщо не потрібно)
    const intervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());  // Виводимо поточний час кожну секунду.
    }, 1000);

    const timeOutId = setTimeout(() => {
      console.log("Закрий її вже!");  // Виводимо повідомлення після 3 секунд.
    }, 3000);

    // Функція очищення, яка викликається при видаленні компонента Modal з DOM.
    return () => {
      console.log("Modal was closed.");  // Лог при закритті модального вікна.
      clearTimeout(timeOutId);  // Очищаємо таймер timeout.
      clearInterval(intervalId);  // Очищаємо інтервал, щоб він не тривав після закриття модального вікна.
      
      // Видаляємо обробник події для клавіші Escape, щоб не виникали "витоки пам'яті".
      window.removeEventListener('keydown', handleKeyDown);
    };

    // Масив залежностей. Хук useEffect буде виконуватися, якщо onClose зміниться.
  }, [onClose]);

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>  {/* Фон модального вікна */}
      <div className={css.container}>
        {/* Заголовок і вміст модального вікна */}
        <h2>{title}</h2>  {/* Заголовок модального вікна, може бути заданий через пропс 'title' */}
        <button onClick={onClose} className={css.close}>  {/* Кнопка для закриття модального вікна */}
          x
        </button>
        <hr />  {/* Роздільник */}
        {children}  {/* Вміст модального вікна (що передається через пропс 'children' )*/}
      </div>
    </div>
  );
};

export default Modal;  // Експортуємо компонент Modal для використання в інших частинах програми.
