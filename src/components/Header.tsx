import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header flex-type-1">
            <Link to="/store" className="header__logo">KeStore</Link>

            <nav className="header_nav nav">
                <Link to="/store">Product</Link>
                <Link to="/store/about">About</Link>
            </nav>
        </header>
    );
};

export default Header;