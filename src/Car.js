import React from "react";

class Car extends React.Component {
    render() {
        const { car } = this.props; // Destructure car object from props
        return (
            <div>
                <h2>Car Details:</h2>
                <p>Model: {car.model}</p>
                <p>Year: {car.year}</p>
                <p>Color: {car.color}</p>
            </div>
        );
    }
}

export default Car;
