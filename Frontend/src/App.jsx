import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Courses from "./Courses";
import Test from "./Test";
import AdminPanel from "./Admin";
import SpeechToText from "./Speechtotext";

function App() {
    return (
        <>  
            <Navbar />
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/contact" element={<Contact/>} />
                <Route  path="/about" element={<About/>} />
                <Route  path="*" element={Error} />
                <Route  path="/courses" element={<Courses/>}/>
                <Route  path="/test" element={<Test/>}/>
                <Route path="/admin" element={<AdminPanel/>}></Route>
                <Route path="/speechtotext" element={<SpeechToText/>}/>
            </Routes>
        </>
    );
}

export default App;