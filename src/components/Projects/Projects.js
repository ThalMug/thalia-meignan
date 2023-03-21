import React,{ useState } from "react";
import "./Projects.css";
import lf from"./lf.png";
import Switch from '../Switch/Switch';



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
            "Name": "Nyasteroids",
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
        }
    ];

    const Soundtrack = [
        {
            "link":"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1289323441&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        },        
        {
            "link":"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1384755244&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        },
        {
            "link":"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1204042594&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        }
    ];


    const other_proj = [
        {
            "Name": "Portolio",
            "Description": "I made the portfolio website you're currently viewing this from, using React, HTML and CSS.",
            "image": "",
            "link": ["Link","/"],
            "hasLink": false   
        }
    ]
    const gameorst = [games,other_proj]; 

    const [checked, setChecked] = useState(false); 
    let status = 0;


    const handleChange = () => { 
      
      setChecked(!checked); 
      status = 1;
      
    }; 
    return (
        <main>
            <div className="containing">
                <h1>My Projects</h1>    
                <hr className="long"></hr>
                <h2>Video Games</h2>  


                <hr className="divider"></hr>


                <label class="switch">
                    <input type="checkbox" onChange={handleChange}/>
                    <span class="slider round"></span>
                </label>
                <h5>
                    {checked ? 'Soundtrack' : 'VideoGames'}
                </h5>                


                {!checked &&
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
                }
                {checked && 
                    <div class="grille">
                    {Soundtrack.map((data, idx) => (   
                        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={data.link}></iframe> 
                    ))}
                    </div>
                }


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