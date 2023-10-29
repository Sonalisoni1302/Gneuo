import React, { useState } from "react";
import axios from "axios"
import { useNavigate,NavLink } from "react-router-dom";

const Login= ()=>{
    const[email,SetEmail] = useState();
    const[password,SetPassword] = useState();
    async function Submit(e){
        e.preventDefault();
        try{
            await axios.post('http://localhost:8000/login',{
                email,password
            })
        }   
        catch{
            console.log(e);
        }
    }
    return(
        <div className="login">
            <form action="POST">
                <input type="email" onChange={(e)=>{SetEmail(e.target.value)}} placeholder="Email"/>
                <input type="password" onChange={(e)=>{SetPassword(e.target.value)}} placeholder="Password"/>
                <input type="submit" onClick={Submit}/>
            </form>
            <br/>
            <p>OR</p>
            <NavLink to={"/signup"}> Sign Up</NavLink>
        </div>
    )
}