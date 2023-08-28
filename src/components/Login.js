import { useCookies } from "react-cookie";
import { useState } from "react";
export default function(props)
{
    const[email,setEmail]= useState('')
    // const [cookies,setCookies] =useCookies(['data']);
    const submitdata=()=>
    {
        // console.log(email);        
        // setCookies('email',email)
        sessionStorage.setItem('email',email)
        // localStorage.clear(); // to clear complete local storage
        // localStorage.removeItem("email")   // to clear element by key only
        console.log(sessionStorage.getItem("email"));
        props.changeState(email);
    }
    return(        
        <>
        <p>Enter email:</p>
        <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        <input type="button" value="Login" onClick={()=>submitdata()} />
        </>
    )
}