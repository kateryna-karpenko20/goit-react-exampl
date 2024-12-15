import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

const Team = () => {
  // Функція для генерації випадкових даних для однієї особи
  function generateRandomPerson() {
    return {
      name: faker.name.fullName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    };
  }

  // Функція для генерації списку з 5 осіб
  function generateTeam() {
    return Array.from({ length: 5 }, () => generateRandomPerson());
  }
  const [team, setTeam] = useState(generateTeam()); // Масив із 5 осіб

  return (
    <div>
      <ul>
        {team.map((person, index) => (
          <li style={{border: '1px solid #ccc', marginBottom: '10px', padding: '10px'}} key={index}>
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Address:</strong> {person.address}, {person.city}, {person.country}</p>
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
          </li>
        ))}
      </ul>
      {/* <button onClick={() => setTeam(generateTeam())}>Generate New Team</button> */}
    </div>
  );
};

export default Team;
