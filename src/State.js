import React from "react";

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            vis: true,
            darkmode: false, 
            backgroundColor: "white", 
        };
    }

    toggleVisibility = () => {
        this.setState((prev) => ({
            vis: !prev.vis,
        }));
    };

    toggleMode = () => {
        this.setState((prev) => ({
            darkmode: !prev.darkmode,
        }));
    };

    incre = () => {
        this.setState((prev) => ({
            count: prev.count + 1,
        }), () => {
            if (this.state.count % 5 === 0) {
                this.changeColor("blue");
            }
        });
    };

    dre = () => {
        this.setState((prev) => ({
            count: prev.count - 1,
        }), () => {
            if (this.state.count === -1) {
                this.changeColor("white");
            }
        });
    };

    changeColor = (color) => {
        this.setState({ backgroundColor: color }); 
    };

    render() {
        const { vis, darkmode, count, backgroundColor } = this.state; 
        const style = {
            backgroundColor: backgroundColor || (darkmode ? "black" : "white"),
            color: darkmode ? "white" : "black", 
            padding: "20px", 
            textAlign: "center", 
            minHeight: "100vh", 
        };

        return (
            <div style={style}>
                <h1>Value: {count}</h1>
                <button onClick={this.incre}>Increase</button>
                <br />
                <button onClick={this.dre}>Decrease</button>
                <br />
                <button onClick={this.toggleVisibility}>
                    {vis ? "Hide" : "Show"} Count
                </button>
                {vis && <p>Current Count: {count}</p>}
                <button onClick={this.toggleMode}>
                    Switch to {darkmode ? "Light" : "Dark"} Mode
                </button>
            </div>
        );
    }
}

export default State;
