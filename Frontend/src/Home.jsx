import React from "react";
import web from '../src/images/3714960.jpg'
import Common from "./Common";

function Home(){
    return(<Common
        title="Learn any Language Accent with us!"
        btnname="Get start"
        imglink={web}
        visit='/admin'
        desc='
        Welcome to our Accent Learning Course! 🌟 Improve your pronunciation and boost your communication skills with  interactive lessons. 💬 Practice, practice, practice! 🚀 Flexibility for your schedule - learn at your own pace . Ready to get started? Click the "Get started" button below. 🎉 Unlock your potential and gain confidence in your communication
        '
        brand="Versant Test"
    />)
}
export default Home;