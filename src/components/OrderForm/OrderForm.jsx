import { Field, Formik, Form } from 'formik'; // Імпортуємо необхідні компоненти з бібліотеки Formik
import css from './OrderForm.module.css'; // Імпортуємо CSS-стилі для форми

const OrderForm = () => {
  // Обробник події submit форми. Отримує значення полів форми та додаткові параметри.
  const handleSubmit = (values, options) => {   
    console.log(values); // Виводимо значення полів форми в консоль
    options.resetForm(); // Очищаємо форму після відправлення
  };

  // Початкові значення для кожного поля форми
  const initialValues = { 
    username: '',  // Ім'я
    tel: '',       // Телефон
    email: '',     // Емейл
    petType: '',   // Тип улюбленця
    gender: '',    // Стать
    decire: '',    // Побажання
    agree: false,  // Згода з правилами
  };       

  return (
    <div className={css.wrapper}>
      {/* Formik забезпечує управління станом форми та автоматичне оброблення подій */}
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>        
        {() => (
          <Form className={css.form}>
            {/* Поле для введення імені */}
            <label className={css.label}>
              <span>Ім'я</span>
              <Field
                className={css.input}
                type="text"
                placeholder="введіть ваше ім'я"
                name="username" // Назва поля повинна відповідати ключу в initialValues
              />
              {/* Field — це спеціальний компонент Formik, який автоматично керує значенням цього поля */}
            </label>

            {/* Поле для введення телефону */}
            <label className={css.label}>
              <span>Телефон</span>
              <Field
                className={css.input}
                type="number"
                placeholder="введіть ваш номер"
                name="tel"
              />
            </label>
            
            {/* Поле для введення емейлу */}
            <label className={css.label}>
              <span>Емейл</span>
              <Field
                className={css.input}
                type="text"
                placeholder="введіть ваш емейл"
                name="email"
              />
            </label>
        
            {/* Поле для вибору типу улюбленця */}
            <label className={css.label}>
              <span>Тип улюбленця</span>
              <Field as='select' className={css.input} name='petType'>
                <option value="" disabled>Можливо це </option>
                <option value='cat'>Кошення</option>
                <option value='dog'>Цуцення</option>
                <option value='bird'>Птах</option>
              </Field>
            </label>

            {/* Поля для вибору статі (радіо кнопки) */}
            <div>
              <span style={{ fontWeight: "bold" }}>Стать:</span>
              <label className={css.labelRadio}>
                <Field
                  type="radio"
                  value="male"
                  className={css.radio}
                  name="gender" // Спільне ім'я для обох радіо-кнопок, щоб вибір був взаємозалежним
                />
                <span>Хлопчик</span>
              </label>

              <label className={css.labelRadio}>
                <Field
                  type="radio"
                  value="female"
                  className={css.radio}
                  name="gender"
                />
                <span>Дівчинка</span>
              </label>
            </div>

            {/* Поле для вводу побажань */}
            <label className={css.label}>
              <span>Побажання</span>
              <Field
                as="textarea"  // Використовуємо textarea для вводу тексту
                className={css.input}
                placeholder="введіть побажання"
                name="decire"
              />
            </label>

            {/* Чекбокс для підтвердження згоди */}
            <label className={css.labelRadio}>
              <Field
                className={css.checkbox}
                type="checkbox"
                name="agree" // Назва поля для згоди
              />
              <span>Я приймаю всі правила платформи</span>
            </label>

            {/* Кнопка для відправки форми */}
            <button type="submit">Замовити</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
