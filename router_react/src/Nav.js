import React from 'react';
import './App.css';
import {Link} from 'react-dom';

function Nav() {
  return (
    <nav>
        <h3>Logo</h3>
        <ul className='nav-links'>
            <li>Home</li>
            <li>about</li>
            <li>Shop</li>
        </ul>
    </nav>
  );
}

export default Nav;
