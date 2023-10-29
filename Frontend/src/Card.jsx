import React from "react";
import data from "./Sdata";
import { NavLink } from "react-router-dom";

function Card() {
    return (
        data.map((elem) => {
            return (
                <div className="col gy-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={elem.imgsrc} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{elem.title}</h5>
                            <NavLink to="#" className="btn-explore  p-2">Explore</NavLink>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Card;