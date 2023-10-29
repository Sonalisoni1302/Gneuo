import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5  order-2 order-lg-1 mt-lg-5 ">
                                    <h1>
                                        {props.title} <strong className="brand-name">{props.brand}</strong>
                                    </h1>
                                    <p className="my-3">
                                        {props.desc}
                                    </p>
                                    <div className="mt-3 ">
                                        <NavLink to={props.visit} className="btn-get-started">
                                            {props.btnname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imglink} className="img-fluid animated" alt=" home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;