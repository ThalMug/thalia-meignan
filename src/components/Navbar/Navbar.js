import React from "react";
import './Navbar.css';
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return (   
        <header className="navbar">
            <Link to="/" className="logo">Thalia</Link>
            <div className="nav-links">
                <ul>
                    <li><Link to="/"  className="elt">Home</Link></li>
                    <li><Link to="/projects"  className="elt">Projects</Link></li>
                    <li><Link to="/skills"  className="elt">Skills</Link></li>
                    <li><Link to="/cv"  className="elt">CV</Link></li>
                </ul>
            </div>
        </header>

    );
}