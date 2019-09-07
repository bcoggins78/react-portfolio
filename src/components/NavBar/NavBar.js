import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="nav-container">
            <div>
            <div className="logo">BRYANT COGGINS</div>
            <div className="title">FULL STACK WEB DEVELOPER</div>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="https://www.linkedin.com/in/bryant-coggins/"
                        target="_blank" rel="noopener noreferrer" title="Linkedin Profile">
                        <i className="fab fa-linkedin fa-lg"></i></a>
                </li>
                <li>
                    <a href="https://github.com/bcoggins78"
                        target="_blank" rel="noopener noreferrer" title="Github">
                        <i className="fab fa-github fa-lg"></i></a>
                </li>
                <li>
                    <i className="fas fa-file fa-lg"></i>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;