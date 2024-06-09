import React, { useState } from "react";

function NumberFilter() {
    const [numbers, setNumbers] = useState([]);
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("all");

    const addNumber = () => {
        if (newNumber) {
            setNumbers([...numbers, parseInt(newNumber)]);
            setNewNumber("");
        }
    };

    const filteredNumbers = numbers.filter((num) => {
        if (filter === "even") {
            return num % 2 === 0;
        } else if (filter === "odd") {
            return num % 2 !== 0;
        }
        return true;
    });

    return (
        <div>
            <input
                type="number"
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
            />
            <button onClick={addNumber}>+</button>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="even">Even</option>
                <option value="odd">Odd</option>
            </select>
            <ul>
                {filteredNumbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
}

export default NumberFilter;
