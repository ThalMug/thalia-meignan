import React,{ useState } from "react";
import './Navbar.css';
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link, Outlet } from "react-router-dom";
import menu from './menu-btn.png';

export default function Navbar() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
    
      setIsActive(current => !current);
    };


    return (   
        <header className="navbar">
            <Link to="/" className="logo">Thalia</Link>
            <div className={isActive ? 'nav-links' : 'nav-links mobile-menu'}>
                <ul>
                    <li><Link to="/"  className="elt">Home</Link></li>
                    <li><Link to="/projects"  className="elt">Projects</Link></li>
                    <li><Link to="/skills"  className="elt">Skills</Link></li>
                    <li><Link to="/cv"  className="elt">CV</Link></li>
                </ul>
            </div>
            <button onClick={handleClick}>
                <img src={menu} className="hamb"></img>
            </button>

        </header>
        

    );
}