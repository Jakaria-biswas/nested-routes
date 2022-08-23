import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
                <nav>
                      <NavLink    className='link' to="/" activeClassName="active" >Home</NavLink>
                      <NavLink    className='link' to="/post" activeClassName="active" >Post</NavLink>
                      <NavLink    className='link' to="/about" activeClassName="active">About</NavLink>
                </nav>
        </div>
    );
};

export default Header;