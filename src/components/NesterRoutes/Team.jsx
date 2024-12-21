import React, { useState } from 'react';  // Імпортуємо React та хук useState для керування станом компонента.
import { faker } from '@faker-js/faker';  // Імпортуємо бібліотеку faker для генерації випадкових даних.

const Team = () => {
  // Функція для генерації випадкових даних для однієї особи.
  function generateRandomPerson() {
    return {
      name: faker.name.fullName(),  // Генеруємо випадкове ім'я.
      address: faker.address.streetAddress(),  // Генеруємо випадкову вулицю.
      city: faker.address.city(),  // Генеруємо випадкове місто.
      country: faker.address.country(),  // Генеруємо випадкову країну.
      email: faker.internet.email(),  // Генеруємо випадкову електронну пошту.
      phone: faker.phone.number(),  // Генеруємо випадковий номер телефону.
    };
  }

  // Функція для генерації списку з 5 осіб.
  function generateTeam() {
    return Array.from({ length: 5 }, () => generateRandomPerson());  // Створюємо масив з 5 елементів, кожен з яких є випадковою особою.
  }

  // Створюємо стан team, ініціалізуючи його масивом із 5 випадкових осіб.
  const [team, setTeam] = useState(generateTeam());  

  return (
    <div>
      {/* Виводимо список осіб. */}
      <ul>
        {team.map((person, index) => (  // Перебираємо масив team і для кожної особи виводимо її дані.
          <li style={{border: '1px solid #ccc', marginBottom: '10px', padding: '10px'}} key={index}>  {/* Встановлюємо стилі для кожного елемента списку. */}
            <p><strong>Name:</strong> {person.name}</p>  {/* Виводимо ім'я особи. */}
            <p><strong>Address:</strong> {person.address}, {person.city}, {person.country}</p>  {/* Виводимо адресу особи. */}
            <p><strong>Email:</strong> {person.email}</p>  {/* Виводимо електронну пошту особи. */}
            <p><strong>Phone:</strong> {person.phone}</p>  {/* Виводимо номер телефону особи. */}
          </li>
        ))}
      </ul>
      {/* Кнопка для генерації нового списку команд. Зараз вона закоментована. */}
      {/* <button onClick={() => setTeam(generateTeam())}>Generate New Team</button> */}
    </div>
  );
};

export default Team;
