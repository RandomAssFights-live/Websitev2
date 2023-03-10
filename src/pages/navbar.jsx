import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.min.css'

function Navbar() {
    return (
        <nav>
            <Link id='Home' to='/'>Home</Link>
            <Link id='FHS' to='fhs'>Franklin HS</Link>
            <Link id='OCHS' to='ochs'>Oil City HS</Link>
        </nav>
    );
}

export default Navbar;