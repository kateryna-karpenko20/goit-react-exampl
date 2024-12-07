import { Field, Formik, Form } from 'formik';
import css from './OrderForm.module.css';

const OrderForm = () => {
  const handleSubmit = (values, options) => {   // values: об'єкт, що містить значення всіх полів форми.  options: додаткові параметри, що можуть бути передані під час подання форми
    console.log(values);
    options.resetForm();
  };

  const initialValues = { username: '', tel: '', email: '', petType:'', gender: '', decire: '', agree: false };       // initialValues: об'єкт, що містить початкові значення всіх полів форми.


  return (
    <div className={css.wrapper}>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>        
              {/* Formik — це компонент, який забезпечує управління станом форми і автоматичне оброблення подій */}
        {() => (
          <Form className={css.form}>
               
           <label className={css.label}>
              <span>Ім'я</span>
              <Field
                className={css.input}
                type="text"
                placeholder="введіть ваше ім'я"
                name="username"
            />
           {/* Field — це спеціальний компонент від Formik, який зв'язує інпут з Formik-станом. Завдяки цьому Formik автоматично керує значенням цього поля, а також зберігає і відправляє його на сервер. */}
        
            </label>
    
               <label className={css.label}>
              <span>Телефон</span>
              <Field
                className={css.input}
                type="number"
                placeholder="введіть ваш номер"
                name="tel"
              />
              </label>
            
            <label className={css.label}>
              <span>Емейл</span>
              <Field
                className={css.input}
                type="text"
                placeholder="введіть ваш емейл"
                name="email"
              />
                </label>
        
<label className={css.label}>
              <span>Тип улюбленця</span>
              <Field as='select' className={css.input} name='petType'>
                <option value="" disabled>Можливо це </option>
                <option value='cat'>Кошення</option>
                <option value='dog'>Цуцення</option>
                <option value='bird'>Птах</option>
              </Field>
            </label>

              <div >
             <span style={{ fontWeight: "Bold" }}>Стать:</span>
              <label className={css.labelRadio}>
                <Field
                  type="radio"
                  value="male"
                  className={css.radio}
                  name="gender"
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

            <label className={css.label}>
              <span>Побажання</span>
              <Field
                as="textarea"
                className={css.input}
                placeholder="введіть побажання"
                name="decire"
              />
            </label>

            <label className={css.labelRadio}>
              
              <Field
                className={css.checkbox}
                type="checkbox"
                name="agree"
                          />
            <span>Я приймаю всі правила платформи</span>
            </label>

            <button type="submit">Замовити</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;