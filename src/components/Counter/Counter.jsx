// import React, { useState, useEffect } from "react";
// import css from "./Counter.module.css";

// export const Counter = () => {
//   const [counter, setCounter] = React.useState(0);
//   const [step, setStep] = useState(1);
//   // 1- значення перемінної counter, 2- функція яка змінює значення перемінної counter та показує її після зміни, а useState повертає значення перемінної counter та втановлює початкове значення перемінної counter
  
//   useEffect(() => {console.log(`Counter was changed. Current value: ${counter}`)}, [counter]);
// // useEffect це функція, яка виконується при зміні значення перемінної counter, вона має 2 параметри, перший - фукція, другий - масив залежностей

//   useEffect(() => {console.log(`step was changed. Current value: ${step}`)}, [step]);
  
//   useEffect(() => {console.log("Counter or step was changed.")}, [counter, step]);


//   const handlePlusClick = () => {
//     // setCounter(counter + 1);
//     // setCounter((prevCounter) => prevCounter + 1);              Так як код асинхроний, а потрібно воконати декілька однакових запитів, при звичайному запиті отримує лише збільшення на 1, навіть якщо використовується  setCounter(counter + 1) 3 рази, для кода це вигладає як 0+1 0+1 0+1, тому використовується prevCounter(посилання на counter в даний момент часу, і новий не виконається поки не виконаеться попередній і значення не зміниться), і можемо повторювати запит хоч 5 разів і він буде працювати правильно, тобто послідовно 0+1 1+1 2+1 3+1 4+1
//     setCounter(prev => prev + step);         // Працює так аналогічно як і попередні 2 рядки
//   }
//   const handleMinusClick = () => {
//     // setCounter(counter - 1);
//     setCounter(prev => prev - step);
//   }
//   const handleResetClick = () => {
//     setCounter(0);  //Скидає значення counter до 0
//     setStep(1);  // Скидає значення step до 1

//   }
//     return (
//       <div className={css.counter}>
//         <h1>{counter}</h1>
//         <input value={step} onChange={event => { setStep(+event.target.value); }} />      {/* value={step} Значить, що якщо введено в input 1, то значення step буде 1, і що при reset, значення step автоматично стане таким, яким введено в фунції handleResetClick, тобто 1 */}
//           <div className={css.buttons}>
//           <button className="btn" onClick={handleMinusClick}>minus</button>
//               <button className="btn" onClick={handleResetClick}>reset</button>
//               <button className="btn" onClick={handlePlusClick}>plus</button>
//           </div>
//     </div>
//   )
// }

// Rules
// 1. Тільки в функціональному компоненті () = {}
// 2. Імпортуємо тільки В КОМПОНЕНТІ(З ВЕЛИКОЇ ЛІТЕРИ НАША ФУНКЦІЯ)
// 3. Без умов, без циклів, не в іншій функції
// 4. Хуки починаються з ключового слова "use"
















import React, { useState, useEffect, useMemo } from "react"; 
// Імпортуємо необхідні модулі з React:
// - `React` - основний об'єкт для використання в React-компонентах.
// - `useState` - хук для роботи з внутрішнім станом компонента.
// - `useEffect` - хук для виконання побічних ефектів (наприклад, для логування або асинхронних запитів).
// - `useMemo` - хук для мемоізації значень, щоб запобігти непотрібним обчисленням.
import css from "./Counter.module.css"; 
// Імпортуємо CSS модуль для стилізації компонента, це дозволяє використовувати стилі з файлу `Counter.module.css`.

