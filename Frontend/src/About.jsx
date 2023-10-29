import React from "react";
import Common from "./Common";
import web from "../src/images/4882404.jpg"

function About(){
    return(
        <Common
            title="welcome to about page"
            btnname="contact Now"
            imglink={web}
            visit='/contact'
            desc ='🎯 Our Services:
            💡 Front-end Development: Creating eye-catching, responsive designs.
            📦 Back-end Development: Building the engines that power your websites.
            📱 Mobile App Development: Taking your ideas to the palm of your users.
            🔒 Security Solutions: Keeping your data safe, always.
            📊 E-commerce Development: Turning clicks into customers.'
            brand= "Explore More with us!"
        />
    );
}

export default About;