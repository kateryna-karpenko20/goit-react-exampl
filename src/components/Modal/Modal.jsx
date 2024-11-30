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


import { useEffect } from 'react';
import css from './Modal.module.css';


// children: Резервоване слово React, яке означає, що компонент може отримувати та відображати вкладений контент.
// onClose: Функція, передана як пропс, яка викликається для закриття модального вікна, але спочатку пропси прописаються в App.jsx, а потім викликаються в Modal.jsx
 
const Modal = ({ children, title = "Default", onClose }) => {

  // Закриття при кліку на фон
  // Обробник події кліку. Він визначає, чи користувач клацнув саме на фон (backdrop), а не всередині модального вікна.
  // Прикріплюється до діва з класом overlay, за допомоги події onClick
  const handleBackdropClick = (event) => {
    // Перевірка, чи користувач клацнув саме на фон
//     event.target: Елемент, по якому безпосередньо клацнув користувач.
// event.currentTarget: Елемент, до якого прикріплено обробник події.
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Закриття при натисканні Escape
//  const handleKeyDown: Обробник події, який реагує на натискання клавіші.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    // Додає обробник події для всього вікна. Це дозволяє закрити модальне вікно навіть якщо фокус перебуває поза модальним вікном.
    window.addEventListener('keydown', handleKeyDown);

const intervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
}, 1000);
    
    const timeOutId = setTimeout(() => {
      console.log("Закрий її вже!");
    }, 3000);


    // return () => { ... }:   Це "функція чистки" (cleanup function) в useEffect.
    return () => {
      console.log("Modal was closed.");
      clearTimeout(timeOutId);
      clearInterval(intervalId);    // щоб інтервал(таймер) перестав працювати
      
      // Функція "чистки", яка видаляє обробник події, коли компонент Modal видаляється з DOM. Це запобігає утворенню "витоків пам’яті" (лишніх обробників подій, які більше не потрібні)
      window.removeEventListener('keydown', handleKeyDown);
    };

    // Масив залежностей. React виконує useEffect тільки якщо значення onClose зміниться.
  }, [onClose]);

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.container}>
        {/* Заголовок і вміст модального вікна */}
        <h2>{title}</h2>
        <button onClick={onClose} className={css.close}>
          x
        </button>
        <hr />
        {children}
      </div>
    </div>
  );
};

export default Modal;
