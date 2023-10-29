import React, { useState } from "react";

function Contact() {
    const [data,setData] = useState(
        {
            name : "",
            email :"",
            number : "",
            msg : ""
        }
    )
    const userinput = (event)=>{
        const {name , value} = event.target;
        setData((prev)=>{
            return{
                ...prev,
                [name] : value
            }
    });
    }
    const fromSubmit = (e)=>{
        // e.prevetDefault();
        alert(`Hey! ${data.name} you are registerd with ${data.email}`);
    }
    return (
        <div class="container ">
            <div class="row">
                <div class="col-6 mx-auto my-5 form">
                    <form on onSubmit={fromSubmit}> 
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">User Name</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="John" onChange={userinput}
                        name="name"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                        onChange={userinput}
                        name="email"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="xxxxxxxx89" 
                        onChange={userinput}
                        name="number"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        onChange={userinput}
                        name="msg"
                        ></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>    
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;