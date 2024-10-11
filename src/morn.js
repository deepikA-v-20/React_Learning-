import React, { useState } from "react";

export function UseState1() {
    const currentHour = new Date().getHours();
    const initialGreeting = currentHour < 12 ? "Good Morning" : "Good Noon";
    const [greeting] = useState(initialGreeting);

    return (
        <div>
        <h1>{greeting}</h1>
    </div>
);
}