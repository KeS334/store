import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header flex-type-1">
            <Link to={process.env.REACT_APP_ROOT_DIR||"/"} className="header__logo">KeStore</Link>

            <nav className="header_nav nav">
                <Link to={process.env.REACT_APP_ROOT_DIR||"/"}>Product</Link>
                <Link to={process.env.REACT_APP_ROOT_DIR + "about"}>About</Link>
            </nav>
        </header>
    );
};

export default Header;