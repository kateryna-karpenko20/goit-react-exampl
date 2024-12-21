import { FcAbout } from "react-icons/fc";  // Імпортуємо іконку 'FcAbout' з бібліотеки react-icons, що представляє собою іконку з описом (можна використати для відображення інформації).
import css from './Message.module.css';  // Імпортуємо CSS модуль для стилізації компонента. Це дозволяє застосовувати локальні стилі тільки для цього компонента.

const Message = ({ text, author = 'Anonim' }) => {  // Оголошуємо функціональний компонент Message, який приймає пропси:
                                                    // - 'text' (текст повідомлення) - обов'язковий пропс.
                                                    // - 'author' (автор повідомлення) - за замовчуванням значення 'Anonim'.
  return (
    <div>  {/* Контейнер для всього повідомлення */}
      <h4>{text}  {/* Виводимо текст повідомлення */}
        <FcAbout className={css.icon} />  {/* Вставляємо іконку після тексту. Застосовуємо клас 'icon' з css для стилізації іконки. */}
      </h4>
      <p>{author}</p>  {/* Виводимо автора повідомлення, за замовчуванням 'Anonim' */}
    </div>
  );
};

export default Message;  // Експортуємо компонент Message для використання в інших частинах програми.
