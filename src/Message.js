import React from "react";
// function parent(){
//     const mess="message";
//     return <p>{props.mess}</p>
// }
const usr={
    age:12,
    name:"ram"
}
function app(){
    return (
        <div className="App">
            <h1>wek</h1>
            <Message content ={usr}></Message>
        </div>
    )
}