import "./Knowledge.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faJs, faHtml5, faCss3Alt, faSass, faReact, faNodeJs, faPython, faGit} from '@fortawesome/free-brands-svg-icons'
import Javascript from "../../img/JavaScript.png"
import HTML from "../../img/HTML.png"
import CSS from "../../img/CSS.png"
import Sass from "../../img/Sass.png"
import React from "../../img/React.svg"
import NodeJS from "../../img/NodeJS.svg"
import Python from "../../img/Python.png"
import Git from "../../img/Git.png"
import Django from "../../img/Django.png"
import MySQL from "../../img/MySQL.png"
import MongoDB from "../../img/MongoDB.svg"
import Express from "../../img/Express.png"
import Scrum from "../../img/Scrum.png"


export default function Knowledge(){
    const icons = [{name: "Javascript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript", image: Javascript}, 
                   {name: "HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML", image: HTML}, 
                   {name: "CSS", url: "https://developer.mozilla.org/es/docs/Web/CSS", image: CSS}, 
                   {name: "Sass", url: "https://sass-lang.com/", image: Sass}, 
                   {name: "React", url: "https://es.reactjs.org/", image: React}, 
                   {name: "NodeJs", url: "https://nodejs.org/en/", image: NodeJS}, 
                   {name: "Python", url: "https://developer.mozilla.org/es/docs/Glossary/Python", image: Python}, 
                   {name: "Git", url: "https://developer.mozilla.org/es/docs/Glossary/Git", image: Git},
                   {name: "Django", url: "https://www.djangoproject.com/", image: Django},
                   {name: "MySQL", url: "https://www.mysql.com/", image: MySQL},
                   {name: "MongoDB", url: "https://www.mongodb.com/", image: MongoDB},
                   {name: "Express JS", url: "http://expressjs.com/", image: Express},
                   {name: "SCRUM", url: "https://www.scrum.org/", image: Scrum},
                ]
    return(
        <>  
            <main>
                <section className="education">
                    <div className="education-title">
                        <h1 className="main-title">EDUCACIÓN</h1>
                        <div className="each-education">
                            <h3 className="institution-title">DIGITAL HOUSE</h3>
                            <p className="degree">Desarrollo Web Full Stack, 2021</p>
                        </div>
                        <div className="each-education">
                            <h3 className="institution-title">UNIVERSIDAD ARGENTINA DE LA EMPRESA</h3>
                            <p className="degree">Licenciatura en Economía (Sin finalizar, asignaturas aprobadas 24/40).</p>
                        </div>
                    </div>
                    <div className="skills">
                        <h1>SKILLS</h1>
                        <ul className="skills-ul">
                            {icons.map(icon => {
                                return(
                                <a href={icon.url} target="blank">
                                    <li className={`skills-li has-logo`}>
                                        <img src={icon.image} className={`${icon.name} logo`} alt={`${icon.name + "-logo"}`}/>
                                        {/* <FontAwesomeIcon className="logo" icon={icon.icon} /> */}
                                        <span className="logo-name">{icon.name}</span>
                                    </li>
                                </a>
                            )})}
                        </ul>
                    </div>
                </section>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </main>
        </>
    )
}