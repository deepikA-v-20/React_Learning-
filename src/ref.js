import { useState, useMemo } from "react";

export function NewApp() {
    const initialNumbers = [1, 2, 3, 4, 5];  
    const [counts, setCounts] = useState(initialNumbers.map(() => 0));  

    
    const squares = useMemo(() => counts.map((count) => Math.pow(count, 2)), [counts]);

   
    const increaseCount = (index) => {
        setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
    };

    return (
        <div>
            <h1>Number List</h1>
            <ul>
                {initialNumbers.map((number, index) => (
                    <li key={index}>
                        <button onClick={() => increaseCount(index)}>
                            {number} (Count: {counts[index]}, Square: {squares[index]})
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
