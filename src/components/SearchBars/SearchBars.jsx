// Імпортуємо необхідні компоненти з бібліотеки Formik та React
import { Field, Form, Formik } from 'formik'; // Field - для поля вводу, Form - для обгортки форми, Formik - для керування станом форми
import React from 'react'; // Імпортуємо React для роботи з JSX (формат для опису інтерфейсу в React)

const SearchBars = ({ handleSetQuery }) => { 
  // Створюємо компонент SearchBars, який приймає пропс handleSetQuery.
  // Цей пропс - функція, яка буде використовуватися для обробки введеного запиту.

  // Функція, що обробляє відправку форми
  const handleSubmit = (values) => {
    // values - це об'єкт, що містить усі значення полів форми. В нашому випадку це лише поле "query".
    console.log(values); // Виводимо значення форми в консоль для налагодження (під час тестування)

    // Викликаємо передану функцію handleSetQuery, щоб передати значення запиту на вищий рівень компонента
    handleSetQuery(values.query);
  };

  // Визначаємо початкові значення форми
  const initialValues = {
    query: '', // Початкове значення для поля "query" буде порожнім рядком
  };

  return (
    <div>
      {/* Компонент Formik, що обгортає всю форму та керує її станом */}
      <Formik 
        onSubmit={handleSubmit}  // Вказуємо функцію, яку потрібно викликати при відправці форми (handleSubmit)
        initialValues={initialValues}  // Початкові значення форми, вказуємо, що поле "query" початково порожнє
      >
        <Form>
          {/* Компонент Field для створення поля вводу з іменем "query". Визначаємо тип поля та плейсхолдер */}
          <Field 
            type="text" 
            placeholder="Search user..." // Текст в полі вводу до того, як користувач почне вводити
            name="query" // Ім'я поля, яке буде відповідати значенню в об'єкті values
          />
          
          {/* Кнопка для відправки форми */}
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

// Експортуємо компонент для використання в інших частинах програми
export default SearchBars;
