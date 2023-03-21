import React,{ useState } from "react";
import './Navbar.css';
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link, Outlet } from "react-router-dom";
import menu from './menu-btn.png';
import CV from './CV.pdf';

export default function Navbar() {

    const [isActive, setIsActive] = useState(true);

    const handleClick = event => {
    
      setIsActive(current => !current);
    };


    return (   
        <header className="navbar">
            <Link to="/" className="logo">Thalia</Link>
            <div className={isActive ? 'nav-links' : 'nav-links mobile-menu'}>
                <ul>
                    <li><Link to="/"  className="elt" onClick={handleClick}>Home</Link></li>
                    <li><Link to="/projects"  className="elt" onClick={handleClick}>Projects</Link></li>
                    <li><Link to="/skills"  className="elt" onClick={handleClick}>Skills</Link></li>
                    <li><a href={CV} download="cv" className="elt">CV</a></li>
                </ul>
            </div>
            <button onClick={handleClick}>
                <img src={menu} className="hamb"></img>
            </button>

        </header>
        

    );
}