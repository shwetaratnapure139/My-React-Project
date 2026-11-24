import {useRef} from "react";
import React from "react"
const Demo=()=>{
    const name=useRef();
    function function1(){
        console.log("name,current.value");
    }
    return(
        <>
        <input type="text" placeholder="Enter Your Name" ref={name}/>
        <button type="button"  onClick={function1}>Submit</button>
        </>
    )
}
export default Demo;
