import React from "react";

 export function Welcomes(){
    let islogged =true;
    if(islogged){
        return <p>
            Welcome
        </p>
    }
    else{
        return(
            <p> Please Log in</p>
        )
    }
}
