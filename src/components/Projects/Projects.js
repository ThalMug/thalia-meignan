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

    return (
        <main>
            <div className="container">
                <h1>My Projects</h1>    
                <hr className="long"></hr>
                <h2>Video Games</h2>    
                <hr className="divider"></hr>
                <div class="grille">
                <div className={`grid-item ${isHovered ? "hover" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src="https://img.itch.zone/aW1nLzY0ODAzMjUucG5n/original/5Eotce.png"/>
                    <p>Nyasteroid</p>
                        84th Mini Jam. I worked as composer. 
                        <a target="_blank" href="https://metamaus.itch.io/nyasteroid" className="button">Itch</a>
                    </div>
                    <div class="grid-item"><img src="https://img.itch.zone/aW1nLzc5NjE2NDkucG5n/original/npFs7v.png"/>
                    <p>Live and Evil</p>
                        2022's Coding Blocks Jam. I worked as composer. 
                        <a target="_blank"  href="https://zaksley.itch.io/live-and-evil" className="button">Itch</a>
                    </div>              
                    <div class="grid-item"><img src={lf}/>
                    <p>Lost+Found</p>
                        2020's Global Game Jam. I worked as composer. 
                        <a target="_blank"  href="https://metamaus.itch.io/lostfound" className="button">Itch</a>
                    </div>         
	            </div>
            </div>
        </main>
    );
}