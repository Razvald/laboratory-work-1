import React, { useState } from "react";

function NumberSystemCalculator() {
    const [input, setInput] = useState("");
    const [fromBase, setFromBase] = useState(10);
    const [toBase, setToBase] = useState(10);
    const [output, setOutput] = useState("");

    const convertNumber = () => {
        try {
            const number = parseInt(input, fromBase);
            if (isNaN(number)) {
                setOutput("Invalid input");
            } else {
                setOutput(number.toString(toBase));
            }
        } catch (error) {
            setOutput("Invalid input");
        }
    };

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Enter number in base ${fromBase}`}
            />
            <select
                value={fromBase}
                onChange={(e) => setFromBase(parseInt(e.target.value, 10))}
            >
                <option value="2">Binary</option>
                <option value="10">Decimal</option>
                <option value="16">Hexadecimal</option>
            </select>
            <span> to </span>
            <select
                value={toBase}
                onChange={(e) => setToBase(parseInt(e.target.value, 10))}
            >
                <option value="2">Binary</option>
                <option value="10">Decimal</option>
                <option value="16">Hexadecimal</option>
            </select>
            <button onClick={convertNumber}>Convert</button>
            <p>Result: {output}</p>
        </div>
    );
}

export default NumberSystemCalculator;
