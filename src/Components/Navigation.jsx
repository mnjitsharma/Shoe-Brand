import React from 'react';
import nikeLogo from '../assets/nike-logo.png';
import '../css/Navigation.css';

const Navigation = () =>{
    return(
        <nav className='container'>
            <div className='logo'>
            <img src={nikeLogo} alt="logo" width="70px"/>
            </div>
            <ul className='menu-list'>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    );
};

export default Navigation;