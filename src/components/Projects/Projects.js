import React,{ useState } from "react";
import "./Projects.css";
import lf from"./lf.png";

export default function Projects() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const games = [
        {             
            "Name": "Nyasteroid",
            "Description": "84th Mini Jam. I worked as composer.",
            "image": "https://img.itch.zone/aW1nLzY0ODAzMjUucG5n/original/5Eotce.png",
            "link": ["Itch","https://metamaus.itch.io/nyasteroid"],
            "hasLink": true
        },
        {
            "Name": "Live and Evil",
            "Description": "2022's Coding Block Jam. I worked as composer.",
            "image": "https://img.itch.zone/aW1nLzc5NjE2NDkucG5n/original/npFs7v.png",
            "link": ["Itch","https://zaksley.itch.io/live-and-evil"],
            "hasLink": true
        },
        {
            "Name": "Lost and Found",
            "Description": "ENSEIRB-MATMECA / EMMI Game Jam. I worked as composer",
            "image": "https://img.itch.zone/aW1nLzUxMDA3MzAucG5n/original/M3549X.png",
            "link": ["Itch","https://metamaus.itch.io/lostfound"],
            "hasLink": true
        },
        {
            "Name": "Bomb'eirb",
            "Description": "School Project where we had to code features for a simple 2D game (a bomberman-like videogame) using C and the SDL library.",
            "image": "https://github.com/Phoetaim/bombeirb/raw/master/img/bombeirb.png",
            "link": ["Itch",""],
            "hasLink": false           
        }
    ];

    const other_proj = [
        {
            "Name": "Portolio",
            "Description": "I made the portfolio website you're currently viewing this from, using React, HTML and CSS.",
            "image": "https://github.com/Phoetaim/bombeirb/raw/master/img/bombeirb.png",
            "link": ["Link","http://localhost:3000/"],
            "hasLink": false   
        }
    ]

    return (
        <main>
            <div className="container">
                <h1>My Projects</h1>    
                <hr className="long"></hr>
                <h2>Video Games</h2>    
                <hr className="divider"></hr>
                <div class="grille">
                {games.map((data, idx) => (
                    <div className={`grid-item ${isHovered ? "hover" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src={data.image}/>
                        <p>{data.Name}</p>
                            {data.Description}
                        {data.link[1] &&  
                            <a target="_blank" href={data.link[1]} className="button">{data.link[0]}</a>
                        }
                    </div>      
                ))}
	            </div>
                <h2>Other Projects</h2>    
                <hr className="divider"></hr>
                <div class="grille">
                {other_proj.map((data, idx) => (
                    <div className={`grid-item ${isHovered ? "hover" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src={data.image}/>
                        <p>{data.Name}</p>
                            {data.Description}
                        {data.link[1] &&  
                            <a target="_blank" href={data.link[1]} className="button">{data.link[0]}</a>
                        }
                    </div>      
                ))}
	            </div>
            </div>
        </main>
    );
}