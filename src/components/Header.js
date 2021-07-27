import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>
            <h1>React Router Tutorial</h1>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/profile"}>Profile</Link>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Header;