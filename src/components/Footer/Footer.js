import React from "react";
import "./Footer.css";
import { Link, Outlet } from "react-router-dom";

export default function Footer() {
    return (   
        <footer class="footer">
            <div className="footer_elt">
                <div id="coll" className="links">
                    <h4>
                        Links
                    </h4>
                    <Link className="links_elt" to="/">Home</Link>
                    <Link to="/projects"  className="links_elt">Projects</Link>
                    <Link to="/skills"  className="links_elt">Skills</Link>
                    <Link to="/cv"  className="links_elt">CV</Link>
                </div>
            </div>
        </footer>
    );
}