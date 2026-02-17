import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <div className="container">
            <h1>Counter</h1>
            <p className="counter">{count}</p>
            <button className="btn btn-2" onClick={handleIncrement}>
                Increase
            </button>
            <button className="btn btn-3" onClick={handleDecrement}>
                Decrease
            </button>
        </div>
    );
};


export default Counter;
