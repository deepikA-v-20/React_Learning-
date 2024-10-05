import React from "react";
import Car from "./Car"; 

class App1 extends React.Component {
    render() {
        // Create two car objects
        const C1 = {
            model: "Toyota Camry",
            year: 2021,
            color: "Blue",
        };

        const C2 = {
            model: "Honda Accord",
            year: 2022,
            color: "Red",
        };

        return (
            <div>
                <h1>Car Showroom</h1>
                <Car car={C1} /> {/* Pass C1 as props */}
                <Car car={C2} /> {/* Pass C2 as props */}
            </div>
        );
    }
}

export default App1;
