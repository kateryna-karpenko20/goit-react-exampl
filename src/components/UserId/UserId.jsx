import React, { useState } from 'react'
import CustomerInput from './CustomerInput'

// const UserId = () => {
//     const [inputCount, setInputCount] = useState(1);
//     // const pageCount = 12;
//   return (
//       <div>
//           <button onClick={()=>setInputCount(prev=>prev+1)}>Add</button>
//           <button onClick={()=>setInputCount(prev=>prev-1)}>Remove</button>
//           {Array(inputCount)
//               .fill("")
//               .map((_, index) => (
//                   <CustomerInput key={index} />))}
//           {/* {Array(pageCount)
//               .fill("")
//               .map((_, index) => (
//                   <button key={index}>{index+1}</button>))} */}
//     </div>
//   )
// }

// export default UserId


// Что здесь происходит?
// 1. Array(inputCount)
// Создает массив длиной inputCount.
// Если, например, inputCount = 3, то Array(inputCount) создаст массив [undefined, undefined, undefined].
// 2. .fill("")
// Заполняет массив значениями, чтобы элементы не оставались undefined.
// В данном случае массив становится ["", "", ""].
// Почему это важно?

// Хотя это необязательно, заполнение массива помогает работать с данными в последующих операциях (например, .map()).
// 3. .map((_, index) => ( ... ))
// Итерация по массиву:
// .map() обрабатывает каждый элемент массива.
// Параметры функции в .map():
// _ — текущий элемент (в данном случае "", но он не используется).
// index — индекс текущего элемента.
// На каждой итерации создается новый компонент <CustomerInput />.
// 4. key={index}
// Для каждого <CustomerInput /> назначается уникальный key, равный индексу текущего элемента. Это помогает React отличать компоненты друг от друга и оптимизировать рендеринг.
// Этот код удобно использовать, когда вы хотите динамически отобразить несколько компонентов на основе количества (inputCount), например прислали 12 сраниц текста, пишешь pageCount = 12, і потом место інпута пишешь например кнопки, і віходит 12 кнопок по 1 на каждую страничку, также і со спіском.

const UserId = () => {
    const [inputCount, setInputCount] = useState(1); // Состояние для отслеживания количества инпутов

    return (
        <div>
            <button onClick={() => setInputCount((prev) => prev + 1)}>Add</button>
            <button onClick={() => setInputCount((prev) => (prev > 1 ? prev - 1 : 1))}>
                Remove
            </button>
            {/* Создаем несколько компонентов CustomerInput с уникальными inputId */}
            {Array(inputCount)
                .fill("")
                .map((_, index) => (
                    <CustomerInput key={index} inputId={index} />
                ))}
        </div>
    );
};

export default UserId;

