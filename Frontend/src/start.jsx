import Admin from "./Admin"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import {useState} from "react"

function Start(){
    return(
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Start;
