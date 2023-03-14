import React from "react";
import "./skills.css";

export default function Skills() {
    return (
        <main>
            <div className="container">
                <h1>Programming languages and Frameworks</h1>    
                <hr className="divider"></hr>
                <div class="grid">
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />C/C++</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"/>C#</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />HTML</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />CSS</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=""/>JavaScript</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />React</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt=""/>Java</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />Python</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" />Matlab</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />Bash</div>
                </div>
                <h1>Tools and Engines</h1>
                <hr className="divider"></hr>
                <div class="grid">
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />Unity</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg"/>Godot</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />Git</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />Visual Studio Code</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt=""/>Linux</div>
                    <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" />Oracle Cloud</div>                   
                </div>
            </div>
        </main>
    );
}