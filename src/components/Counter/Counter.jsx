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
import css from "./Counter.module.css";

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  const [step, setStep] = useState(1); 
  const [testValue, setTestValue] = useState(0);
  // 1- значення перемінної counter, 2- функція яка змінює значення перемінної counter та показує її після зміни, а useState повертає значення перемінної counter та втановлює початкове значення перемінної counter 
  
  useEffect(() => {console.log(`Counter was changed. Current value: ${counter}`)}, [counter]);
// useEffect це функція, яка виконується при зміні значення перемінної counter, вона має 2 параметри, перший - фукція, другий - масив залежностей

  useEffect(() => {console.log(`step was changed. Current value: ${step}`)}, [step]);
  
  useEffect(() => {console.log("Counter or step was changed.")}, [counter, step]);


  const handlePlusClick = () => {
    // setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1);              Так як код асинхроний, а потрібно воконати декілька однакових запитів, при звичайному запиті отримує лише збільшення на 1, навіть якщо використовується  setCounter(counter + 1) 3 рази, для кода це вигладає як 0+1 0+1 0+1, тому використовується prevCounter(посилання на counter в даний момент часу, і новий не виконається поки не виконаеться попередній і значення не зміниться), і можемо повторювати запит хоч 5 разів і він буде працювати правильно, тобто послідовно 0+1 1+1 2+1 3+1 4+1
    setCounter(prev => prev + step);         // Працює так аналогічно як і попередні 2 рядки
  }
  const handleMinusClick = () => {
    // setCounter(counter - 1);
    setCounter(prev => prev - step); 
  }
  const handleResetClick = () => {
    setCounter(0);  //Скидає значення counter до 0
    setStep(1);  // Скидає значення step до 1

  }

  const result = useMemo(() => {
    console.log('start useMemo');
    for (let i = 0; i < 1000000; i++) { }
    console.log('end useMemo');
    return testValue*testValue;
  }, [testValue]);
   
  return (
      <div className={css.counter}>
        <h1>{counter}</h1>
        <input value={step} onChange={event => { setStep(+event.target.value); }} />      {/* value={step} Значить, що якщо введено в input 1, то значення step буде 1, і що при reset, значення step автоматично стане таким, яким введено в фунції handleResetClick, тобто 1 */}
          <div className={css.buttons}>
          <button className="btn" onClick={handleMinusClick}>minus</button>
              <button className="btn" onClick={handleResetClick}>reset</button>
              <button className="btn" onClick={handlePlusClick}>plus</button>
      </div>
      <h3>Result: {result}</h3>
      <button onClick={() => setTestValue(prev => prev + 1)}>Click</button>
    </div>
  )
}

export default Counter