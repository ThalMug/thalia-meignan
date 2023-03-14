import React from "react";
import "./Footer.css";
import { Link, Outlet } from "react-router-dom";

export default function Footer() {
    return (   
        <footer class="footer">
            <div class="con">
                <div class="row">
                    <div class="footer-col">
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Projects">Projects</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/CV">CV</Link></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Mes contacts</h4>
                        <ul>
                            <li><a target="_blank"  href="https://itch.io/profile/thalia33">Itch</a></li>
                            <li><a target="_blank"  href="https://github.com/ThalMug/">Github</a></li>
                            <li><a target="_blank"  href="https://fr.linkedin.com/in/thalia-meignan-1619121bb?trk=public_profile_browsemap">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </footer>
    );
}