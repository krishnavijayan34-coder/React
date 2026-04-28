import { useState } from "react";

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
};

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;