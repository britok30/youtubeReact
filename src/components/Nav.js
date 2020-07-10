import React from "react";

const Nav = () => {
    return (
        <div>
            <a href="/">
                <i className="fab fa-youtube"></i>
            </a>
            <h1 className="main-lead">Tube.js</h1>
            <div className="wrapper">
                <ul className="fake-links">
                    <li>
                        <i className="fas fa-video"></i>
                    </li>
                    <li>
                        <i className="fas fa-bell"></i>
                    </li>
                    <li>
                        <i className="fas fa-th"></i>
                    </li>
                    <li>
                        <i className="far fa-user-circle"></i>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
