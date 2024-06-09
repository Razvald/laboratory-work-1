import React, { useState } from "react";

function CitySelect() {
    const [city, setCity] = useState("");

    return (
        <div>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Select a city</option>
                <option value="rio">Рио-де-Жанейро</option>
                <option value="moscow">Москва</option>
                <option value="new-york">Нью-Йорк</option>
            </select>
            {city && city !== "rio" && <p>Нет, это не Рио-де-Жанейро!</p>}
        </div>
    );
}

export default CitySelect;
