// Імпортуємо необхідні компоненти з бібліотеки Formik
import { Field, Form, Formik } from 'formik'; // Field - для введення даних у формі, Form - обгортка для форми, Formik - основний компонент для керування станом форми
import React from 'react'; // Імпортуємо React для використання JSX (синтаксису для опису UI)

const SearchBar = ({ onChangeQuery }) => { 
  // Створюємо компонент SearchBar, який приймає пропс onChangeQuery (функцію для обробки зміни запиту)

  // Визначаємо початкові значення для форми
  const initialValues = {
    query: '', // Початкове значення для поля вводу, яке буде порожнім
  };

  // Функція обробки форми при її відправці
  const handleSubmit = (values, { resetForm }) => {
    // values - це об'єкт, що містить значення усіх полів форми. resetForm - функція для скидання форми після відправки.
    console.log(values); // Виводимо значення форми у консоль (для налагодження)

    // Якщо поле query не порожнє (після обрізки пробілів)
    if (values.query.trim()) {
      onChangeQuery(values.query); // Викликаємо функцію onChangeQuery, передаючи введений запит
      resetForm(); // Очищаємо форму після відправки (необов'язково, але зручно)
    }
  };

  return (
    <div>
      {/* Використовуємо компонент Formik, щоб обгорнути всю форму та керувати її станом */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          // Функція рендеру, що повертає саму форму
          <Form>
            {/* Компонент Field - це поле вводу, яке отримує значення з Formik та відображає його в UI */}
            <Field name="query" placeholder="Search..." />
            {/* Кнопка для відправки форми */}
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Експортуємо компонент для використання в інших частинах програми
export default SearchBar;
