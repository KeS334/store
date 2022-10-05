import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    console.log(process.env)
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center">
            <span className="font-bold">KeStore</span>

            <span>
                <Link to={process.env.REACT_APP_ROOT_DIR||""} className="mr-2">Product</Link>
                <Link to={process.env.REACT_APP_ROOT_DIR + "about"}>About</Link>
            </span>
        </nav>
    );
};

export default Navigation;