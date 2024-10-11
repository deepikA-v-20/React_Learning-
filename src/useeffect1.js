import { useEffect, useState } from "react";

function Useeffect1(){
    const[count,setcount] = useState(0);

    const[isactive,setactive]= useState(false);
    useEffect(()=>{
        if(isactive){
            document.title = `count :${count}`;
        }
    },[isactive,count]);
    return(
        <div>
            <p> count:{count}</p>
            <button onClick={() => setcount(count+1)}>increment</button> 

        </div>
    )
}
export default Useeffect1;