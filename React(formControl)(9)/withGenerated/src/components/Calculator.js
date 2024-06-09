import React, { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState(0);

    const calculate = () => {
        let res;
        switch (operation) {
            case "+":
                res = num1 + num2;
                break;
            case "-":
                res = num1 - num2;
                break;
            case "*":
                res = num1 * num2;
                break;
            case "/":
                res = num1 / num2;
                break;
            default:
                res = 0;
        }
        setResult(res);
    };

    return (
        <div>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(+e.target.value)}
            />
            <select
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
            >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(+e.target.value)}
            />
            <button onClick={calculate}>Calculate</button>
            <p>{`${num1} ${operation} ${num2} = ${result}`}</p>
        </div>
    );
}

export default Calculator;
