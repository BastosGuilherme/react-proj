import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Buttonlink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="BastFlix Logo"/>
            </a>

            <Buttonlink className="ButtonLink" href="/">
            New
            </Buttonlink>
        </nav>
    );
}

export default Menu;
