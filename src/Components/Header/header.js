import React from 'react'
import {NavLink} from 'react-router-dom';
import "./header.css";
import Logo from "../../img/OwnLogo.jpeg"

export default function Header(){
    return(
        <>
            <header>
                <div className='header-main'>
                    <NavLink to="/Resume"><img src={Logo} className="own-logo" alt='logo'/></NavLink>
                    <div className='titles'>
                        <div className="name">
                            <h1 className="h1-name">Damian Rodrigo Mansilla</h1>
                        </div>
                        <div className="role">
                            <h3 className="h3-role">Full Stack Developer</h3>
                        </div>
                    </div>
                </div>
                <nav className="nav">
                    <ul className="menu">
                        <NavLink to="/Resume" className="menu-link"><li className="menu-li">Home</li></NavLink>
                        <NavLink to="/about"className="menu-link"><li className="menu-li">Sobre Mi</li></NavLink>
                        <NavLink to="/experience"className="menu-link"><li className="menu-li">Experiencia Laboral</li></NavLink>
                        <NavLink to="/knowledge"className="menu-link"><li className="menu-li">Conocimientos</li></NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}