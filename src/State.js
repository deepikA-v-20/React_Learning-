import React from "react";

class State extends React.Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }

    incre=()=>{
        this.setState({count:this.state.count+1});
    }
    dre=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
    return(
        <div>
            <h1>value {this.state.count}</h1>
            <button onClick={this.incre}>increase</button>
            <br></br>
            <button onClick={this.dre}>decrese</button>
        </div>
    )
    }
}
export default State;