export const Counter = () => {  
  // Оголошуємо функціональний компонент `Counter`. Це головна функція, яка буде відповідати за відображення і взаємодію з інтерфейсом користувача.
  
  const [counter, setCounter] = React.useState(0); 
  // Використовуємо хук `useState`, щоб створити змінну `counter` для збереження значення лічильника.
  // `useState(0)` ініціалізує стан значення `counter` початковим значенням 0.
  // `setCounter` - це функція, яку ми будемо використовувати для зміни значення `counter`.

  const [step, setStep] = useState(1); 
  // Аналогічно, створюємо змінну `step`, яка зберігає крок для зміни значення лічильника.
  // Початкове значення кроку (step) — 1.

  const [testValue, setTestValue] = useState(0); 
  // Створюємо ще одну змінну `testValue`, яка може бути використана для обчислень.

  // useEffect - це хук, який дозволяє виконувати код після рендерингу компонента.
  useEffect(() => {
    // Цей код виконується щоразу, коли змінюється значення `counter`.
    console.log(`Counter was changed. Current value: ${counter}`);
  }, [counter]); 
  // Перший параметр - це функція, яка буде виконуватись.
  // Другий параметр - масив залежностей: тут ми говоримо, що цей ефект має виконуватись кожного разу, коли змінюється `counter`.
  
  useEffect(() => {
    console.log(`step was changed. Current value: ${step}`);
  }, [step]); 
  // Тепер ми стежимо за зміною змінної `step` і виводимо повідомлення в консоль при її зміні.

  useEffect(() => {
    console.log("Counter or step was changed.");
  }, [counter, step]); 
  // У цьому ефекті ми стежимо за зміною як `counter`, так і `step`. Кожного разу, коли змінюється хоча б одне з них, виконується цей код.

  const handlePlusClick = () => {
    // Функція для збільшення лічильника на значення кроку.
    // Ми використовуємо функцію `setCounter` для оновлення значення лічильника.
    // `prev => prev + step` — це так званий функціональний оновлення. Ми отримуємо попереднє значення `counter` (prev) 
    // і додаємо до нього значення `step`. Це дозволяє коректно обробляти асинхронні оновлення стану.
    setCounter(prev => prev + step);
  }

  const handleMinusClick = () => {
    // Функція для зменшення лічильника на значення кроку.
    setCounter(prev => prev - step); 
    // Так само як і в `handlePlusClick`, ми використовуємо попереднє значення і віднімаємо від нього крок.
  }

  const handleResetClick = () => {
    // Функція для скидання значень лічильника та кроку до початкових значень (0 та 1).
    setCounter(0);  // Скидаємо лічильник на 0.
    setStep(1);     // Скидаємо крок на 1.
  }

  const result = useMemo(() => {
    // `useMemo` - це хук, який дозволяє мемоізувати (запам'ятовувати) результат обчислень.
    // Це корисно, коли ми маємо дорогі операції, які не повинні повторюватись, поки не зміняться залежні значення.
    console.log('start useMemo');
    for (let i = 0; i < 1000000; i++) {   // Імітація важких обчислень.
      console.log('end useMemo');
      return testValue * testValue;
    }  // Повертаємо результат множення `testValue` на себе.
  }, [testValue]);  // Хук `useMemo` буде повторно виконуватись тільки при зміні `testValue`.

  return (
    // JSX — це синтаксис, який дозволяє писати HTML-подібний код у React.
    // Тег `div` є контейнером для всього вмісту компонента.
    <div className={css.counter}>
      {/* Виводимо значення лічильника на екран */}
      <h1>{counter}</h1> 

      {/* Тег `input` дозволяє користувачеві змінювати значення змінної `step` через введення в текстове поле */}
      <input value={step} onChange={event => { setStep(+event.target.value); }} />      
      {/* 
        value={step} - це означає, що значення `step` відображатиметься в полі введення.
        onChange - це обробник події, що викликається, коли користувач змінює значення в полі вводу.
        `+event.target.value` перетворює введене значення в число.
      */}

      {/* Кнопки для взаємодії з лічильником */}
      <div className={css.buttons}>
        <button className="btn" onClick={handleMinusClick}>minus</button>
        {/* Кнопка для зменшення значення лічильника */}
        <button className="btn" onClick={handleResetClick}>reset</button>
        {/* Кнопка для скидання значень лічильника і кроку */}
        <button className="btn" onClick={handlePlusClick}>plus</button>
        {/* Кнопка для збільшення значення лічильника */}
      </div>

      {/* Виводимо результат обчислення */}
      <h3>Result: {result}</h3>

      {/* Кнопка для збільшення значення testValue */}
      <button onClick={() => setTestValue(prev => prev + 1)}>Click</button>
      {/* При натисканні на кнопку значення `testValue` збільшується на 1 */}
    </div>
  );
}

export default Counter;
