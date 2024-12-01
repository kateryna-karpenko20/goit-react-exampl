import React, { useId, useState } from "react";

// Компонент для ввода имени 
const CustomerInput = ({ inputId }) => {
    const id = useId(); // Генерация уникального id

    return (
        <div style={ { display: "flex",gap: "10px", alignItems: "center", margin: "10px" }}>
            <label htmlFor={id}>Customer Name:</label>
            <input
                type="text"
                id={id}
            />
        </div>
    );
};

export default CustomerInput;