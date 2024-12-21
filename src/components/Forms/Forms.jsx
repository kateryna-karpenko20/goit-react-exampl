import React, { useState } from 'react';  // Імпортуємо React та useState для створення стану компоненту.

const INITIAL_STATE = {  // Початковий стан форми, де кожне поле має початкове значення.
     name: '',  // Ім'я користувача
     email: '',  // Email користувача
     password: '',  // Пароль користувача
     age: "",  // Вік користувача
     country: '',  // Країна користувача
     aboutMe: '',  // Опис про себе
     gender: '',  // Стать користувача
     agree: false,  // Згода на умови
}

const Forms = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);  // Ініціалізація стану форми через useState, що містить всі поля.

    // Функція, яка викликається при надсиланні форми.
    const handleSubmit = (event) => {
        event.preventDefault();  // Запобігає стандартній поведінці форми (перезавантаженню сторінки).
        console.log(formData);  // Виводимо дані форми в консоль.
        setFormData(INITIAL_STATE);  // Очищаємо форму, скидаючи значення до початкового стану.
    }

    // Функція, яка обробляє зміни в полях форми.
    const handleChangeInput = (event) => {
        const { name, value, type, checked } = event.target;  // Отримуємо значення поля, тип та стан для чекбоксів.
        console.log(name);  // Виводимо ім'я поля, яке змінилося.
        console.log(value);  // Виводимо нове значення поля.

        // Якщо користувач вибирає Росію, змінюємо значення на Україну та виводимо попередження.
        if (value === "Russia") {
            setFormData({ ...formData, [name]: "Ukraine" });
            return alert("You can't choose Russia");  // Показуємо попередження.
        }

        // Оновлюємо стан форми для всіх полів.
        setFormData(prev => ({
            ...prev,  // Беремо попереднє значення стану.
            [name]: type === "checkbox" ? checked : value // Якщо поле типу чекбокс, використовуємо checked, інакше значення value.
        }));
    };

    return (
        <div style={{ margin: '20px' }}>  {/* Визначаємо відступи для всього контейнера. */}
            <form onSubmit={handleSubmit}>  {/* Встановлюємо обробник для відправки форми. */}
                <label>
                    <span>Name:</span>
                    <input 
                        onChange={handleChangeInput}  // Встановлюємо обробник на зміни в полі.
                        value={formData.name}  // Зв'язуємо значення поля з даними з useState.
                        type="text" 
                        placeholder="name" 
                        name="name"  // Вказуємо ім'я для поля, яке буде використовуватися для зміни цього значення в стані.
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input 
                        onChange={handleChangeInput}  
                        value={formData.email}  
                        type="text" 
                        placeholder="email" 
                        name="email" 
                    />
                </label>
                <label>
                    <span>Password:</span>
                    <input 
                        onChange={handleChangeInput}  
                        value={formData.password} 
                        type="password"  // Тип поля пароль, щоб приховати введене значення.
                        placeholder="password" 
                        name="password" 
                    />
                </label>
                <label>
                    <span>Age:</span>
                    <input 
                        onChange={handleChangeInput}  
                        value={formData.age} 
                        type="number"  // Тип поля number для введення числа.
                        placeholder="age" 
                        name="age" 
                    />
                </label>
                <label>
                    <span>Country:</span>
                    <select 
                        name="country"  // Вказуємо ім'я для поля.
                        value={formData.country}  // Прив'язуємо значення вибраної країни до стану.
                        onChange={handleChangeInput}  // Встановлюємо обробник зміни вибору.
                    >
                        <option value="" disabled>Виберіть країну</option>  {/* Неактивний пункт */}
                        <option value="Ukraine">Ukraine</option>
                        <option value="Poland">Poland</option>
                        <option value="USA">USA</option>
                        <option value="Germany">Germany</option>
                        <option value="Russia">Russia</option>
                    </select>
                </label>
                <label>
                    <span>About me:</span>
                    <textarea 
                        name="aboutMe" 
                        value={formData.aboutMe} 
                        onChange={handleChangeInput}  // Обробник зміни введеного тексту.
                    />
                </label>
                <div>
                    <span>Gender:</span>
                    <label>
                        Male
                        <input 
                            type="radio" 
                            value="male" 
                            name="gender" 
                            checked={formData.gender === "male"}  // Якщо вибрано чоловічу стать, то це поле буде відмічене.
                            onChange={handleChangeInput} 
                        />
                    </label>
                    <label>
                        Female
                        <input 
                            type="radio" 
                            value="female" 
                            name="gender" 
                            checked={formData.gender === "female"}  // Якщо вибрано жіночу стать, то це поле буде відмічене.
                            onChange={handleChangeInput} 
                        />
                    </label>
                </div>
                <label>
                    <input 
                        type="checkbox" 
                        name="agree" 
                        checked={formData.agree}  // Якщо користувач погодився, це поле буде відмічене.
                        onChange={handleChangeInput} 
                    />
                    I agree with terms and conditions and privacy policy
                </label>
                <button type="submit">Register</button>  {/* Кнопка для відправки форми. */}
            </form>
        </div>
    );
};

export default Forms;  // Експортуємо компонент Forms, щоб його можна було використовувати в інших частинах програми.
