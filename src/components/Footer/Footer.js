import React from "react";
import "./Footer.css";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (   
        <footer class="footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <ul class="socials">
                <li><a target="_blank" href="https://github.com/ThalMug"><i className="fa fa-github"></i></a></li>
                <li><a target="_blank" href="https://fr.linkedin.com/in/thalia-meignan-1619121bb?trk=public_profile_browsemap"><i className="fa fa-linkedin"></i></a></li>
                <li><a target="_blank" href="https://www.youtube.com/channel/UCHfsa4uvMrDNZJ8t8hsRC6A"><i className="fa fa-youtube"></i></a></li>   
                <li><a target="_blank" href="https://soundcloud.com/user-794926574"><i className="fa fa-soundcloud"></i></a></li>
            </ul>
            <ul class="mails">
                <a href = "mailto: thaliameignan@gmail.com">Contact me</a>
            </ul>

        </footer>
    );
}